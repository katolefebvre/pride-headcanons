import { useState, useRef } from 'react';
import Muse from './components/Muse';
import html2canvas from 'html2canvas';

import './App.css'

function App() {
  const ref = useRef(null);
  const [sections, setSections] = useState<string[]>([]);

  const handleAddSection = () => {
    const newSectionId = sections.length + 1;

    setSections([
      ...sections,
      `${newSectionId}`
    ]);
  };

  const handleDeleteSection = (index: string) => {
    setSections(sections.filter(section => section !== index))
  }

  const handleDownloadImage = async () => {
    const element = ref.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: window.devicePixelRatio,
      useCORS: true,
      backgroundColor: "#16171d"
    });

    const dataUrl = canvas.toDataURL('image/png');

    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    downloadLink.download = 'muse.png';
    downloadLink.click();
  }

  return (
    <>
      <section>
        <div>
          <h1>PRIDE HEADCANONS</h1>
          <p>For Penumbra Muses.</p>
          <p>Made with love by Kato.</p>
        </div>
      </section>

      <section>
        <div style={{ marginTop: '40px' }}>
          {sections.map((section) => (
            <div key={section}>
              <div ref={ref}>
                <Muse />
              </div>
              <button 
                style={{ marginTop: '10px' }}
                className='counter' 
                onClick={() => handleDeleteSection(section)}
              >DELETE MUSE</button>
              <button 
                style={{ marginTop: '10px' }}
                className='counter' 
                onClick={handleDownloadImage}
              >SCREENSHOT</button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <button 
          className='counter'
          onClick={handleAddSection}
        >
          ADD MUSE
        </button>
      </section>
    </>
  )
}

export default App
