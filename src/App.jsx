import { useState } from 'react'
import Sidebar from './components/Sidebar';
import './App.css'
import Maincontent from './components/Maincontent';
import SkillsCarousel from './components/skillsCarousel';
function App() {
  const [savechange,setSavechange] = useState('home');

  return (
      <div className='app'>
        <Sidebar setSavechange={setSavechange} activetab={savechange} />
        {savechange === 'home' && <Maincontent />}
        {savechange === 'skills' && <SkillsCarousel /> }
      </div>
  );
}

export default App
