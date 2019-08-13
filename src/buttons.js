import React from 'react'

const Button = (props) => {
  return (
    <div className="btn">
        <div className="innerbtn" onClick={()=>props.val(props.children)}>
      {props.children}
      </div>
    </div>
  )
}
export default Button;