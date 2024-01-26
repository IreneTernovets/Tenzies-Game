import React from 'react'

const Die = (props) => {

  return (
    <div className={props.isHeld ? 'die-element held-element' : 'die-element'} onClick={props.holdDice}>{props.value}</div>
  )
}

export default Die