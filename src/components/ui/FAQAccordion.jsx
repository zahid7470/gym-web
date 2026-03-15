import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

export const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button 
              className="faq-question" 
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown 
                size={20} 
                className={`faq-icon ${isOpen ? 'rotated' : ''}`} 
              />
            </button>
            
            <div 
              className="faq-answer-wrapper"
              style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
