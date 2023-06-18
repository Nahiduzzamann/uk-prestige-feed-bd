import React, { useState } from 'react';

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border border-base-300">
    <div className="p-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium text-[#1A2753]">{item.title}</div>
        <div className='text-2xl text-[#1A2753] font-bold'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-white">{item.content}</p>
        </div>
      )}
    </div>
  </div>
);

const CompanyOverview = () => {
  const accordionItems =  [
    {
        title: 'Food & Bio',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eu metus fermentum sollicitudin. Nulla facilisi. Sed et mauris velit. In hac habitasse platea dictumst.',
    },
    {
        title: 'Animal Nutrition',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eu metus fermentum sollicitudin. Nulla facilisi. Sed et mauris velit. In hac habitasse platea dictumst.',
    },
    {
        title: 'Protein & Salt',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eu metus fermentum sollicitudin. Nulla facilisi. Sed et mauris velit. In hac habitasse platea dictumst.',
    },
    {
        title: 'Metals & Shipping',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eu metus fermentum sollicitudin. Nulla facilisi. Sed et mauris velit. In hac habitasse platea dictumst.',
    },
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-red-300 rounded-t-none rounded-r rounded-tr-[200px] md:rounded-tr-[400px] pt-28 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
          <div>
            <img
              src="https://www.integrify.com/site/assets/files/7107/budgeting-process.jpg"
              alt="Company Image"
              className="w-96 md:w-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1A2753]">
              Company Overview
            </h2>
            <p className="mb-4 text-[#1A2753] w-96 pr-4">
              We bring Animal Feed products to people who need them all around
              the Country. Today, we apply that expertise to serve customers
              and communities in 30 districts. We have 50+ employees working
              every day to produce healthy feed in a responsible and
              sustainable way. Find out more about our operations.
            </p>
            <h3 className="text-lg font-semibold mb-2 text-[#1A2753]">
              Our Business Areas
            </h3>
            <div className="join join-vertical w-full">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={activeIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;

