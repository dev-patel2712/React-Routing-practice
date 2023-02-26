import React from 'react'

const Mounting = () => {
  return (
    <div>
   <h1 style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#553098'}}> Explain the meaning of Mounting </h1><br />
  
   <div style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#8957e5'}}> 
   We have seen so far that React web apps are actually a collection of independent components that run according to the interactions made with them. Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows.
   </div>
  <br />
   <div style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#bc8cff'}}> 
   Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

   </div>
 <br />
   <div style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#e2c5ff'}}> 
   Mounting: Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.

componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
   </div>
   </div>
  )
}

export default Mounting;