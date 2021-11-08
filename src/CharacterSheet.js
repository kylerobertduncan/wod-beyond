import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import firebase from './firebase';
// importing character sheet fields
import propertyData from './propertyData'
// importing character sheet components
import Overview from './sheetComponents/Overview';
import Attributes from './sheetComponents/Atrributes';
import HealthWill from './sheetComponents/HealthWill';
import Skills from './sheetComponents/Skills';
import Disciplines from './sheetComponents/Disciplines';
import HungerEtc from './sheetComponents/HungerEtc';

const CharacterSheet = () => {

  const { character } = useParams();
  const [ characterData, setCharacterData ] = useState({});
  const dataPath = `characters/${character}/charData`;

  useEffect(() => {
    // connect to specific character in firebase
    const dbCharRef = firebase.database().ref(dataPath);
    dbCharRef.on('value', (response => {
      // put character data into state
      const dataSnapshot = response.val();
      setCharacterData(dataSnapshot);
    }));
    return() => {
      // close .on(value) listener
      dbCharRef.off();
    }
  }, [dataPath]);

  const { chronicleSettings, sheetData } = characterData;
  
  return(
    <div className="characterSheet">
      <h1>Vampire: The Masquerade</h1>
      {/* Overview Section */}
      <Overview className="overview section"
        dataPath={dataPath+'/sheetData'}
        fields={propertyData.overview}
        data={sheetData}
      />
      {/* Attributes Section */}
      <Attributes className="attributes section"
        dataPath={dataPath + '/sheetData'}
        fields={propertyData.attributes}
        data={sheetData}
      />
      {/* HealthWill Section */}
      <HealthWill />
      {/* Skills Section */}
      <Skills />
      {/* Disciplines Section */}
      <Disciplines />
      {/* HungerEtc Section */}
      <HungerEtc />
    </div>
  )
}

export default CharacterSheet;