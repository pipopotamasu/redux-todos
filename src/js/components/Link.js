import React, { PropTypes } from 'react'

const Link = ({children, onClick, active}) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >{children}</a>
  )
}

Link.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Link
