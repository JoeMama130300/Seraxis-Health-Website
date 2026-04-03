import React from 'react';
import { Share2, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Logo className="h-8" />
          </div>
          <p className="font-body text-xs leading-relaxed text-slate-500">
            A Seraxis Health brand. Advancing breast health through intelligent acoustic sensing and longitudinal data science.
          </p>
        </div>
        
        <div>
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-6">Product</h4>
          <ul className="space-y-4 font-body text-xs leading-relaxed">
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Technology</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">For Clinicians</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Research Papers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-6">Company</h4>
          <ul className="space-y-4 font-body text-xs leading-relaxed">
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Our Mission</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Contact Us</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-primary mb-6">Legal</h4>
          <ul className="space-y-4 font-body text-xs leading-relaxed">
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 hover:text-primary underline transition-all" href="#">Regulatory Disclaimers</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pb-12">
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs leading-relaxed text-slate-500">
            © 2024 Seraxis Health. All rights reserved. Sonara™ is a registered trademark.
          </p>
          <div className="flex gap-6">
            <Share2 className="text-slate-400 w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <Globe className="text-slate-400 w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
