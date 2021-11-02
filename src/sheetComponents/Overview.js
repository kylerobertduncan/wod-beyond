const Overview = (props) => {

  // console.log(props);

  const { data, fields, dataPath } = props;

  return(
    <>
    <h2>Overview</h2>
    <form>
      {
        fields.map( (field) => {
          console.log(field);
          return(
            <p key={field.field}>A field</p>
          )
        })
      }
    </form>
    </>
  )
}

export default Overview;