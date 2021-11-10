// import firebase from '../firebase';
// import RenderDots from "./RenderDots";

const Disciplines = (props) => {
  
  const { data, dataPath, discInfo } = props;
  console.log(discInfo);

  return (
    <>
    <h2>Disciplines</h2>
    {
      // MAP CLAN DISCIPLINES
      data ?
      data.disciplines.clan.map( (discipline) => {
        console.log(discipline);
        // map discInfo for appropriate 
      })
      : null
    }
    </>
  )
}

export default Disciplines;