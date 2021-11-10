import firebase from '../firebase';
import { useParams } from 'react-router-dom';

const RenderText = (props) => {

  const { user, character } = useParams();

  const { data, dataPath, fieldData } = props;
  
  const { field, displayName, options, initialValue } = fieldData;
  
  const handleSummaryData = (newValue) => {
    // also changes charTile info
    const summaryPath = `users/${user}/characters/${character}`;
    // connect to firebase by value & summary path
    const dbValueRef = firebase.database().ref(dataPath);
    const dbSummaryRef = firebase.database().ref(summaryPath);
    // set new values
    dbValueRef.set(newValue);
    dbSummaryRef.child(field).set(newValue);
  }

  const handleClanChange = (newValue) => {
    handleSummaryData(newValue);
  // add dependent data to charSheet

    // get relevant clan info
    const clanData = fieldData.options.filter( (clan) => clan.displayName === newValue )

    // build discipline info array
    const disciplinesArray = [];
    clanData[0].disciplines.forEach( (discipline) => {
      const disciplineObject = {
        name: discipline,
        value: 0,
        powers: []
      }
      disciplinesArray.push(disciplineObject)
    })
    console.log(disciplinesArray);

    // pass discArray and bane info to character sheet
    const sheetPath = `characters/${character}/charData/sheetData`;
    const dbSheetRef = firebase.database().ref(sheetPath);
    dbSheetRef.child('disciplines').update(disciplinesArray);
    dbSheetRef.child('bane').set(clanData[0].bane);
    // baneInfo = clanData[0].bane;
  }

  const handleGenerationChange = (newValue) => {
    // add dependent data to charSheet
    console.log(field, newValue);
  }

  const handlePredatorChange = (newValue) => {
    // add dependent data to charSheet
    console.log(field, newValue);
  }
  
  const handleChange = (e) => {
    // capture new data
    const newValue = e.target.value;
    // connect to firebase by value path & set new value
    const dbValueRef = firebase.database().ref(dataPath);
    dbValueRef.set(newValue);

    // if field is clan, update char tile and dependent fields
    if ( field === "clan" ) {
      handleClanChange(newValue);

    // if field is gen, update char tile and dependent fields
    } else if (field === "generation" ) {
      handleGenerationChange(newValue)

    // if field is pred, update char tile and dependent fields
    } else if ( field === "predator") {
      handlePredatorChange(newValue)

    // if conc or name, update char tile
    } else if (field === "concept" || field === "name" ) {
      handleSummaryData(newValue);
    }
  }
  
  return(
    <fieldset className="field">
      <label htmlFor={field}>{displayName}</label>
      {
        // if options are available render as dropdown
        options ?
        // set to default if no choice made
        <select name={field} onChange={handleChange} value={data ? data : initialValue} >
          <option value="" disabled>please select</option>
          {
            // map the available options
            options.map( (option) => {
              return(
                <option key={option.name}>{option.displayName}</option>
              )
            })
          }
        </select>
        :
        // if no options, render text box
        <input type="text" name={field} value={data} onChange={handleChange}/>
      }
    </fieldset>
  )
}

export default RenderText;