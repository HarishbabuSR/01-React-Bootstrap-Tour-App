import React from "react";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){ // u can also do for each component for each footer column then import them inside a footer tag
        return(
            <React.Fragment>
                <footer className="main-footer mt-4">
                    <div className="footer-wrapper">
                        <div className="container p-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <h2>Vacations</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid consectetur
                                            consequuntr doloribs earum fuight in, incident iusto non officials optio particular querent quas 
                                            qui quis rem repellendus
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Information</h2>
                                    <p>Adventures</p>
                                    <p>Tours</p>
                                    <p>Hotels</p>
                                    <p>Destinations</p>
                                    <p>Enquires</p>
                                    <p>Online Bookings</p>
                                    <p>Spot Bookings</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Experience</h2>
                                    <p>Adventures</p>
                                    <p>Tours</p>
                                    <p>Hotels</p>
                                    <p>Destinations</p>
                                    <p>Enquires</p>
                                    <p>Online Bookings</p>
                                    <p>Spot Bookings</p>
                                </div>
                                <div className="col-md-3">
                                    <h2>Address</h2>
                                    <p>Flat: 1471, Road No.14</p>
                                    <p>Rajaji Nagar, Banglore</p>
                                    <p>Karnataka, India</p>
                                      <i className="fab fa-facebook-square text-primary fa-2x"/>
                                      <i className="fab fa-twitter text-info fa-2x"/>
                                      <i className="fab fa-instagram text-danger fa-2x"/>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;