import React from "react";
import TourContainer from "./TourContainer";
class TourCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
               <div className="card">
                   <img src={this.props.TourImage} alt="" className="img-fluid" />
                   <div className="card-body">
                     <h4 className="card-title">{this.props.tourName}</h4>
                     <p className="card-text">In this Tourist place we can saw the more places like Falls, Nature,Beaches In beaches we have some water games, Visiting Pubs and enjoying the Dj</p>
                     <button className="btn btn-dark btn-sm">Book Now</button>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}

export default TourCard;