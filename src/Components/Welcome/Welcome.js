import React, {Component} from "react";
import SignIn from "../SignIn/SignIn";
import "./Welcome.css";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

   componentDidMount=()=>{
    
    }

    render() { 
        return ( 
            <div className="mainDiv">
                <SignIn/>
            </div>
         );
    }
}
 
export default Welcome;