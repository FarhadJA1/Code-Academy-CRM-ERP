import React from 'react'

function AddClassroom() {
    return (
        <div className='row my-2 add-buttons-area addition'>
            <button type="button" className="btn btn-outline-success add-button" data-bs-toggle="modal" data-bs-target="#addClassroom">Add Classroom</button>


            <div class="modal fade" id="addClassroom" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Add Classroom</h5>
                            <button type="button" class="btn-close  add-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
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
