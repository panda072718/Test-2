import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
// import { StudentList } from './Studentlist';
import { List } from './List'

export default function StudentDetail() {
    const [StudentList , setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")))
    const id = useParams();
    const studentId = id.id;
    const [student] = useState(StudentList[studentId])
  return (
    <div class="main">
            <h1 class="text-center me-3 mt-3 fw-bolder bg-light text-dark">Student Details</h1>
            <div class="list p-3">
                <table class="table table-bordered rounded rounded-3">
                    <thead class="bg-light">
                        
                    </thead>
                    
                    <tbody id="user-data-card">
                    <tr class="bg-primary text-white">
                    <td class="fw-bolder"> Student Name </td>
                    <td>{student.stname}</td>
                    <td class="fw-bolder"> Contect Number </td>
                    <td>{student.cnumber}</td>
                </tr>
                <tr class="bg-secondary text-white">
                    <td class="fw-bolder"> Date of Birth </td>
                    <td>{student.stdob}</td>
                    <td class="fw-bolder"> Mark </td>
                    <td>{student.mark}</td>
                </tr>
                <tr class="bg-success text-white">
                    <td class="fw-bolder"> Father Name </td>
                    <td>{student.fname}</td>
                    <td class="fw-bolder"> Mother Name </td>
                    <td>{student.mname}</td>
                </tr>

                <tr class="bg-info text-dark">
                    <td class="fw-bolder"> User name </td>
                    <td>{student.uEmail}</td>
                    <td class="fw-bolder"> Adderss </td>
                    <td>{student.address}</td>
                </tr>

                    </tbody>
                </table>
            </div>
        </div>
  )
}
