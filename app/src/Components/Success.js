import React from 'react'
import './Checkpoint.css'
import {Button} from '@blueprintjs/core'

const Checkpoint = (props) => {


  return (
    <div>
      <div className={'imageWrapper'}><img src={props.imageUrl}/></div>
      <div className={'textWrapper'}>
        <div className={'text'}>
          <h3>{props.title.toUpperCase()}</h3>
          <p>{props.text}</p>
        </div>
    </div>
      <div className={'hintWrapper'}>
        <div className={'hint'}>
          <h3> HINT </h3>
          <p>{props.hint}</p>
          <Button onClick={() => {
            window.location = props.mapsLink
          }}>get Coordinates</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkpoint