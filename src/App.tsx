import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import ContentArea from './components/ContentArea';
import './index.css';

export type Language = 'th' | 'en';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('lifestyle');
  const [language, setLanguage] = useState<Language>('th');

  const menus = {
    th: [
      { id: 'lifestyle', label: 'ไลฟ์สไตล์' },
      { id: 'travel', label: 'บันทึกการเดินทาง' },
      { id: 'tech', label: 'เทคโนโลยี & โค้ด' }
    ],
    en: [
      { id: 'lifestyle', label: 'Lifestyle' },
      { id: 'travel', label: 'Travel Diaries' },
      { id: 'tech', label: 'Tech & Code' }
    ]
  };

  return (
    <div className="app-container">
      <Sidebar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        menus={menus[language]} 
        language={language}
        setLanguage={setLanguage}
      />
      <main className="main-wrapper">
        <Banner language={language} />
        <ContentArea activeMenu={activeMenu} language={language} />
      </main>
    </div>
  );
};

export default App;
