import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const EmployeesItem = (props)=>{
    const {emp} = props;
    const img_url = 'http://127.0.0.1:8000' + emp.avtar

    return(
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
            <td>
                <MDBBadge color='success' pill>
                    {emp.status}
                </MDBBadge>
            </td>
            <td>{emp.position}</td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                    Edit
                </MDBBtn>
            </td>
        </tr>
    )
}

export default EmployeesItem