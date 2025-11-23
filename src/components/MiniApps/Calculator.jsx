import { useState } from 'react';

export const Calculator = () => {
  const [display, setDisplay] = useState(0);

  const handleButtonClick = (value) => {
    const operators = ['+', '-', '×', '÷', '%', ','];
    const lastChar = display[display.length - 1];

    if (operators.includes(lastChar) && operators.includes(value)) {
      return;
    }
    if (typeof value === 'number' && display === 0) {
      setDisplay(value + '');
    } else if (typeof value === 'number') {
      setDisplay(display + value);
    } else if (value === 'c') {
      setDisplay(0);
    } else if (value === '⌫') {
      if (display.length > 1) {
        setDisplay(display.slice(0, -1));
      } else {
        setDisplay(0);
      }
    } else if (value === '+') {
      setDisplay(display + '+');
    } else if (value === '-') {
      setDisplay(display + '-');
    } else if (value === '×') {
      setDisplay(display + '×');
    } else if (value === '÷') {
      setDisplay(display + '÷');
    } else if (value === '=' && display.includes('+')) {
      setDisplay(display.split('+').reduce((acc, el) => (acc += +el), 0) + '');
    } else if (value === '=' && display.includes('-')) {
      setDisplay(display.split('-').reduce((acc, el) => acc - el) + '');
    } else if (value === '=' && display.includes('×')) {
      setDisplay(display.split('×').reduce((acc, el) => (acc *= el)));
    } else if (value === '=' && display.includes('÷')) {
      setDisplay(display.split('÷').reduce((acc, el) => (acc /= el)));
    } else if (value === '.') {
      const parts = display.split(/[\+\-\×\÷]/);
      const currentNumber = parts[parts.length - 1];
      if (!currentNumber.includes('.')) {
        setDisplay(display + '.');
      }
    } else if (value === '%') {
      const parts = display.split(/[\+\-\×\÷]/);

      if (parts.length >= 2) {
        const prevNumber = parseFloat(parts[parts.length - 2]);
        const percent = parseFloat(parts[parts.length - 1]);
        const percentValue = (prevNumber * percent) / 100;     
        const newDisplay =
          display.slice(0, display.lastIndexOf(parts[parts.length - 1])) +
          percentValue;
        setDisplay(newDisplay);
      } else {      
        const number = parseFloat(display) / 100;
        setDisplay(String(number));
      }
    }
  };

  const arrayBtns = [
    'c',
    '%',
    '⌫',
    '÷',
    7,
    8,
    9,
    '×',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  return (
    <div className="calculator">
      <h2>Калькулятор</h2>
      <div className="container">
        <div className="display">{display}</div>
        <div className="btns">
          {arrayBtns.map((btn, index) => {
            return (
              <button onClick={() => handleButtonClick(btn)} key={index}>
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
