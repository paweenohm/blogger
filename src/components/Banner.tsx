import React from 'react';
import { Language } from '../App';

interface BannerProps {
  language: Language;
}

const Banner: React.FC<BannerProps> = ({ language }) => {
  const content = {
    th: {
      title: "ยินดีต้อนรับสู่พื้นที่ของฉัน",
      description: "ค้นหาไอเดีย บันทึกการเดินทาง และแบ่งปันความรู้เกี่ยวกับการพัฒนาเว็บไซต์และไลฟ์สไตล์ยุคใหม่"
    },
    en: {
      title: "Welcome to My Space",
      description: "Exploring ideas, documenting journeys, and sharing knowledge about modern development and lifestyle."
    }
  };

  return (
    <div className="banner">
      <img src="/images/banner.png" alt="Blog Banner" />
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>{content[language].title}</h1>
          <p>{content[language].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
