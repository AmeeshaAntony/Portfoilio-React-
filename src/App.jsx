import { useState } from 'react'
import Sidebar from './components/Sidebar';
import './App.css'
import Maincontent from './components/Maincontent';
import SkillsCarousel from './components/skillsCarousel';
import Contact from './components/Contact';
function App() {
  const [savechange,setSavechange] = useState('home');

  return (
      <div className='app'>
        <Sidebar setSavechange={setSavechange} activetab={savechange} />
        {savechange === 'home' && <Maincontent />}
        {savechange === 'skills' && <SkillsCarousel /> }
        {savechange === 'contact' && <Contact />}
      </div>
  );
}

export default App
