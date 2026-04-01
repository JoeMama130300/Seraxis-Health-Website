import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, ClipboardCheck, Database, Users } from 'lucide-react';

export default function CliniciansPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface">For Clinicians</h1>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
            Enhancing clinical decision-making through longitudinal acoustic data and AI-driven insights.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-surface-container-low px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Stethoscope, title: "Clinical Integration", desc: "Seamlessly integrate Sonara™ data into your existing EHR workflows." },
            { icon: ClipboardCheck, title: "Patient Management", desc: "Monitor patient trends remotely with high-fidelity acoustic imaging." },
            { icon: Database, title: "Data Science", desc: "Leverage our proprietary datasets for advanced diagnostic support." },
            { icon: Users, title: "Collaborative Care", desc: "Facilitate better communication between patients and care teams." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl ghost-shadow border border-outline-variant/10">
              <item.icon className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-headline font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold mb-8">Request a Clinical Briefing</h2>
        <p className="text-on-surface-variant mb-12">Interested in learning more about the clinical validation of Sonara™? Our medical affairs team is available for deep-dive sessions.</p>
        <button className="signature-gradient text-on-primary px-10 py-4 rounded-full font-headline font-bold text-lg shadow-lg hover:opacity-90 transition-all">
          Contact Medical Affairs
        </button>
      </section>
    </div>
  );
}
