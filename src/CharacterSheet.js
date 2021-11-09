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
      <Overview
        data={sheetData}
        dataPath={dataPath+'/sheetData'}
        fields={propertyData.overview}
      />

      {/* Attributes Section */}
      <Attributes
        data={sheetData}
        dataPath={dataPath + '/sheetData'}
        fields={propertyData.attributes}
      />

      {/* HealthWill Section */}
      <HealthWill
        data={sheetData}
        dataPath={dataPath + '/sheetData'}
        fields={propertyData.healthAndWillpower}
      />

      {/* Skills Section */}
      <Skills
        data={sheetData}
        dataPath={dataPath + '/sheetData'}
        fields={propertyData.skills}
      />

      {/* Disciplines Section */}
      <Disciplines
        data={sheetData}
        dataPath={dataPath + '/sheetData'}
        fields={propertyData.disciplines}
        clanData={propertyData.clans}
      />

      {/* HungerEtc Section */}
      <HungerEtc />

    </div>
  )
}

export default CharacterSheet;