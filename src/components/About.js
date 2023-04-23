import Profile from "./Profile";
import ProfClass from "./ProfClass";
import React from "react";
import { Component } from "react";
import userContext from "../utils/userContext";

class About extends React.Component{
    constructor(props){
        super(props)
        
        console.log("Parent - Constructor")
    }
    
    componentDidMount() {
        {console.log("Parent - component did mount")}
    }
    
    render(){
        return(
            <>
            <h1>About Us Page</h1>
            <userContext.Consumer>
                {({user}) => (
                    <h1 className="font-bold p-2 m-2">{user.name} - {user.email}</h1>
                )}
            </userContext.Consumer>
            {console.log("Parent- render")}
            <p>This is the namaste react live course chapter 07 - Finding the path</p>
            <ProfClass name = {"PkClass"} />
            </>
        )
    }
}

export default About;