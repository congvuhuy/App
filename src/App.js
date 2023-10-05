import './App.scss';
import Header from './components/header';
import TableUsers from './components/tableUser';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className='app-container'>

      <Header/>
      <Container>
        <TableUsers/>
      </Container>
     
    </div>
  );
}

export default App;
