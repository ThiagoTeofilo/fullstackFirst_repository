import React from 'react'
import {useNavigate} from "react-router-dom"

function Users() {
  let navigate = useNavigate()
  return (
    <div>
      <h2>Página Users</h2>
      <ul>
        <li onClick={() => navigate("/users/create")}>Create</li>
        <li onClick={() => navigate("/users/login")}>Login</li>
        <li onClick={() => navigate("/users/show")}>Show</li>
      </ul>
    </div>
  )
}

export default Users