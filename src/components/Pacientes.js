import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


const Pacientes = ({citas}) => {

  return ( 
      <Fragment>
        <h1 className="my-5">Administración de Pacientes</h1>
        <div className="container mt-5 py-5"> 
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link to={'/nueva'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
          </div>
          <div className="col-md-8 mx-auto">
            <div className="list-group">
              {citas.map(cita => (
                  <Link to={`/cita/${cita._id}`} key={cita._id} className="p-5 list-group-item list-group-item-action flex-column aling-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h3 className="mb-3">{cita.name}</h3>
                      <small className="fecha-alta">
                        {cita.date} - {cita.hour}
                      </small>
                    </div>
                    <p className="mb-0">
                      {cita.symptom}
                    </p>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
   );
}
 
export default Pacientes;