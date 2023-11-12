import React, { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setExpression(event.target.value);
  };
  const calculateResult = () => {
    if (expression.trim() === '') {
      alert('Input cannot be empty.');
      setResult('');
      return;
    }
  
    const regex = /^[0-9+\-*/().\s%]+$/;
    if (!regex.test(expression)) {
      alert('text and spl. char not allowed, except math operators.');
      setResult('');
      return;
    }
  
    try {
      let evalExpression = expression;
      if (expression.endsWith('%')) {
        const number = expression.slice(0, -1);
        evalExpression = `${number} / 100`;
      }
  
      const evalResult = eval(evalExpression);
      if (!isFinite(evalResult) || isNaN(evalResult)) {
        alert('Zero division  invalid input.');
        setResult('');
      } else {
        setResult(evalResult);
      }
    } catch (error) {
      alert(' Incomplete input.');
      setResult('');
    }
  };
  
  return (
    <div>
      <input type="text" value={expression} onChange={handleInputChange} />
      <br/><br/>
      <button onClick={calculateResult}>Calculate</button>
      
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
