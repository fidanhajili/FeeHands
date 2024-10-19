
import { useState } from 'react'
import './FAQ.css'


const FAQ:React.FC = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const sections = [
      { title: '1.  What materials are the knitted toys made of?', content: 'Our knitted toys are made from 100% natural and organic cotton yarn. The filling inside is hypoallergenic, safe for babies and children.' },
      { title: '2. Will there be any variations in color and size for handmade products?', content: 'Slight variations in color and size are normal for handmade items, as each piece is carefully crafted by hand. This makes every product unique and special.' },
      { title: '3. Are the products washable?', content: 'Yes, our knitted toys and textile products can be washed either by hand or on a gentle cycle in the machine. We recommend using cold water to prevent color fading.' },
      { title: '4. Can I place a custom order for knitted products?', content: 'Absolutely! You can order custom knitted items in your preferred colors and designs. Just contact us with your special requests.' },
      { title: '5. What is the delivery time for knitted products?', content: 'Absolutely! You can order custom knitted items in your preferred colors and designs. Just contact us with your special requests.' },
    ];
  
    return (
<>
<h1 className='text-center my-md-3 pt-5 animate__animated animate__infinite  animate__pulse'>FAQ</h1>
      <div className="accordion my-md-4">
        {sections.map((section, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <h2>{section.title}</h2>
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </>
    );
  };



export default FAQ