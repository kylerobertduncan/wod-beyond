import firebase from '../firebase';

const RenderTen = (props) => {

  const { data, dataPath, fieldData} = props;
  const { value } = data;
  const { field, displayName, initialValue } = fieldData;

  const handleChange = (e) => {
    // capture new data
    const newValue = +e.target.value;
    const newValueObject = { ...data }
    newValueObject.value = newValue;
    // connect to firebase by value path
    const dbValueRef = firebase.database().ref(dataPath);
    // set new value
    dbValueRef.update(newValueObject);
  }

  const handleClick = (e) => {
    // capture clicked value
    const clickedValue = +e.target.value;
    // check if clicked ==== current value
    if (value === clickedValue) {
      // if true, adjust value by -1
      const newValueObject = { ...data }
      newValueObject.value = clickedValue - 1;
      const dbValueRef = firebase.database().ref(dataPath);
      dbValueRef.update(newValueObject);
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
        <input type="radio" value={6} checked={value === 6} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={7} checked={value === 7} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={8} checked={value === 8} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={9} checked={value === 9} name={field} onChange={handleChange} onClick={handleClick} />
        <input type="radio" value={10} checked={value === 10} name={field} onChange={handleChange} onClick={handleClick} />
      </div>
      
    </fieldset>
  )
}

export default RenderTen;