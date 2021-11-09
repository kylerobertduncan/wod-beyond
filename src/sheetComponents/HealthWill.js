import { useEffect, useLayoutEffect } from "react";
import firebase from '../firebase';
import RenderTen from "./RenderTen";

const HealthWill = (props) => {

  const { data, dataPath, fields } = props;

  useEffect( () => {
    // once data is loaded
    if ( data ) {
      // calculate health
      const calcHealth = data?.stamina.value + 3;
      // calculate willpower
      const calcWill = data?.composure.value + data?.resolve.value;
      // update character data in firebase 
      const dbRef = firebase.database().ref(dataPath);
      dbRef.child('health/value').set(calcHealth);
      dbRef.child('willpower/value').set(calcWill);
    }
  }, [data])

  return (
    <>
    <form className="healthWillForm">
      {
        data ?
        fields.map( (field) => {
          const thisField = field.field;
          return(
            <RenderTen className="boxes"
              key={thisField}
              data={data[thisField]}
              dataPath={dataPath + "/" + thisField}
              fieldData={field}
            />
          )
        })
        : null
      }
    </form>
    </>
  )
}

export default HealthWill;