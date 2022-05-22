import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function InfoButton() {

    return (
        <div className='addition'>
            <button type="button" className="btn btn-outline-info group-btn" data-bs-toggle="modal" data-bs-target="#detailModal"><InfoOutlinedIcon /></button>

            <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title addition-title" id="exampleModalLabel">Group Details</h5>
                            <button type="button" class="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary group-btn">Go Back</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoButton
