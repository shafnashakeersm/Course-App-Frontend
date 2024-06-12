import React, { useEffect, useState } from 'react'
import NavCourse from './NavCourse'
import axios from 'axios'

const ViewAll = () => {
    const[course,changeCourse]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/viewall").then(
            (Response)=>{
                changeCourse(Response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavCourse/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Course date</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Course Duration</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Trainer Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    course.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.title}</th>
                                                <td>{value.coursedate}</td>
                                                <td>{value.description}</td>
                                                <td>{value.courseduration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.trainername}</td>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll