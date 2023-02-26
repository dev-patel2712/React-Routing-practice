import React from 'react'

const Updating = () => {
    return (<div>
        <h1 style={{borderRadius:'15px' ,margin:'10px', padding:'10px', boxSizing:'border-box', backgroundColor:'#00769b'}}>ReactJS componentDidUpdate() Method</h1>
        <br />
        <div style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#5adaff'}}>
          <h3>
            The componentDidUpdate() method allows us to execute the React code when the component is updated. All the network requests that are to be made when the props passed to the component changes are coded here.
    
            The componentDidUpdate()is called after componentDidMount() and can be useful to perform some action when the state of the component changes.
          </h3>
          </div ><br />
    
        <div style={{borderRadius:'15px' ,boxSizing:'border-box',  margin:'10px', padding:'10px', backgroundColor:'#b9efff'}}> 
         
           <h3>
           Parameters: Following are the parameter used in this function:
    
    prevProps: Previous props passed to the component
    prevState: Previous state of the component
    snapshot: Value returned by getSnapshotBeforeUpdate() method
    Tip: To avoid an infinite loop, all the network requests are needed to be inside a conditional statement as:
           </h3>
    </div>
    
      </div>
      )
    }

export default Updating;