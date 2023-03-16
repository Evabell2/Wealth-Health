function CreateEmployee() {
  return (
    <div id="form">
      <form action="#">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Date of Birth" />
        <input type="text" placeholder="Start Date" />

        <fieldset>
          <legend>Address</legend>
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <select name="state" placeholder="State"></select>
          <input type="number" placeholder="Zip Code" />
        </fieldset>

        <div>
          <label for="department">Department</label>
          <select name="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
          </select>
        </div>
        
      </form>

      <button>Save</button>
    </div>
  )
}

export default CreateEmployee;

