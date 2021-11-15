// import firebase from '../firebase';
import RenderDots from "./RenderDots";

const RenderDiscipline = (props) => {

  // console.log(props);
  const { dataPath, discInfo, discipline } = props;

  const thisDisc = discInfo.filter( (discInfoItem) => 
    discipline.name === discInfoItem.name
  )
  console.log(thisDisc);

  return(
    /* 
    Show discipline name+value with RenderDots
    - no discipline = "add new discipline"
    Map powers at each level (1-5) below
    - drop down select up to current value
    - blank (or disabled) above current value
    */
    <>
    <form>
      <p>{thisDisc.displayName}</p>
    </form>
    </>
  )
}

export default RenderDiscipline;