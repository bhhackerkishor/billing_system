'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, BarChart3, Package, ShieldCheck, Zap, ArrowRight, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ShoppingCart size={24} />
            </div>
            <span className="text-xl font-black italic tracking-tighter uppercase">OHM SAKTHI STORE</span>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#tech" className="hover:text-primary transition-colors">Stack</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </div>
            <Link href="/login" className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Launch Terminal
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block">
              Next Generation POS Engine
            </span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.9] mb-12">
              The Future of <br />
              <span className="text-primary italic">Retail Intelligence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-16 leading-relaxed">
              A high-performance, real-time POS system engineered for precision and speed.
              Built with modern technologies to handle complex inventory and rapid transactions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/dashboard" className="px-12 py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-3">
                Start Audit <ArrowRight size={18} />
              </Link>
              <a href="https://github.com/Kishore" className="px-12 py-5 glass border border-white/5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-white/5 transition-all">
                <Github size={18} /> Open Repository
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Matrix */}
      <section id="features" className="py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: "Instant Velocity",
                desc: "Proprietary sync engine ensures transactions are processed in milliseconds, even under heavy load."
              },
              {
                icon: BarChart3,
                title: "Deep Analytics",
                desc: "Precision financial reporting with item-level tracking and automated gross profit calculation."
              },
              {
                icon: Package,
                title: "Registry Control",
                desc: "Full-spectrum inventory management with real-time stock alerts and wholesale pricing modules."
              }
            ].map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                key={idx}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Section */}
      <section id="about" className="py-48 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-16 rounded-[4rem] border border-white/5 relative z-10"
          >
            <ShieldCheck size={48} className="mx-auto text-primary mb-8" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8">Developed by KISHORE</h2>
            <p className="text-muted-foreground text-lg mb-12">
              This project was architected and developed with a focus on visual performance and operational efficiency.
              Designed to be the gold standard for independent retail management.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Est. 2025</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
          </motion.div>
        </div>
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
          <span className="text-[40vw] font-black italic uppercase leading-none">POS</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">© 2025 OHM SAKTHI STORE • High Performance POS</span>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-primary">Built by Kishore</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
