import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

import UpdateEmpModal from '../modals/UpdateEmpModal';
import { useState } from 'react';

import { deleteEmpService } from '../apiservices/EmployeesServices';

const EmployeesItem = (props)=>{
    
    const {emp} = props;
    const img_url = 'http://127.0.0.1:8000' + emp.avtar;

    const [showUpdateModal, setUpdateModal] = useState(false);
    const [empData, setEmpData] = useState(props.emp);


    function updateHandler(e, emp){
        setUpdateModal(true);
        setEmpData(emp);
    }

    const deleteHandler = (e, empId) => {
        e.preventDefault();
        const isSure = window.confirm('Are you sure you want to delete ?')

        if(isSure){
            
            deleteEmpService(empId)
            .then( res => {
                if(res.status === 204){
                    props.setMsgData({
                        data: res.data.msg
                    })
                    props.setUpdated(true);
                    props.setMsg(true);
                    console.log(res.data.msg)

                }
            },
            (error) => {
                console.log(error.response.data)
            }
            
            )
        }
    }

    return(
        <>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <img
                        src={img_url}
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                    />
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>{emp.name}</p>
                        <p className='text-muted mb-0'>{emp.email}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>{emp.department}</p>
                <p className='text-muted mb-0'>{emp.job_role}</p>
            </td>
            <td>{emp.salary}</td>

            <td>
                <MDBBadge color='success' pill>
                    {emp.status}
                </MDBBadge>
            </td>
            <td>{emp.position}</td>
            <td>
                <MDBBtn color='link' rounded size='sm' onClick={ (e) => { updateHandler(e, emp)} }>
                    Edit
                </MDBBtn>

                <MDBBtn color='link' rounded size='sm' onClick={ (e) => { deleteHandler(e, emp.id) } } >
                    Delete
                </MDBBtn>
            </td>
        </tr>
            <UpdateEmpModal emp={empData} show={showUpdateModal} setAddModal={setUpdateModal} setUpdated={props.setUpdated} setMsg={props.setMsg} setMsgData={props.setMsgData}  />
        </>
    )
}

export default EmployeesItem