import { useState } from 'react';
import Flags from './components/Flags';
import Muse from './components/Muse';
import './App.css'

function App() {
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

  return (
    <>
      {/* <Sidebar /> */}
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
              <Muse />
              <button 
                style={{ marginTop: '10px' }}
                className='counter' 
                onClick={() => handleDeleteSection(section)}
              >DELETE MUSE</button>
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

      <Flags />
    </>
  )
}

export default App
