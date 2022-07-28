import './Time.css'
import Colaborador from '../components/Colaborador/Colaborador';
const Time = (props) => {
    const colaboradores = props.colaboradores;
    console.log(colaboradores)
    if (!colaboradores || colaboradores.length === 0)
        return;
    return (

        <section style={{ backgroundColor: props.time.corSecundaria }} className='time' >
            <h3 style={{ borderColor: props.time.corPrimaria }} >{props.time.nome}</h3>
            <div className='colaboradores' >
                {colaboradores.map(c => <Colaborador colaborador={c} ></Colaborador>)}
            </div>
        </section >
    );
}

export default Time;