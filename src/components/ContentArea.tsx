import React from 'react';
import { Language } from '../App';

interface ContentAreaProps {
  activeMenu: string;
  language: Language;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeMenu, language }) => {
  const contentData = {
    lifestyle: [
      {
        id: 1,
        title: language === 'th' ? "สมดุลในชีวิตประจำวัน" : "Finding Balance in Daily Life",
        meta: language === 'th' ? "มินิมอลลิสต์" : "Minimalism",
        description: language === 'th' ? "วิธีรักษาพื้นที่ส่วนตัวให้สงบและสวยงามท่ามกลางตารางงานที่ยุ่งเหยิง ค้นพบความงามในสิ่งเรียบง่าย" : "How to maintain a calm and aesthetic living space while dealing with a busy schedule. Discovering the beauty in simple things.",
        image: "/images/lifestyle.png"
      },
      {
        id: 2,
        title: language === 'th' ? "กาแฟยามเช้า" : "Morning Coffee Routine",
        meta: language === 'th' ? "นิสัย" : "Habits",
        description: language === 'th' ? "การเริ่มต้นวันที่ดีด้วยกาแฟแก้วโปรด แบ่งปันการจัดพื้นที่ยามเช้าที่ช่วยเพิ่มพลังในการทำงาน" : "A good day starts with a great cup of coffee. Sharing my aesthetic morning setup to boost productivity.",
        image: "/images/lifestyle.png"
      }
    ],
    travel: [
      {
        id: 1,
        title: language === 'th' ? "หลบหนีสู่ภูเขา" : "Mountain Getaway",
        meta: language === 'th' ? "ธรรมชาติ" : "Nature",
        description: language === 'th' ? "ดื่มด่ำกับความงามอันเงียบสงบของภูเขายามพระอาทิตย์ตก บันทึกภาพการเดินทางสู่พื้นที่สูง" : "Exploring the serene beauty of the mountains during sunset. A photographic journey through high altitudes.",
        image: "/images/travel.png"
      },
      {
        id: 2,
        title: language === 'th' ? "แสงสียามค่ำคืนในเมือง" : "City Lights & Nights",
        meta: language === 'th' ? "ชีวิตเมือง" : "Urban",
        description: language === 'th' ? "พลังงานที่คึกคักของเมืองเมื่อพระอาทิตย์ลับฟ้า ความแตกต่างที่ลงตัวกับการเที่ยวธรรมชาติ" : "The vibrant energy of the city when the sun goes down. A contrast to the quiet nature trips.",
        image: "/images/travel.png"
      }
    ],
    tech: [
      {
        id: 1,
        title: language === 'th' ? "ดีไซน์เว็บยุคใหม่" : "Modern Web Aesthetics",
        meta: language === 'th' ? "ฟรอนต์เอนด์" : "Frontend",
        description: language === 'th' ? "ทำไมการออกแบบถึงสำคัญในการพัฒนาเว็บไซต์ การสร้าง UI ที่สวยงามด้วย CSS และ React" : "Why design matters in development. Creating beautiful interfaces with CSS and React.",
        image: "/images/tech.png"
      },
      {
        id: 2,
        title: language === 'th' ? "ความสุขจาก Clean Code" : "The Joy of Clean Code",
        meta: language === 'th' ? "วิศวกรรม" : "Engineering",
        description: language === 'th' ? "การเขียนโค้ดที่ไม่เพียงแค่ใช้งานได้ แต่ยังอ่านง่ายและมีความสุขเมื่อต้องกลับมาแก้ไข" : "Writing code that not only works but is also a pleasure to read and maintain.",
        image: "/images/tech.png"
      }
    ]
  };

  const currentContent = contentData[activeMenu as keyof typeof contentData] || contentData.lifestyle;

  const renderContent = () => {
    if (language === 'th') {
      switch(activeMenu) {
        case 'lifestyle': return 'ไลฟ์สไตล์ & ความคิด';
        case 'travel': return 'บันทึกการเดินทาง';
        case 'tech': return 'เทคโนโลยี & โค้ด';
        default: return 'บทความ';
      }
    } else {
      switch(activeMenu) {
        case 'lifestyle': return 'Lifestyle & Thoughts';
        case 'travel': return 'Travel Diaries';
        case 'tech': return 'Tech & Code';
        default: return 'Articles';
      }
    }
  };

  return (
    <div className="content-container">
      <h2 className="text-h2">{renderContent()}</h2>
      <p className="text-p">{language === 'th' ? 'แสดงบทความล่าสุดในหมวดหมู่นี้' : 'Showing the latest articles in this category.'}</p>

      <div className="articles-list">
        {currentContent.map((article) => (
          <article key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <span className="article-meta">{article.meta}</span>
              <h3 className="text-h1" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{article.title}</h3>
              <p className="text-p" style={{ fontSize: '1rem', marginTop: '1rem' }}>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
