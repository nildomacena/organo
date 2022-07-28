import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const times = props.times;
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form submetido', nome, cargo, imagem, time)
        props.onColaboradorCadastrado({ 'nome': nome, 'cargo': cargo, 'time': time, 'imagem': imagem });
        setCargo('')
        setNome('')
        setImagem('')
        setTime('')

    }

    return (
        <section className='formulario' >
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    required={true} label="Nome"
                    placeholder="Digite seu Nome">
                </CampoTexto>
                <CampoTexto
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>
                <CampoTexto
                    required={true}
                    label="Imagem"
                    placeholder="Digite seu Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                >

                </CampoTexto>
                <ListaSuspensa
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    label="Time"
                    itens={times} ></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
export default Formulario;