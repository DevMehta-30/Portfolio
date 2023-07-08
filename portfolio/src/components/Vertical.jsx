import React from 'react';

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col">
      {text.split('').map((character, index) => (
        <span key={index} className="text-center font-bold text-l">
          {character}
        </span>
      ))}
    </div>
  );
};

export default VerticalText;
