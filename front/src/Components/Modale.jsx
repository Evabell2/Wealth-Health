function Modale(props) {
    const display = props.display ? 'flex' : 'none';
  
    return (
      <div className="modale" style={{ display }}>
        <div>
          <button onClick={props.setDisplayModale}>X</button>
          <p>Employee Created !</p>
        </div>
      </div>
    )
  }
export default Modale;