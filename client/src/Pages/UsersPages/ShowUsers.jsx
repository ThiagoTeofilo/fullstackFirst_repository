import React, {useEffect} from 'react'
import { useState } from 'react'
import Api from '../../services/api'

function ShowUsers() {

  const [listaDeUsuarios, setListaDeUsuarios] = useState([])

  useEffect(() => {
    Api.get('/usuarios').then(response => {
      console.log(response)
      setListaDeUsuarios(response.data)
    })
  }, [])

  return (
    <div className='ShowUserMain'>
      <h1>Usuários salvos</h1>
      <div className="ListaDeUsuarios">
        {listaDeUsuarios.map(value => {
          return (
            <h3>Usuário: {value.nome}</h3>
          )
        })}
      </div>
    </div>
  )
}

export default ShowUsers