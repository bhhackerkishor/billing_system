'use client';

import Sidebar from './Sidebar';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user } = useAuthStore();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router, mounted]);

    if (!mounted || !isAuthenticated) return null;

    return (
        <div className="flex bg-background min-h-screen text-foreground overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

                <header className="h-20 border-b border-border flex items-center justify-between px-10 shrink-0 bg-background/50 backdrop-blur-md">
                    <div>
                        <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Terminal Active</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <p className="font-black text-lg tracking-tight">OPERATOR: {user?.name?.toUpperCase()}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Access Level</span>
                            <div className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-tighter shadow-sm">
                                {user?.role}
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary font-black shadow-inner">
                            {user?.name?.[0]?.toUpperCase()}
                        </div>
                    </div>
                </header>

                <section className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                    {children}
                </section>
            </main>
        </div>
    );
}
