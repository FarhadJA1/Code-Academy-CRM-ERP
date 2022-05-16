import {React,useState} from 'react'
import '../../assets/style/Group/CreateBtn.scss'
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function CreateButton() {
  function getGroupTypes(params) {
    axios
      .post("https://localhost:44380/api/Group/Create", {

      })
      .then(data => {

      })
      .catch(error => console.log(error));
  }  


  function saveData() {
    axios
      .post("https://localhost:44380/api/Group/Create", {

      })
      .then(data => {

      })
      .catch(error => console.log(error));
  }
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="create-btn-area">
      <div className="my-3 me-5">
        <button type="button" className="btn btn-outline-dark create-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Create Group
        </button>
      </div>



      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Please, select education details:</h5>
              <button type="button" className="btn-close create-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body create-modal">
              <div>
                <FormControl sx={{  width:1 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Education</InputLabel>
                  <Select
                    
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={type}
                    onChange={handleChange}
                    label="education"
                  >
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={saveData()} type="button" className="btn btn-outline-primary create-btn">Save</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateButton
