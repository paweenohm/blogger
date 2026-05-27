import React from 'react';
import { Language } from '../App';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  menus: { id: string; label: string; icon?: React.ReactNode }[];
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu, menus, language, setLanguage }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Blogger.
      </div>
      
      <div className="lang-toggle">
        <button 
          className={`lang-btn ${language === 'th' ? 'active' : ''}`}
          onClick={() => setLanguage('th')}
        >
          TH
        </button>
        <button 
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>

      <nav className="sidebar-menu">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`menu-item ${activeMenu === menu.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(menu.id)}
          >
            {menu.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
