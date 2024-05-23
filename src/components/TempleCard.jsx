import React from 'react'

const TempleCard = ({ image, text }) => {
  return (
    <div className="card_box" style={{ background: `url(${image})` }}>
      <span data-text={text}></span>
    </div>
  )
}

export default TempleCard
 