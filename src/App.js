import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
//Components
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'
import clienteAxios from './config/axios';


function App(){
  //State de la App
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect(()=>{
    if(consultar){
      const consultarApi = () =>{
        clienteAxios.get('/patients').then((result) => {
          //Agregar datos a State
          guardarCitas(result.data)
          guardarConsultar(false);
        }).catch((err) => {
          console.log(err)
        });
      };
      consultarApi();
    }
  }, [consultar] );
  return (
    <Router>
      <Switch>
        <Route 
          exact
          path="/"
          component={() => <Pacientes citas={citas} />}
        />
        <Route 
          exact
          path="/nueva"
          component={() => <NuevaCita guardarConsultar={guardarConsultar}/>}
        />
         <Route 
          exact
          path="/cita/:id"
          render={(props) => {
            const cita = citas.filter(cita => cita.id === props.match.params.id)
            console.log(cita)
            return (
              <Cita 
              cita={cita[0]}
              guardarConsultar={guardarConsultar}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;