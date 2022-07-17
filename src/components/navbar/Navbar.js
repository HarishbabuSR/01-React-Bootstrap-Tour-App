import React from "react";

 //class based component
 class Navbar extends React.Component{
     constructor(props){
         super(props);
     }
     
     render(){
         return(
             <React.Fragment>
                 <nav className="navbar navbar-dark bg-dark navbar-expand-sm text-align-left" >
                   <div class="container" >
                       <a href="/" className="navbar-brand">Ultimate Destination</a>
                   </div>
                   <div className="collapse navbar-collapse ">
                       <ul className="navbar-nav text align-items-left">
                           <li className="navbar-item">
                               <a href="/" className="navbar-link">Home</a>
                           </li>
                           <li className="navbar-item">
                                <a href="/" className="navbar-link">tours</a>
                           </li>
                           <li className="navbar-item">
                               <a href="/" class="navbar-link">Packages</a>
                           </li>
                           <li className="navbar-item">
                               <a href="/" className="navbar-link">Contact</a>
                           </li>
                       </ul>
                   </div>
                 </nav>
             </React.Fragment>
         );
     }
 }

 export default Navbar;

