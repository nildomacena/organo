import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
    let valor = props.valor;

    const aoMudar = (event) => {
        props.aoAlterado(event.target.value);
    }

    return (
        <div className='lista-suspensa' >
            <label>{props.label}</label>
            <select required={props.required} onChange={aoMudar} value={valor} >
                <option value=""></option>
                {props.itens.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;