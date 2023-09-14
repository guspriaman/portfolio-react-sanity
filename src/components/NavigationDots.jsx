import React from 'react';

const visuallyHidden = {
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0',
  border: '0',
};

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={{ backgroundColor: active === item ? '#313BAC' : '' }}
      >
        <span style={visuallyHidden}>{item}</span>
      </a>
    ))}
  </div>
);

export default NavigationDots;
