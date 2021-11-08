import RenderDots from "./RenderDots";

const Attributes = (props) => {

  const { data, fields, dataPath } = props;

  return (
    <>
    <h2>Attributes</h2>
    <form>
      {
        data ?
        fields.map( (field) => {
          const thisField = field.field;
          return(
            <RenderDots
              key={thisField}
              value={data[thisField]}
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

export default Attributes;