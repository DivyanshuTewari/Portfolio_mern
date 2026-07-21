import React, { useState } from 'react';

import CanvasBackground  from './components/CanvasBackground';
import ChapterProgress   from './components/ChapterProgress';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import MyStory           from './components/MyStory';
import Education         from './components/Education';
import Skills            from './components/Skills';
import Projects          from './components/Projects';
import Achievements      from './components/Achievements';
import FutureGoals       from './components/FutureGoals';
import Contact           from './components/Contact';
import Footer            from './components/Footer';
import ResumeModal       from './components/ResumeModal';

import './index.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Animated background canvas */}
      <CanvasBackground />

      {/* Fixed UI elements */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <ChapterProgress />

      {/* Story chapters */}
      <main>
        <Hero />
        <MyStory />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <FutureGoals />
        <Contact />
      </main>

      <Footer />

      {/* Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

export default App;
