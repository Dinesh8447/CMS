import React from 'react'
import Body from './Body'
import {useParams} from 'react-router-dom'

export default function UpdateStudent() {
  const {id} = useParams()
  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      <Body id={id}/>
    </div>
  )
}
