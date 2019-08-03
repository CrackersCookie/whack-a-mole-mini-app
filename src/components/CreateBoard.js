import React from 'react'
import mole from '../images/mole.png'

const CreateBoard = ({ cells, hole, checkAlive, timeUp }) => {
  return (<section className={"board"} id={`${timeUp}`}>
    {cells.map(cell => {
      let image = 'grass'
      if (cell === hole) image = 'mole'
      return (
        <div className="grid">
          <img src={mole} alt="mole" onClick={(e) => checkAlive(image, e)} key={cell} className={`hole${cell} hole ${image}`}>
          </img>
        </div>
      )
    })}
  </section>
  )
}

export default CreateBoard