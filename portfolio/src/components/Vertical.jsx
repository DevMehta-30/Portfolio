import React from 'react';

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col">
      {text.split('').map((character, index) => (
        <span key={index} className="flex-grow text-center font-bold text-lg leading-none">
          {character}
        </span>
      ))}
    </div>
  );
};

export default VerticalText;
