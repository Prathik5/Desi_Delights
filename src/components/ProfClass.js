import React from "react";

class ProfClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "xxx",
        location: "Dummy location",
      },
    };

    console.log("Child - Constructor");
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/Prathik5");
    const json = await response.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log("Child - Component did mount");
  }

  componentDidUpdate() {
    console.log("Child- Component did update");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className="">
        {console.log("Child - Render")}
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit
          atque itaque totam labore accusamus ad? Nostrum, accusamus, quod vel
          tempore maiores labore quasi quis dolorem officia ipsam a ducimus.
        </p>
        <img
          className="w-28 h-28 flex "
          src={userInfo?.avatar_url}
          alt="Avatar bro"
        />
        <h2>Name : {userInfo?.name}</h2>
        <h3>Location : {userInfo?.location}</h3>
        {console.log(userInfo)}
      </div>
    );
  }
}

export default ProfClass;
