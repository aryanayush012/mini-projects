import React from 'react'
const styles = {
    container:{
        height:"25px",
        width:"fit-content",
        borderRadius:"5px",
        padding:"5px 10px",
        margin:"10px",
        position:"relative",
        backgroundColor:"teal",
        color:"white",
    },
}

const Chips = ({children}) => {
  return (
    <div style={styles.container}>
       {children}
    </div>
  )
}

export default Chips