import axios from 'axios'
import React, { useState } from 'react'
import NavCourse from './NavCourse'

const Profile = () => {
    const[course,setCourse]=useState(
        {
            "title":"",
            "date":"",
            "description":"",
            "courseduration":"",
            "venue":"",
            "trainername":"",
        }
    )
    const inputHandler=(event)=>{
        setCourse({...course,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(course)
        axios.post("http://localhost:8080/profile",course).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfull")
                    
                } else {
                    alert("Error")
                }
            }
        )
    }
  return (
    <div>
        <NavCourse/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TITLE</label>
                            <input type="text" className="form-control" name='title' value={course.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DATE</label>
                        <input type="date"  id="" className="form-control"  name='date' value={course.date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DESCRIPTION</label>
                        <textarea  id="" className="form-control" name='description' value={course.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COURSE DURATION</label>
                        <input type="text" className="form-control" name='courseduration' value={course.courseduration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">VENUE</label>
                        <input type="text" className="form-control" name='venue' value={course.venue} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">TRAINER NAME</label>
                        <input type="text" className="form-control" name='trainername' value={course.trainername} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile