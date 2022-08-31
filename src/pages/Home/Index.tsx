import React, { useState, useEffect } from "react";
// Hooks are for make function more simple and idenpedent 
// useState are made for stack state(state hold information)
import "./style.css"

import { Card, CardProps } from "../../components/Card"

export function Home() {
  const [studentName, setStudentName] = useState<CardProps[]>();
  const [students, setStudents] = useState<CardProps[]>([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };


    setStudents(prevState => [...prevState, newStudent]);
  }
  
  useEffect(() => {
    
  },[]);

  return (
    <div className="container">
    <header>
      <h1>Lista de presença</h1>
      <div>
        <strong>Emilio</strong>
        <img src="https://github.com/maccariemilio.png" alt="foto de perfil" />
      </div>
    </header>
    <input 
    type="text" 
    placeholder="Digite aqui" 
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button" onClick={handleAddStudent}
    > Adicionar </button>
    {
      students.map(students => (
      <Card 
      key ={students.time}
      name={students.name}
      time={students.time}
      // needs a key for real for any any variation of this

      />
      ))
    
    }

    </div>
  )
}


// npm run dev pra rodat
