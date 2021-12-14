import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:5002/api/v1/employees";

class EmployeeService{

    getEmployeeService(){
        return axios.get(EMPLOYEE_BASE_URL)
    } 


}

export default new EmployeeService();

