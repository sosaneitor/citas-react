import { useState, useEffect} from 'react';
import ListadoPacientes from "./components/ListadoPacientes" 
import Header from "./components/Header"
import Formulario from "./components/Formulario" 

function App() {
  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const[paciente, setPaciente] = useState({});

  //obtener si hay localStorage para saber si se guarda en setPacientes para despues
  //... mostrarlo 
 /* useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS(); 

  }, []); */
  // Finaliza

  //Guardar en localStorage 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
    //Finaliza Guardar en localStorage
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
  
    setPacientes(pacientesActualizados)
  
  
  }


  return (
    <div className="container mx-auto mt-20">
    <Header/> 
      <div className="mt-12 md:flex"> 
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        /> 
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}


export default App
