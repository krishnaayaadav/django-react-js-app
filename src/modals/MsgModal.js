import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody } from 'mdb-react-ui-kit';

export default function MsgModal(props) {

    const toggleShow = () => props.setMsg(!props.show);

    return (
        <>
            <MDBModal animationDirection='top' show={props.show} tabIndex='' setShow={props.setMsg}>
                <MDBModalDialog position='top' frame>
                    <MDBModalContent>
                        <MDBModalBody className='py-1'>
                            <div className='d-flex justify-content-center align-items-center my-3'>
                                <p className='mb-0 success_msg'>Congrats! Employee successfully deleted </p>
                                <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleShow}>
                                    Ok, thanks
                                </MDBBtn>
                                
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}