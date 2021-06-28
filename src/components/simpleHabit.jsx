import React, { useState, useRef, useCallback, useEffect } from 'react';


const SimpleHabit = (props) => {

  const [Count, setCount] = useState(0)
  const spanRef = useRef()

  const handleIncrement = useCallback(() => {
    setCount(Count + 1 );
    });


  useEffect(() => {
    console.log(`mounted & updated : ${Count}`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{Count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
    


}


export default SimpleHabit;
