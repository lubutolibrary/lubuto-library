import React, { useState,useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor'


function MainActions(){

    const [studenName, setStudentName] = useState('');

    useEffect(()=>{
       
        setTimeout(() => {
            Meteor.user() && setStudentName("Hi,"+Meteor.user().profile.name)
        }, 500);

    })

    if (!Meteor.userId()) {
        return null;
    } 

    return (
        <div className="row">
            <h4 className="col blue-grey-text"> {studenName} </h4>
                <div className="col m8 offset-m3">
                <div className=" col m6">
                    <Link to="/dashboard/language_selector/?n=create_lesson_type">
                        <button className="btn-large waves-effect waves-light blue" >
                            View Profile
      </button>
                    </Link>
                </div>

                <div className=" col m6">
                    <Link to="/language_selector/?n=lessons">
                        <button className="btn-large waves-effect waves-light blue" >
                            View Lessons
      </button>
                    </Link>
                </div>

                    </div>
        </div>
    )
} 

export default MainActions;