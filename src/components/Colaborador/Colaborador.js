import './Colaborador.css'

const Colaborador = (props) => {
    const colaborador = props.colaborador;
    return (
        <div className='colaborador' >
            <div className='cabecalho' >
                <img alt='imagem' src='https://github.com/nildomacena.png' />
            </div>
            <div className='rodape'>
                <h4 >{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;