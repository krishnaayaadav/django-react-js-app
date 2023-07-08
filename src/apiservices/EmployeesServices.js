import axios from "axios";

const baseURL = 'https://djangoreactt.pythonanywhere.com/api/';

function getAllEmpService(){
    return axios.get(baseURL + 'employees')

}

function addNewEmpService(empData) {
    return axios({
        url: baseURL + 'employees/',
        method: 'POST',
        data: empData
    })

};

function updateEmpService(empId, empData){
    const update_url = baseURL + 'employees/' + empId + '/'
    return axios({
        method: 'PATCH',
        url: update_url,
        data: empData
    })
}


function deleteEmpService(empId) {
    const update_url = baseURL + 'employees/' + empId + '/'
    return axios({
        method: 'DELETE',
        url: update_url,
    })
}

export {
    getAllEmpService,
    addNewEmpService,
    updateEmpService,
    deleteEmpService

}