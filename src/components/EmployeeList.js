import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

// const colors = ['success', 'primary', 'info', 'warning'];

import { getAllEmpService  } from '../apiservices/EmployeesServices';
import EmployeesItem from './EmployeeItem';

import AddEmpModal from '../modals/AddEmpModal';

export default function EmployeesList() {

    const [employees, setEmployees] = useState([]);
    const [isUpdated, setUpdated]   = useState(false);
    const [showAddModal, setAddModal] = useState(false);




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
                console.log(response.data)
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
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Position</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>

                <MDBTableBody>

                    {
                        employees.map( emp => (
                            <EmployeesItem emp={emp} />
                        ) )
                    }
                
                
                </MDBTableBody>
            </MDBTable>
            <AddEmpModal show={showAddModal} setAddModal={setAddModal} setUpdated={setUpdated}></AddEmpModal>
            <MDBBtn rounded onClick={ (e) => { (setAddModal(true)) } }>Add Employee </MDBBtn>
        </div>
    );
}