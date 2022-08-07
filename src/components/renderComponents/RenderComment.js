import React from 'react';

const RenderComment = ({ commentData }) => {
    return (
        <div>
            <div class="card-body p-2 mt-3">
                <div class="d-flex row">
                    <div className='col-md-1'>
                        <img class="rounded-circle shadow-1-strong me-3"
                            src="https://icon-library.com/images/anonymous-icon/anonymous-icon-0.jpg" alt="avatar"
                            width="60px" height="60px" />
                    </div>
                    <div className='col-md-11'>
                        <span>
                            <h5 className='text-end '>Anonymous</h5>
                        </span>
                        <p class="mb-0">
                            {commentData.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderComment;