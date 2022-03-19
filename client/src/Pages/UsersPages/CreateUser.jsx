import React from 'react'
import { useState, useEffect } from 'react'
import "../../App.css"

import Api from '../../services/api'

function CreateUser() {

    const [userNome, setUserNome] = useState("")
    const [userSenha, setUserSenha] = useState("")

    const submitUser = () => {
        const json = JSON.stringify({ nome: userNome, senha: userSenha })
    
        Api.post('/usuarios/api/insert', json, {headers: {'Content-Type': 'application/json'}})
        .then(() => console.log("salvo", json))
        .catch(err => {console.log(err)})
    }

  return (
    <div className='App'>
        <h1>Crie um usuário</h1>

        <div className='CreateUserForm'>
            <label>Nome</label>
            <input type="text" name='nomeUsuario' onChange={e => {
                e.preventDefault()
                setUserNome(e.target.value)
            }}/>
            <label>Senha</label>
            <input type="text" name='senhaUsuario' onChange={e => {
                e.preventDefault()
                setUserSenha(e.target.value)
            }}/>

            <button onClick={submitUser}>Salvar</button>
        </div>
    </div>
  )
}

export default CreateUser