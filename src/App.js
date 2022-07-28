import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Time from './Time/Time';

function App() {
  const times = [

    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);
  const onColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }
  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} onColaboradorCadastrado={onColaboradorCadastrado} ></Formulario>
      {times.map((time) => <Time colaboradores={colaboradores.filter(c => c.time === time.nome)} key={time.nome} time={time} ></Time>)}

    </div>
  );
}

export default App;
