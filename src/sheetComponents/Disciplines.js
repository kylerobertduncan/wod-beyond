import RenderDiscipline from "./RenderDiscipline";

const Disciplines = (props) => {
  
  const { data, dataPath, discInfo } = props;
  
  return (
    <>
    <h2>Disciplines</h2>
    {
      // MAP CLAN DISCIPLINES
      data ?
      data.disciplines.clan.map( (discipline) => {
        // map discInfo for appropriate
        return(
          <RenderDiscipline
            key={discipline.name}
            discipline={discipline}
            dataPath={dataPath}
            discInfo={discInfo}
          />
        )
      })
      : null
    }
    </>
  )
}

export default Disciplines;