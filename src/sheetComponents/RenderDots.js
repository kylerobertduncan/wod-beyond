import firebase from '../firebase';

const RenderDots = (props) => {

  const { dataPath, fieldData, value } = props;
  const { field, displayName, initialValue } = fieldData;

  const handleChange = (e) => {
    // capture new data
    const newValue = +e.target.value;
    // connect to firebase by value path
    const dbValueRef = firebase.database().ref(dataPath);
    // set new value
    dbValueRef.set(newValue);
  }

  const handleClick = (e) => {
    const clickedValue = +e.target.value;
    if (value === clickedValue) {
      const newValue = clickedValue - 1;
      const dbValueRef = firebase.database().ref(dataPath);
      dbValueRef.set(newValue);
    }
  }

  return(
    <fieldset className="field">
      <label htmlFor={field}>{displayName}</label>
      <div>
        <input type="radio" value={1} checked={value === 1} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={2} checked={value === 2} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={3} checked={value === 3} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={4} checked={value === 4} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={5} checked={value === 5} name={field} onChange={handleChange} onClick={handleClick} />
      </div>
    </fieldset>
  )
}

export default RenderDots;