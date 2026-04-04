import React from 'react';
import { motion } from 'motion/react';
import { Activity, Radio, TrendingUp, Ruler, Accessibility, ShieldCheck } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary text-on-secondary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Introducing Next-Gen Screening
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface leading-tight tracking-tight mb-8">
              Redefining Breast Health through <span className="text-primary">Continuous, Intelligent Monitoring.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Wearable, Non-invasive Screening from the Comfort of Home. Empowering proactive wellness with medical-grade precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                Join the Waitlist
              </button>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-surface-dim transition-all">
                Learn More about our Technology
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 signature-gradient opacity-10 blur-[120px] rounded-full group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-surface-container-low rounded-3xl overflow-hidden aspect-square shadow-xl border border-outline-variant/10">
              <img 
                alt="Advanced technology interaction" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAir6IjlC-uLAigyWQxYIhPuF-kI7_xooCWigSX5yvUYVRzSqk4qPwHnc1FqKfhaQWaMsdHBrm2eMZi9d6UN75hExtFj_yayfxpM_qx1ytfzvOAwGElW6HBAFM3YKrTwnARvI-dUcSG1VrYfS6q4U0J4Qtkx2Iigl6-B3EPmlAjN2zhz9ipYCnNB9IXZXB2euvzd6ToDY08wqg20wnenipivtCez1aMVXTIxwaQDWV0R3M35UyqkO5rQALv6esT31C6XEMXLKLWnLQ"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Live Status</div>
                    <div className="text-sm font-semibold text-primary">Continuous Signal Optimization Active</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
              Precision Engineering, <br/>Personal Insight.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our multi-patented sensor architecture transforms periodic checks into a longitudinal health narrative.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Radio className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Signal-Enhanced Imaging</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Advanced adaptive beamforming technology that minimizes noise and maximizes clarity, providing clinical-grade imaging data in a wearable form factor.
                </p>
              </div>
              <div className="mt-12 overflow-hidden rounded-xl h-48 bg-surface-container">
                <img 
                  alt="Ultrasound technology" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOZUbkTQBdoG3i5fXCr8ttEbXHQsUVbV4N6gSlAkinSE6Tc5di7oDgcOmnH9ZddxbVpCTBO9ejvPZs_vdV9Fj0a47DewlhjWn68MTQMXrRG4PisG8vT5O6QQo40MUL5O1mg9bANJ5BzdXXBCuZKnCcczxcgkpmSYNizVaiCnOVQRrfovZ7mdYxICPuIFqG9wCUA6U_EVya_9aWLa-XZlymrcsDky_Y1l1If7zjnCaY1EpvTfwEmCT6Mr-sevawGyqna77dDakyWGI"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="bg-primary p-8 rounded-[2rem] text-on-primary flex flex-col justify-between">
              <div>
                <TrendingUp className="w-10 h-10 mb-6" />
                <h3 className="font-headline text-2xl font-bold mb-4">Longitudinal Tracking</h3>
                <p className="text-on-primary/80 leading-relaxed">
                  Move beyond snapshots. Sonara™ maps your unique baseline over months and years, detecting subtle changes that matter.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-on-primary/20">
                <div className="flex items-center justify-between text-sm">
                  <span>Detection Accuracy</span>
                  <span className="font-bold">99.4%</span>
                </div>
                <div className="w-full bg-on-primary/10 h-1.5 rounded-full mt-2">
                  <div className="bg-secondary w-[94%] h-full rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Ruler className="text-on-secondary-container w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Geometry-Optimized</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Ergonomically designed to conform to diverse body types, ensuring optimal sensor contact and comfort for all-day wear.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Accessibility className="text-on-secondary-container w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Wearable Comfort</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Soft-touch medical-grade materials that breathe with your skin, making screening a seamless part of your daily routine.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-6">
                <ShieldCheck className="text-on-surface w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Non-Invasive</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Radiation-free technology utilizing low-power ultrasound pulses for safe, daily monitoring without discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      alt="Seraxis Health researchers" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXtvejnYVKDF-5UYiSOkfsZqJsRDS1QOLxSpZD5ANMi-JKNVkKHJw_nh2ZAis2QuE0aRMsk3ABuFOW90mPjQsBhqM2ebGNyV4F5lv5ZlggHVlymb6yJO13RcndLranEutlB4dnrqb4ih6sSk9ftW-YJc4w6Sw3DPPfpTrF2JzEM3YBSaQeBfB_3BJyx32QKRIPdpA1vFUkHN7C3jByST9gbysXbW8oHrnYLzpoEChdihWuBGmmU5gPM6ckYmN26xBnbPu6WTFvwC8"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      alt="Singapore skyline" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3w125PfvHZQaydlOBy7S2PJK9CMmdZm1-QdYBD6w7KWZUI_XeNsspT4i5q_jQVliyM8DRjGi-hcC20TTNIa6_vGHe3RNryqeMrZ-XTE-k2hso7uSeqGwNZh_jVl6--5RDl7lUWOwICTUKX6hTbe6VI7AC_FMPAQYJF3N4gC-nLle9hdRVOMnGLsid3aPb0MK6bLj34f-7Uym7XXgGVX2x5sS09EQEDpxKXCzAICU26-_fr77jQ6rjJtCNTifWzXEqEgK_EJIDOg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="aspect-[3/5] rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      alt="Healthcare discussion" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhaaiTVcIE7H5oKgERzDMn2Ldoqt5-mnMnWGjDON6O82PWzCum7SHlpUtL3k90mUwExMBp0o64OMz-0A7ddWnUZK2sbxRislb2i-36BwF9NdwgfWUZNYlk3_iFUzZpl-V5OrlLmhlcRz7MUhsPuX1afmq8bu4RDXHFxQGuZgE8doFa96sGKfynpvslXEzmHSvtNyCuL0Ad59CRht8-Jbnuz95kvWfLiHMdiiGH8pdHAia6Am8LInXLUOySjXoMKFqAahcj5gHFm4k"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="font-headline text-sm font-bold tracking-widest text-primary uppercase mb-6">The Sonara Mission</h3>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface leading-tight mb-8">Empowering Early Detection for Women in Singapore.</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>At Seraxis Health, we believe that geography and age shouldn't be barriers to life-saving technology. Our mission started in Singapore with a focus on empowering young women with the tools they need for continuous breast health monitoring.</p>
                <p>By integrating global technological innovation with Singapore's world-class clinical excellence, we are advancing a new standard of proactive breast health—where longitudinal data empowers patients and clinicians with actionable insights.</p>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2].map((i) => (
                    <img 
                      key={i}
                      alt="Avatar" 
                      className="w-12 h-12 rounded-full border-2 border-surface" 
                      src={`https://lh3.googleusercontent.com/aida-public/AB6AXuAd10jQH1lxzPXha0pcfkK99wHOw28TnwmstQDTpCRAf5C1l0aBcf1nOGD2F3Hx36WD5Rs9IfH8Jr7fUBHFp6Db7WS0cdmeamOLVjs-0gG3UyN2weOicjCIGnNi01SV61FfHZY3eejma41fcnNrtNhn8a2aTXQpWD3i_ec5_5bCSDzBVpvZBcswvOpLrgjcgq-nrrW7r5ygin4pi4hnN7EZmwWC-_wqAIOJkE0jHfx9NOy5rXe6epUF_DKhwe6bpie8_mcGKIXltUc`}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="w-12 h-12 rounded-full bg-secondary border-2 border-surface flex items-center justify-center text-xs font-bold text-on-secondary">5k+</div>
                </div>
                <div className="text-sm font-medium text-on-surface-variant">
                  <span className="text-primary font-bold">5,000+</span> joined the waitlist this month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="signature-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-primary mb-8 leading-tight">Be at the Forefront of Personalized Breast Health.</h2>
              <p className="text-on-primary/80 text-lg mb-12">Join our exclusive early-access program and help us shape the future of non-invasive screening.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:shadow-xl transition-all scale-100 hover:scale-105 active:scale-95">
                  Join the Waitlist
                </button>
                <button className="bg-primary/20 border border-on-primary/20 text-on-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-on-primary/10 transition-all">
                  Contact for Clinicians
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
