import React from 'react'

const Icon = (props) => {
  const { type, className } = props
  let file;
  switch (type) {
    case 'github':
      file = 'github.svg'
      break;
    case 'twitter':
      file = 'twitter.svg'
      break;
    case 'insta':
      file = 'insta.svg'
      break;
    default:
      return false
  }

  const src = `/images/${file}`
  return (
    <img className={className} src={src} />
  )
}

export default Icon
