// import { useEffect } from "react";
// import firebase from '../firebase';
// import RenderDots from "./RenderDots";

const Disciplines = (props) => {
  
  const { clanData, data, dataPath, fields } = props;
  
  // useEffect( () => {
  //   if (data) {
  //     const thisClan = data?.clan;
  //     // console.log(clanDisc);
  //     clanData.forEach( (clanDiscInfo) => {
  //       // console.log(clanDiscInfo);
  //       if (clanDiscInfo.displayName === thisClan ) {
  //         const newDisciplines = [...clanDiscInfo.disciplines];
  //         // console.log(newDisciplines);
  //         const dbRef = firebase.database().ref(dataPath);
  //         dbRef.child('disciplines').set(newDisciplines);
  //       }
  //     })
  //   }
  // },[data])

  return (
    <>
    <h2>Disciplines</h2>
    </>
  )
}

export default Disciplines;