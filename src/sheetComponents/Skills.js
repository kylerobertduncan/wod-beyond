import RenderDots from "./RenderDots";

const Skills = (props) => {

  const { data, fields, dataPath } = props;

  return (
    <>
    <h2>Skills</h2>
    <form className="skillsForm">
      {
        data ?
          fields.map((field) => {
            const thisField = field.field;
            return (
              <RenderDots
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

export default Skills;