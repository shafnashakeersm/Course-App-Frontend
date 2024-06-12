import axios from 'axios'
import React, { useState } from 'react'
import NavCourse from './NavCourse'

const Search = () => {
    const[course,setCourse]=useState(
        {
            "title":""
        }
    )
    const [result,setResult]=useState([])
    const  inputHandler=(event)=>{
        setCourse({...course,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(course)
       axios.post("http://localhost:8080/search",course).then(
            (response)=>{
                console.log(response.data)
                setResult(response.data)
            }
        )
    }

  return (
    <div>
        <NavCourse/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">TITLE</label>
                    <input type="text" className="form-control" name='title' value={course.title} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                </div>
            </div>
            {/* table */}
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
                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.title}</th>
                                                <td>{value.coursedate}</td>
                                                <td>{value.description}</td>
                                                <td>{value.courseduration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.trainername}</td>
                                                <td><button className="btn btn-danger">DELETE</button></td>
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

export default Search