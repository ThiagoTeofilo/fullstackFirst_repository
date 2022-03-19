import React from 'react'
import { useParams } from "react-router-dom"

function Profile() {
    let { id } = useParams()

  return (
    <div>Profile of { id }</div>
  )
}

export default Profile