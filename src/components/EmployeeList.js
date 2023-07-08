import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// const colors = ['success', 'primary', 'info', 'warning'];

import { getAllEmpService  } from '../apiservices/EmployeesServices';
import EmployeesItem from './EmployeeItem';

import AddEmpModal from '../modals/AddEmpModal';
import MsgModal from '../modals/MsgModal';

export default function EmployeesList() {

    const [employees, setEmployees] = useState([]);
    const [isUpdated, setUpdated]   = useState(false);
    const [showAddModal, setAddModal] = useState(false);

    const [showMsg, setMsg]           = useState(false);
    const [msgData, setMsgData]       = useState({
        data: null
    });

    useEffect( ()=> {
        let mouted = true;
        if(employees.length && !isUpdated){
            return
        }

        getAllEmpService()
           .then( response => {
            // if status is 200 ok response than save the emp data change state
            if(response.status === 200){
                setEmployees(response.data)
                // console.log(response.data)
            }
           },

           (errors) => {
            console.log(errors.response.data)
           }
          
           )
        
           return () => {
                mouted = false;
                setUpdated(false);
           }
    }, [employees, isUpdated] )


    return (
        <div>

            <MsgModal show={showMsg} setMsg={setMsg} magData = {msgData}></MsgModal>
            <div className="table-title">
                <div className="row my-1">
                    <div className="col-sm-6">
                        <h2>Employees<b> Management </b>System</h2>
                    </div>


                    <div className="col-sm-6">
                        <MDBBtn className='addbtn' color='link' rounded size='sm' onClick={(e) => { (setAddModal(true)) }} >
                            Add New Employee
                        </MDBBtn>
                    </div>
                </div>
            </div>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Salary</th>
                        <th scope='col'>Status</th>

                        <th scope='col'>Position</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>

                <MDBTableBody>

                    {
                        employees.map( emp => (
                            <EmployeesItem key={emp.id} emp={emp} setUpdated={setUpdated} setMsg={setMsg} setMsgData={setMsgData}   />
                        ) )
                    }
                
                
                </MDBTableBody>
            </MDBTable>
            <AddEmpModal show={showAddModal} setAddModal={setAddModal} setUpdated={setUpdated}></AddEmpModal>
        </div>
    );
}