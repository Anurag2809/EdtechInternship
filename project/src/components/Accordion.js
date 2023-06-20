import React from 'react';
import Accord from './Accord';

const Accordion = () => {
  const accordionItems = [
    {

      title: 'Modules',
      content: 'Module-1',
    },
    {
      title: 'Assignments',
      content: 'Assignment-1',
    },
    {
        title: 'Tests',
        content: 'Test-1',
      },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold py-2">Course</h1>
      <Accord items={accordionItems} />
    </div>
  );
};

export default Accordion;
