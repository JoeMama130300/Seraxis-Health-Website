import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Eye, Repeat, Home, Brain, TrendingUp, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function WhySonaraPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-on-secondary-container text-xs font-bold tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4" />
            Singapore's Choice for Breast Health
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
            Because Every <span className="text-primary italic">Journey</span> is Unique. Proactive Breast Health for Every Woman.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Seraxis Health introduces Sonara™ — a continuous monitoring solution designed for the modern Asian woman. Empowering you with clarity, precision, and peace of mind.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base shadow-lg hover:opacity-90 transition-all">
              Learn about Sonara™
            </button>
            <button className="px-8 py-4 rounded-full font-headline font-bold text-base text-primary border-2 border-primary/20 hover:bg-surface-container-low transition-all">
              Watch the Story
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden soft-glow">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABRupz_ZkuRNzOoUEDA-gQ39wQwA6yK4eCWKQjvEnlXARaQlT52avWhneLr-wHoj0W_-TORIlh1vNnTHN2ert3NLnMk33k7gdl7gknELAUUL7JJtG06eLbkAmaxGSzM_g7oBA3SBQ_Nnjgp5nuUOhn1Bkd-mGWJv1NfknnnJvDRjcY_Ot9lJIidi9U9-xjARyafS8tXejO2P2Af4eiRD8PnU-r0kr6cc-pwQS-GtndMuPvZwDentkFUIhicwHUM12zckfG8Pb0Hmk"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl soft-glow border border-outline-variant/10 max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Activity className="text-primary w-5 h-5" />
              </div>
              <span className="font-headline font-bold text-primary">Live Monitoring</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-snug">Moving from episodic checkups to a lifestyle of continuous awareness.</p>
          </div>
        </motion.div>
      </section>

      {/* Asian Breast Density Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">The Science of Asian Breast Density</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Research indicates that up to <span className="text-primary font-bold">70% of Asian women</span> have dense breast tissue. Traditional screenings can sometimes miss early signs because dense tissue appears white on mammograms—the same color as potential concerns.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                  <Eye className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-on-surface">Higher Contrast Clarity</h4>
                    <p className="text-sm text-on-surface-variant">Sonara™ uses advanced ultrasound technology specifically calibrated for high-density tissue.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/5">
                  <Activity className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-on-surface">AI-Assisted Precision</h4>
                    <p className="text-sm text-on-surface-variant">Intelligent algorithms distinguish between normal dense patterns and areas requiring attention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-center items-center text-center soft-glow">
                  <div className="text-5xl font-extrabold text-primary mb-2 font-headline">70%</div>
                  <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Breast Density Rate</div>
                </div>
                <div className="bg-primary p-8 rounded-[2rem] text-on-primary flex flex-col justify-end relative overflow-hidden">
                  <div className="relative z-10">
                    <ShieldCheck className="w-10 h-10 mb-4 text-secondary" />
                    <p className="font-headline font-bold text-lg">Protective Accuracy</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                </div>
                <div className="col-span-2 aspect-[16/7] rounded-[2rem] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrVoAoDhVvnmHFqssj9AdwVLcWZ8OzZtl6HQ1xPr09CEehHUIqjvo9Tbjp3bGXWenTECdedZ-y2yG5JxPNocJ7pAuq71BKtSGStWrEf7D0ReUx3kx3V-gnMLH_ZWxSF81d6t2wSlUw-7ZcC6aFO-txf3K2akb88M-t8jzuWm_B_xaesxTwexZk3RD5U8au14JFeZ6E-2OS5xuutrZtMidYviByXvkBSK-XbKz-CF6WhLdZkwY2gs5wjE5bNxpWOM4XGTEarzZmaQc"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Care Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">Redefining Continuous Care</h2>
          <p className="text-on-surface-variant text-lg">Why wait for an annual appointment? Sonara™ bridges the gap between checkups, providing a continuous narrative of your health journey.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-[2rem] bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-500 border border-transparent hover:border-primary/20 soft-glow">
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Repeat className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Episodic to Persistent</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">Traditional care is a snapshot in time. We provide a movie—tracking subtle changes over weeks and months.</p>
          </div>
          <div className="group p-8 rounded-[2rem] bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-500 border border-transparent hover:border-primary/20 soft-glow">
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Home className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Accessible Anywhere</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">Designed for the busy young woman. Monitor your health from the sanctuary of your home, integrated into your lifestyle.</p>
          </div>
          <div className="group p-8 rounded-[2rem] bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-500 border border-transparent hover:border-primary/20 soft-glow">
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Radical Empowerment</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">We provide the data, you own the insight. No more waiting for "no news is good news"—stay informed and proactive.</p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative overflow-hidden py-24 px-8 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
                Detection is the <br/><span className="text-secondary italic">Difference.</span>
              </h2>
              <p className="text-surface-variant/80 text-lg leading-relaxed">
                Early detection isn't just a statistic; it's a future preserved. In Singapore, where lifestyle factors and genetic predispositions intersect, being early means being in control.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-extrabold text-secondary mb-1">98%</div>
                  <p className="text-xs uppercase tracking-widest text-surface-variant/60 font-semibold">Survival rate with early detection</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-secondary mb-1">5X</div>
                  <p className="text-xs uppercase tracking-widest text-surface-variant/60 font-semibold">Higher probability of less invasive treatment</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-surface-container-highest/10 rounded-[2rem] p-8 glass-effect border border-white/5">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-headline font-bold text-xl">Outcome Timeline</span>
                    <TrendingUp className="text-secondary" />
                  </div>
                  <div className="relative h-48 w-full flex items-end gap-2">
                    {[30, 45, 70, 90, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex-1 rounded-t-lg transition-all",
                          i === 4 ? "bg-secondary" : "bg-primary/60"
                        )} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-surface-variant text-center">Continuous screening leads to significantly higher recovery potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl font-bold mb-6">Join the Future of Care in Singapore.</h2>
        <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Seraxis Health is on a mission to bring Sonara™ to every woman who values clarity over uncertainty. Be among the first to experience the "Clinical Sanctuary" of the future.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            className="px-6 py-4 rounded-full bg-surface-container border-transparent focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all w-full sm:w-80 outline-none" 
            placeholder="Enter your email" 
            type="email"
          />
          <button className="signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base shadow-lg hover:opacity-95 transition-all">
            Register Interest
          </button>
        </div>
      </section>
    </div>
  );
}
