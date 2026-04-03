import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productLinks = [
    { name: 'Technology', path: '/technology', desc: 'The science of Sonara™' },
    { name: 'Why Sonara', path: '/why-sonara', desc: 'Continuous breast health' },
  ];

  const clinicianLinks = [
    { name: 'Overview', path: '/clinicians', desc: 'Clinical integration' },
    { name: 'Research', path: '#', desc: 'Clinical validation' },
    { name: 'Contact', path: '#', desc: 'Medical affairs' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo className="h-8 md:h-10" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={cn(
              "font-headline text-sm font-semibold tracking-tight transition-colors",
              location.pathname === '/' ? "text-primary" : "text-slate-600 hover:text-primary"
            )}
          >
            Our Mission
          </Link>

          {/* Product Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={cn(
              "flex items-center gap-1 font-headline text-sm font-semibold tracking-tight transition-colors",
              (location.pathname === '/technology' || location.pathname === '/why-sonara') ? "text-primary" : "text-slate-600 hover:text-primary"
            )}>
              Product <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'product' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <p className="font-headline text-sm font-bold text-on-surface">{link.name}</p>
                      <p className="text-xs text-slate-500">{link.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clinicians Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('clinicians')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={cn(
              "flex items-center gap-1 font-headline text-sm font-semibold tracking-tight transition-colors",
              location.pathname === '/clinicians' ? "text-primary" : "text-slate-600 hover:text-primary"
            )}>
              Clinicians <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'clinicians' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
                >
                  {clinicianLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block p-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <p className="font-headline text-sm font-bold text-on-surface">{link.name}</p>
                      <p className="text-xs text-slate-500">{link.desc}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block signature-gradient text-on-primary px-6 py-2.5 rounded-full font-headline text-sm font-bold scale-95 active:scale-90 transition-transform">
            Join the Waitlist
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main</p>
                <Link 
                  to="/" 
                  className="block text-lg font-headline font-bold text-on-surface"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Mission
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product</p>
                <div className="grid gap-4">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-headline font-bold text-on-surface">{link.name}</p>
                      <p className="text-xs text-slate-500">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clinicians</p>
                <div className="grid gap-4">
                  {clinicianLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-headline font-bold text-on-surface">{link.name}</p>
                      <p className="text-xs text-slate-500">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <button className="w-full signature-gradient text-on-primary py-4 rounded-2xl font-headline font-bold text-base shadow-lg">
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
}
