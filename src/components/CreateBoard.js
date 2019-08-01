import React from 'react'

const CreateBoard = ({ cells, hole, checkAlive, timeUp }) => {
  console.log(timeUp)
  return (<section className={"board"} id={`${timeUp}`}>
    {cells.map(cell => {
      let image = 'grass'
      if (cell === hole) image = 'mole'
      return (
        <p onClick={(e) => checkAlive(image, e)} key={cell} className={`hole${cell} hole ${image}`}>
        </p>
      )
    })}
  </section>
  )
}

export default CreateBoard