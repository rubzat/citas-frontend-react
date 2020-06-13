import React, {Fragment, useEffect, useState} from 'react'
import { Link , withRouter} from 'react-router-dom';
import clientAxios from '../config/axios'
const NuevaCita = (props) => {
  //Generr State como Objeto
  const [cita, guardarCita] = useState({
    name:'',
    date:'',
    hour:'',
    symptom:''
  });
  //Funcion de obtener datos de Formulario
  const actualizarSate = e => {
    guardarCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  };
  //Enviar a API
  const crearNuevaCita = e => {
    e.preventDefault();
    //Enviar al servidor
    clientAxios.post('/patient',cita).then((result) => {
      props.guardarConsultar(true)
      props.history.push('/')
    }).catch((err) => {
      
    });
  }
  return ( 
    <Fragment>
      <h1 className="my-5">Crear Nueva Cita</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form className="bg-white p-5 bordered" onSubmit={crearNuevaCita}>
              <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="name" 
                      name="name" 
                      placeholder="Nombre" 
                      onChange={actualizarSate}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="date">Fecha Alta</label>
                  <input 
                      type="date" 
                      className="form-control form-control-lg" 
                      id="date" 
                      name="date"  
                      onChange={actualizarSate}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="hour">Hora Alta</label>
                  <input 
                      type="time" 
                      className="form-control form-control-lg" 
                      id="hour" 
                      name="hour"  
                      onChange={actualizarSate}
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="symptom">Síntomas</label>
                  <textarea 
                      className="form-control" 
                      name="symptom" 
                      rows="6"
                      onChange={actualizarSate}
                  ></textarea>
              </div>


              <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
      </form>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default withRouter(NuevaCita);