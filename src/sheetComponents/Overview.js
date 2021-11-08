import RenderText from "./RenderText";

const Overview = (props) => {

  const { data, fields, dataPath } = props;

  return(
    <>
    <h2>Overview</h2>
    <form>
      {
        data ?
        fields.map( (field) => {
          const thisField = field.field;
          return(
            <RenderText
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

export default Overview;