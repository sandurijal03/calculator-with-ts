import styled from 'styled-components';
import './App.css'
import Calculator from './components/Caculator';

const Container = styled.div`
  background: #323232;
  display:flex;
  flex-direction:column;
  min-height:100vh;
  width: 100vw;
  align-items:center;
  justify-content: center

`


function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
