import React,{Fragment} from 'react';
import { Link, withRouter} from 'react-router-dom';
import clientAxios from '../config/axios'
import Swal from 'sweetalert2' 

const Cita = (props) => {
  if(!props.cita){
    props.history.push('/');
    return null;
  };
  //Extraer Datos
  const {cita:{_id,name, date, hour, symptom}} = props
  //Eliminar Cita
  const eliminarCita = id => {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "Una vez eliminada ya no se podra recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'La cita ha sido Eliminada.',
          'success'
        )
        clientAxios.delete(`/patient/${id}`).then((result) => {
          props.guardarConsultar(true)
          props.history.push('/')
        }).catch((err) => {
          
        });
      }
    })
  }
  return ( 
    <Fragment>
      <h1 className="my-5">Nombre Cita : {name}</h1>
      <div className="container mt-5 py-5"> 
        <div className="col-12 mb-5 d-flex justify-content-center">
          <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
        </div>
        <div className="col-md-8 mx-auto">
          <div className="list-group">
            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
              <div className="d-flex w-100 justify-content-between">
                <h3 className="mb-3">{name}</h3>
                <small className="fecha-alta">
                  {date} - {hour}
                </small>
              </div>
              <p className="mb-0">
                {symptom}
              </p>
              <div className="">
                <button type="button" className="text-uppercase py-2 my-3 px-5 font-weight-bold btn btn-danger col" onClick={ ()=> eliminarCita(_id)}>
                Eliminar &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
   );
}
 
export default withRouter(Cita);