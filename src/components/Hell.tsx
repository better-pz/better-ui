import React from 'react'
interface IHelloProps {
  messages?:string
}

const Hello:React.FC<IHelloProps> = (props) => {
  return <h3>{props.messages }</h3>
}

export default Hello