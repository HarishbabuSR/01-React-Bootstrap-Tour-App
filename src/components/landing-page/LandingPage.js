import React from "react";

class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
               <div className="landing-page">
                   <div className="wrapper">
                     <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                     <h3 className="display-6 text-white" >Welcome to React Tours </h3>
                     <p className="lead text-white"  >
                     We are heartily welcome to this React Tours. In this Tour we can saw some different Techniques and
                      different Methodologies To interact with some react router concept.Then we using these concepts we can build the E-commerce project    
                     </p>
                     </div>
                        
                   </div>
               </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;