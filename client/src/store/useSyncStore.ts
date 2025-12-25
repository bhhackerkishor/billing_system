import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '@/lib/api';
import toast from 'react-hot-toast';

interface OfflineSale {
    id: string;
    data: any;
    timestamp: number;
}

interface SyncState {
    offlineSales: OfflineSale[];
    isOnline: boolean;
    setOnline: (status: boolean) => void;
    queueSale: (sale: any) => void;
    syncSales: () => Promise<void>;
}

export const useSyncStore = create<SyncState>()(
    persist(
        (set, get) => ({
            offlineSales: [],
            isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
            setOnline: (status) => set({ isOnline: status }),
            queueSale: (sale) => {
                const { offlineSales } = get();
                const newSale = {
                    id: Math.random().toString(36).substr(2, 9),
                    data: sale,
                    timestamp: Date.now()
                };
                set({ offlineSales: [...offlineSales, newSale] });
                toast.success('Sale saved offline (Connection low)');
            },
            syncSales: async () => {
                const { offlineSales, isOnline } = get();
                if (!isOnline || offlineSales.length === 0) return;

                toast.loading(`Syncing ${offlineSales.length} offline transactions...`, { id: 'sync' });

                const remainingSales = [...offlineSales];
                let successCount = 0;

                for (const sale of offlineSales) {
                    try {
                        await api.post('/sales', sale.data);
                        successCount++;
                        const index = remainingSales.findIndex(s => s.id === sale.id);
                        if (index > -1) remainingSales.splice(index, 1);
                        set({ offlineSales: [...remainingSales] });
                    } catch (err) {
                        console.error('Failed to sync sale', sale.id, err);
                    }
                }

                if (successCount > 0) {
                    toast.success(`Successfully synced ${successCount} transactions`, { id: 'sync' });
                } else {
                    toast.dismiss('sync');
                }
            }
        }),
        {
            name: 'pos-sync-storage',
        }
    )
);
