import firebase from '../firebase';
import { useParams } from 'react-router-dom';

const RenderText = (props) => {

  const { user, character } = useParams();

  const { data, dataPath, fieldData } = props;
  
  const { field, displayName, options, initialValue } = fieldData;
  
  const handleChange = (e) => {
    if ( field === "clan" || "concept" || "name" ) {
      const summaryDataPath = `users/${user}/characters/${character}`;
      // capture new data
      const newValue = e.target.value;
      // connect to firebase by value & summary path
      const dbValueRef = firebase.database().ref(dataPath);
      const dbSummaryRef = firebase.database().ref(summaryDataPath);
      // set new values
      dbValueRef.set(newValue);
      dbSummaryRef.child(field).set(newValue);
    } else {
      // capture new data
      const newValue = e.target.value;
      // connect to firebase by value path
      const dbValueRef = firebase.database().ref(dataPath);
      // set new value
      dbValueRef.set(newValue);
    }
  }
  
  return(
    <fieldset className="field">
      <label htmlFor={field}>{displayName}</label>
      {
        options ?
        <select name={field} onChange={handleChange} value={data ? data : initialValue} >
          <option value="" disabled>please select</option>
          {
            options.map( (option) => {
              return(
                <option key={option.name}>{option.displayName}</option>
              )
            })
          }
        </select>
        :
        <input type="text" name={field} value={data} onChange={handleChange}/>
      }
    </fieldset>
  )
}

export default RenderText;