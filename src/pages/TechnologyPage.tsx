import React from 'react';
import { motion } from 'motion/react';
import { Box, Waves, History, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function TechnologyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-on-secondary font-body text-xs font-bold tracking-wide uppercase">
            Advanced Diagnostics
          </span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1]">
            The Science of Sonara™: <span className="text-primary italic">Precision</span> in every scan.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Our proprietary Conformable Ultrasound Technology redefines how we interact with medical imaging. By merging flexible electronics with advanced acoustics, we've created a diagnostic interface that moves with you.
          </p>
          <div className="flex gap-4">
            <button className="signature-gradient text-white px-8 py-4 rounded-xl font-headline font-bold ghost-shadow">Explore our Patents</button>
            <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-container-high transition-colors">Watch Technology Reel</button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] rounded-3xl overflow-hidden ghost-shadow"
        >
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA4gX0i8Va2pFyav3shj0WIQ_GTKtNsSW2ZKa_S9xvBky-oHmLMROLvX1c5YdHjbJW7kvOshrdIN3ufcOJTbMOZaBm3WnO0c-fbzyf052hnQec88ddONMxRX_uXpUDN5o8QAbJP0E3dskYOjI4FIOvJRktpsH7sOfu2MIxx9Zpc9Sq63YTav1nyqWUQAK44sNsj_aPpNWlZsZBE896nTIqqjw4MMbvHoxILcoKJVVsbsmvQQbpPmiYBiwtTyqFEy68VVnNbaYKpiw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* Conformable Ultrasound Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">Conformable Ultrasound Technology</h2>
            <p className="text-on-surface-variant max-w-2xl">Unlike rigid traditional probes, Sonara™ utilizes a flexible transducer array that contours perfectly to the human body, ensuring continuous contact and superior signal fidelity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-shadow flex flex-col justify-between border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Box className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Geometry-optimized scanning</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Patented structural algorithms adjust the sonic beam in real-time based on the exact curvature of the skin, eliminating air gaps and shadow artifacts.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/5">
                <img 
                  className="w-full h-32 object-cover rounded-lg opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-IE0JTRoBaFmIS7fTkWrHS_V-jccIWG6BKjcZV-umxZ4UaDfD0B_3QZ4eMPJgV7YOe3NpVyM5yHNNVCZDBJKlBLSSYcfHTfx78ActLEoIz-A4J1QN7m2-gDX6SDdTAyL81EMB75vyEeylNjO9DoM7AIuDdPcjpZHepjo8FDW15khKahrwDt6BhEhOE7QXc1gLBO9bfzTelfD8pWRtzU6T-SwJmhOwq9-Gvfn106ExmF0p7ITryqym37bSn4MrQP_UTa8_Cobazg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-shadow flex flex-col justify-between border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Signal-enhanced imaging</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Our low-noise pre-amplifiers are integrated directly into the flexible substrate, boosting signal-to-noise ratio by 40% compared to handheld devices.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/5">
                <img 
                  className="w-full h-32 object-cover rounded-lg opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYBxHW82WWMDljZMOlgtLv1cQePLlXR14LxJMspoHKtSXn1l_RNti-Evria2_slTXNtsOIttEAFS_RnA-iplm40s-3f-00i56B8yk0krGCyn7jTkuDtHm8PMrgyn1U7X-MgiHZ31F1Nw_kOsIVmYKnjVKxnA4DKAdGyFGRAi35bIDdSgZ_Cqkf79t67GgMKPrT411o4a0XuKBIz_kGSHReicubMAuEmZTcNLVTvp8BwT4eOm0ZRjeh1GhXAXrIBju9cDXmXalrHQ"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-shadow flex flex-col justify-between border border-outline-variant/10">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">Longitudinal data tracking</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Sonara™ doesn't just take snapshots. It captures data over time, allowing clinicians to observe trends and subtle changes that a single scan might miss.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/5">
                <img 
                  className="w-full h-32 object-cover rounded-lg opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGDRQ0BwJaj3FJZoAZj4CGm6tDVneEzb6Bwv_g6PGMptVR1SatdvLyEefMA6jGsXh85zw_hf_UjOmcsoeRHg87WN8M2SuHOLFUoXYeNAzGy1IF2k7Tovi5ebXbSFjVnMFVETSnqRXUWdQJj6KDCourJ2GpZ3wkfViV7hSrWji_eeNrRv2dFWbIqCMNRNKI5UEdhv5KwUQ89RytWC05wxGQLG9DsR12pe3qIUPrJYUi4SLOfUWrJ_op5bd1Ni8tzzrbOkmSFnm0rDY"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Technology Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative bg-white p-8 rounded-3xl ghost-shadow border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="font-body text-xs font-bold tracking-widest uppercase text-on-surface-variant">Non-Ionizing Frequency Analysis</span>
            </div>
            <svg className="w-full h-auto" viewBox="0 0 400 150">
              <path d="M0,75 Q25,25 50,75 T100,75 T150,75 T200,75 T250,75 T300,75 T350,75 T400,75" fill="none" stroke="#4256D0" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M0,75 Q25,125 50,75 T100,75 T150,75 T200,75 T250,75 T300,75 T350,75 T400,75" fill="none" opacity="0.3" stroke="#98477D" strokeDasharray="8 4" strokeWidth="1.5"></path>
            </svg>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-surface rounded-xl">
                <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">Emission Level</p>
                <p className="text-xl font-bold text-primary">0.02% <span className="text-xs font-normal text-on-surface-variant">of FDA Limit</span></p>
              </div>
              <div className="p-4 bg-surface rounded-xl">
                <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-tighter">Safety Index</p>
                <p className="text-xl font-bold text-primary">Certified <span className="text-xs font-normal text-on-surface-variant">Class II</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight">Safe. Silent. Non-Ionizing.</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Sonara™ uses high-frequency sound waves rather than ionizing radiation (X-rays). This makes it safe for repeated use, enabling long-term monitoring without the cumulative risks associated with traditional diagnostic imaging.
          </p>
          <ul className="space-y-4">
            {[
              "No harmful radiation exposure",
              "Wearable-grade biocompatible interface",
              "Integrated thermal regulation for comfort"
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <CheckCircle className="text-secondary w-5 h-5 mt-0.5" />
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="bg-surface-container-high py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Connectivity & Clinical Insights</h2>
            <p className="text-on-surface-variant">
              Our cloud-integrated platform transforms raw acoustic data into actionable clinical insights. Real-time visualization for the patient is paired with deep-dive analytics for the clinician.
            </p>
            <div className="p-6 bg-surface-container-lowest rounded-2xl ghost-shadow">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-primary w-6 h-6" />
                <h4 className="font-headline font-bold text-sm">HIPAA-Compliant Sync</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Data is encrypted at the source and streamed directly to secure clinician portals, ensuring the highest standards of medical privacy and security.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 max-w-2xl mx-auto">
              <div className="bg-surface-container px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Patient</p>
                    <p className="text-xs font-bold">Ref: SONA-92831</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex justify-between items-end h-32 gap-2">
                  {[45, 62, 55, 88, 70, 48].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/5 rounded-t-lg relative">
                      <div 
                        className={cn(
                          "absolute bottom-0 w-full rounded-t-lg transition-all",
                          h > 80 ? "bg-primary" : "bg-secondary"
                        )} 
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-surface-container-low rounded-xl">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-2 uppercase">Tissue Density Index</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">14.2</span>
                      <span className="text-[10px] text-primary font-bold">↑ 2.1%</span>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-xl">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-2 uppercase">Acoustic Clarity</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">98%</span>
                      <span className="text-[10px] text-primary font-bold">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
