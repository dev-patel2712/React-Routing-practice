import React from 'react'

const Unmounting = () => {
    return (
        <div>
            <h1 style={{ borderRadius: '15px', boxSizing: 'border-box', margin: '10px', padding: '10px', backgroundColor: '#b9efff' }}>

                componentWillUnmount()
            </h1>
            <h3 style={{ borderRadius: '15px', boxSizing: 'border-box', margin: '10px', padding: '10px', backgroundColor: '#b9efff' }}>
                This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes. This method denotes the end of the component’s lifecycle.
            </h3>

        </div>
    )
}

export default Unmounting;