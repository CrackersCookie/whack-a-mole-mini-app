import React from 'react'

const CreateBoard = ({ cells }) => {
  return (<section className="board">
    {cells.map(cell => {
      return (
        <p key={cell} className={`hole${cell}`}>
        </p>
      )
    })}
  </section>
  )
}

export default CreateBoard