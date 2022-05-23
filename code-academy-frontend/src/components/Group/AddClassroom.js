import React from 'react'

function AddClassroom() {
    return (
        <div className='row my-2 add-buttons-area addition'>
            <button type="button" className="btn btn-outline-success add-button" data-bs-toggle="modal" data-bs-target="#addClassroom">Add Classroom</button>


            <div className="modal fade" id="addClassroom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">Add Classroom</h5>
                            <button type="button" className="btn-close  add-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary group-btn">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClassroom
