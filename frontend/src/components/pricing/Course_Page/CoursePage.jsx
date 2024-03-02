import React from 'react'
import { courses } from '../../../dummydata'
import './CoursePage.css'


function CoursePage2() {
    return (
        <div className='container-fluid' style={{backgroundColor:"#4ebfb6", width:"100%",margin:"0px",marginRight:"0px",fontFamily:"cursive"}}>
            <div class="row" style={{ width: "90vw", marginTop: "5vh",borderRadius:"25px"}}>

                <div class="col" style={{paddingLeft:"10vw",borderRadius:"25px"}}>
                    <div className="card-body" style={{borderRadius:"25px"}}>
                        <h1 className="card-title" style={{textAlign:"center",fontSize:"38px",paddingTop:"25px",fontFamily:"cursive"}}>{courses[0].title}</h1>
                        <p className="card-text" style={{textAlign:"center",paddingTop:"45px" }}>{courses[0].duration}</p>
                        {courses[0].price && <p className="card-text" style={{textAlign:"center" }}> Price: {courses[0].price}</p>}
                        <ul className="list-group list-group-flush feature" style={{borderRadius:"15px",boxShadow:"-moz-initial"}}>
                            {courses[0].features.map((feature, index) => (
                                <li key={index} className="list-group-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-3" style={{marginLeft:"12vw",width:"10vw",backgroundColor:"white",color:'#1eb2a6',fontWeight:"bold",fontFamily:"sans-serif"}}>APPLY NOW</button>
                    </div>
                </div>
                <div class="col">
                    <div className="card-body">
                        <h1 className="card-title" style={{textAlign:"center",fontSize:"38px",paddingTop:"25px",fontFamily:"cursive"}}>{courses[1].title}</h1>
                        <p className="card-text" style={{textAlign:"center" }}>{courses[1].duration}</p>
                        {courses[1].price && <p className="card-text" style={{textAlign:"center" }}>Price: {courses[1].price}</p>}
                        <ul className="list-group list-group-flush feature" style={{borderRadius:"15px"}}>
                            {courses[1].features.map((feature, index) => (
                                <li key={index} className="list-group-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="btn btn-primary mt-3" style={{marginLeft:"15vw",width:"10vw",backgroundColor:"white",color:'#1eb2a6',fontWeight:"bold",fontFamily:"sans-serif",marginBottom:"10px"}}>APPLY NOW</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CoursePage2
