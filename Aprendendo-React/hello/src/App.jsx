import Title from './Components/Title/Title';
import CardEvento from './Components/CardEventos/CardEventos';
import Container from './Components/Container/Container';

import './App.css';
function App() {
  return (
    <div className="App">
      <h1 className='App__title'>Hello World</h1>
      <Title text="Quero Jogar Dead Space" />

      <br /> <br />
      <Container>
        <CardEvento title="Festa do Ratao" text="O ratao quer todo mundo na casa dele." />
        <CardEvento title="Festa do Ratao" text="O ratao quer todo mundo na casa dele." />
        <CardEvento title="Festa do Ratao" text="O ratao quer todo mundo na casa dele." />
      </Container>

    </div>
  );
}

export default App;
