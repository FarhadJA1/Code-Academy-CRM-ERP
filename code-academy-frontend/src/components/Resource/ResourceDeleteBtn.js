import React, { useEffect, useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios'
import { Link } from 'react-router-dom';

function ResourceDeleteBtn(props) {

    const [id, setId] = useState();

    const DeleteResource = () => {
        axios.get(`https://localhost:44380/api/Resource/DeleteResource/${id}`)
            .catch(error => console.log(error));

    }

    return (
        <div >

            <button type="button" onClick={(e) => setId(e.target.value)} value={props.value} className="btn btn-outline-danger resource-button mx-2" data-bs-toggle="modal" data-bs-target={'#delete-resource' + id}><DeleteOutlineOutlinedIcon /></button>



            <div className="modal fade" id={'delete-resource' + id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>{id}</h1>
                            Are you sure to permanently delete this resource type?
                        </div>
                        <div className="modal-footer">

                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-danger resource-button" onClick={() => DeleteResource()}>Delete</button>


                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceDeleteBtn
