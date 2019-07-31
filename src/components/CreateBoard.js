import React from 'react'

const CreateBoard = ({ cells, hole, checkAlive }) => {
  return (<section className="board">
    {cells.map(cell => {
      let image = 'grass'
      if (cell === hole) image = 'mole'
      return (
        <p onClick={checkAlive} value={image} key={cell} className={`hole${cell} hole ${image}`}>
        </p>
      )
    })}
  </section>
  )
}

export default CreateBoard