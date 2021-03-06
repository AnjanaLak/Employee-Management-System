import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link} from "react-router-dom"

export default class ListEmployeeComponent extends Component {
    
    constructor(props){
            super(props)

            this.state = {
                employees : []
            }
            // need to bind addEmployee function inside the constructor
            this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
         EmployeeService.getEmployeeService().then((res) => {
             this.setState({employees : res.data})
         })
    }

    addEmployee(){
        // this.props.history.push('/add-employee');

    }
    
    render() {

        
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary'><Link to ='add-employee'>Add Employee</Link></button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-boardered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

// export default ListEmployeeComponent