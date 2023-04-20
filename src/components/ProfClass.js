import React from "react";

class ProfClass extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        userInfo : {
        name : "xxx" ,
        location : "Dummy location",
        
        },
    };

        console.log("Child - Constructor")
    }

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/Prathik5")
        const json = await response.json()
        console.log(json);

        this.setState({
            userInfo : json,
        });

        console.log("Child - Component did mount")
    }


    componentDidUpdate(){
        console.log("Child- Component did update");
    }

    componentWillUnmount(){
        console.log("Component unmounted");
    }

    render(){
        const {userInfo} = this.state;
        return(
            <>
                {console.log("Child - Render")}
                <h1>Profile Class Component</h1>
                <img src={userInfo?.avatar_url} alt="Avatar bro" />
                <h2>Name : {userInfo?.name}</h2>
                <h3>Location : {userInfo?.location}</h3>
                <p>{userInfo.followers}</p>
            </>
        )
    }
    }

export default ProfClass; 