import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

function getAllEmpService(){
    return axios.get(baseURL + 'employees')

}


function addNewEmpService(empData) {
    return axios({
        url: baseURL + 'employees/',
        method: 'POST',
        data: empData
    })

}

export {
    getAllEmpService,
    addNewEmpService,

}