import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Our Mission', path: '/' },
    { name: 'Technology', path: '/technology' },
    { name: 'Why Sonara', path: '/why-sonara' },
    { name: 'For Clinicians', path: '/clinicians' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img 
            alt="Seraxis Health Logo" 
            className="h-10 md:h-12 object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uh_BRs-c2p8ZdT48LK4n94_TqH73uU482B6DGyYi2NfQTm7fXRfWs-DbRS8ozXcvUUZEHHNzdOz1bi8aQL3zCXHtu8AuoL8VwKwZ4TTUX3sXT6DJfLeT8H4j9r9BIWmmvkXehUTAdAPTMR6oz9WnfcAR5wrHBIwoBM25ANsXr0LE2S376clYwtnpGZUi97giuC2FsT0Abyb_g_VpLxDCug1c2aBowGbilkhcPVvgU4Vdtbo_FmOZdcWi68L-XwKd_twvtO4be_k6Q"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-headline text-sm font-semibold tracking-tight transition-colors",
                location.pathname === link.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-slate-600 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button className="signature-gradient text-on-primary px-6 py-2.5 rounded-full font-headline text-sm font-bold scale-95 active:scale-90 transition-transform">
          Join the Waitlist
        </button>
      </div>
      <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
}
