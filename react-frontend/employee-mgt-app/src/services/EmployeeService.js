import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:5002/api/v1/employees";

class EmployeeService{

    getEmployeeService(){
        return axios.get(EMPLOYEE_BASE_URL)
    } 

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL, employee)
    }

}

export default new EmployeeService();

