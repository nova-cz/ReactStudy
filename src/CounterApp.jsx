import { useState } from 'react'; 
import PropTypes from 'prop-types';
export const CounterApp = ( {value} ) => {
  
  const [ counter, setCounter] = useState( value );
  
  const handleAdd = (event) => setCounter( (c) => c + 1);

  const handleRemove = (event) => setCounter( (c) => c + -1);

  const reset = (event) => setCounter( (c) => c = value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick = { handleAdd }>+1</button>
      <button onClick = { handleRemove}>-1</button>
      <button onClick = { reset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

