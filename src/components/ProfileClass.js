import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // Create state
        // this.state={
        //     count :0,
        //     count2:0,
        // };
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Initial Location",
            }
        }

        console.log("child-Constructor" + this.props.name);

    }
     
    async componentDidMount() {
    // componentDidMount() {
        //API calls
        const data = await fetch("https://api.github.com/users/jiwansh");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        // this.timer=setInterval(()=>{
        //     console.log("Nmaste Jiwanshu the OP");
        // },1000);
        // console.log("child-componentDidMount" + this.props.name)
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count != prevState.count){
            //
        }
        if(this.state.count2 != prevState.count2){
            //
        }
        console.log("Componenet Did Update");
    }

    componentWillUnmount(){
        //used for cleaning
        clearInterval(this.timer);
        console.log("ComponentWillUnmount");
    }

    render() {
        //returns some jsx
        // const { count } = this.state;
        console.log("child-render" + this.props.name);
        return (
            <div>
                <h1>Profile Class Componenet</h1>;
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                {/* <button onClick={
                    () => {
                        //we do not mutate state directly ,
                        // never do this.state or something similiar
                        this.setState({
                            count: 1,
                            count2: 2,
                        });
                    }
                }>SetCountClass</button> */}
            </div>
        );

    };
};

export default Profile;
/**
 * Parent Constructor
 * Parent render
 * child constructor
 * child render
 * 
 * DOM is updated
 * json logged in console
 * child componenetDidMount
 * parent componenetDidMount
 */