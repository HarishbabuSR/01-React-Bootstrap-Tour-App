import React from  "react";
import TourCard from "./TourCard";
import card1 from "./img/card1.jpg"
import card2 from "./img/card2.jpg"
import card3 from "./img/card3.jpg"
import card4 from "./img/card4.jpg"
class TourComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tours:['Paris','Bangkok','Indonesia','Malaysia']
        }
    }
    render(){
        return(
            <React.Fragment>
               <section className="p-3">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3">
                              <TourCard tourImage={card1} tourName={this.state.tours[0]}/>
                          </div>
                          <div className="col-md-3">
                              <TourCard tourImage={card2} tourName={this.state.tours[1]}/>
                          </div>
                          <div className="col-md-3">
                              <TourCard tourImage={card3} tourName={this.state.tours[2]}/>
                          </div>
                          <div className="col-md-3">
                              <TourCard tourImage={card4} tourName={this.state.tours[3]}/>
                          </div>
                      </div>
                  </div>
               </section>
            </React.Fragment>
        );
    }  
}

export default TourComponent;