import React from 'react'

function TeacherCreateButton() {
    return (
        <div className='create-btn-area'>
            <div className='my-3 me-3'>
                <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#create-teacher">
                    Create Teacher
                </button>
            </div>


            <div class="modal fade" id="create-teacher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title create-header" id="exampleModalLabel">Please, fill the blank:</h5>
                            <button type="button" class="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-outline-primary teacher-button">Save</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning teacher-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCreateButton
