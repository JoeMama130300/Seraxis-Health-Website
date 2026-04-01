/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MissionPage from './pages/MissionPage';
import TechnologyPage from './pages/TechnologyPage';
import WhySonaraPage from './pages/WhySonaraPage';
import CliniciansPage from './pages/CliniciansPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MissionPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/why-sonara" element={<WhySonaraPage />} />
            <Route path="/clinicians" element={<CliniciansPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
