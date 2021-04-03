import  React, {useState} from  'react'
import styled from 'styled-components'
import { CalcInput, Calc , InputType, OperatorType} from '../module/calc';
import Button,  {ButtonType} from './Button';


const Container = styled.div``;

const Grid = styled.div`
  display:grid;
  grid-gap: 10px;
  grid-template-columns:repeat(4,80px);
  grid-template-rows:120px repeat(5,80px);
`;

const Display = styled.div`
  background:#fff;
  border-radius:8px;
  display:flex;
  flex-direction: row-reverse;
  justify-items: end;
  align-items:center;
  font-size:3rem;
  text-align:right;
  grid-column-end: span 4;
  padding:0 1.5rem;
`;

const  Calculator: React.FC<{}> = () => {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendInput= (input:CalcInput):void => {
    setInputs((prev) => [...prev, input])
  }

  const handleNumerical =  (value:number) => () => appendInput({ type:InputType.Numerical, value })
  const handleOperator =  (operator:OperatorType) => () => appendInput({type:InputType.Operator, operator})
  const handleAllClear = () =>() => setInputs([])
  const handleOops = () => () => setInputs(prev=> prev.slice(0, -1))

  return(
    <Container>
      <Grid>
      <Display>{state.displayValue}</Display>
        <Button  buttonType={ButtonType.Operation} label="AC" position={[0,1]} width={2} onClick={handleAllClear()} />
        <Button  buttonType={ButtonType.Operation} label="Oops" position={[2,1]} width={2} onClick={handleOops()} /> 
        <Button  buttonType={ButtonType.Operation} label="-" position={[3,2]} onClick={handleOperator(OperatorType.Subtract)} />
        <Button  buttonType={ButtonType.Operation} label="+" position={[3,3]}onClick={handleOperator(OperatorType.Add)} />  
        <Button  buttonType={ButtonType.Operation} label="=" position={[3,4]} height={2} onClick={handleOperator(OperatorType.Equals)} />
        <Button label="9" position={[2,2]} buttonType={ButtonType.Number} onClick={handleNumerical(9)} />
        <Button label="8" position={[1,2]} buttonType={ButtonType.Number} onClick={handleNumerical(8)}/> 
        <Button label="7" position={[0,2]} buttonType={ButtonType.Number} onClick={handleNumerical(7)}/> 
        <Button label="6" position={[2,3]} buttonType={ButtonType.Number} onClick={handleNumerical(6)}/> 
        <Button label="5" position={[1,3]} buttonType={ButtonType.Number} onClick={handleNumerical(5)}/> 
        <Button label="4" position={[0,3]} buttonType={ButtonType.Number} onClick={handleNumerical(4)}/> 
        <Button label="3" position={[2,4]} buttonType={ButtonType.Number} onClick={handleNumerical(3)}/> 
        <Button label="2" position={[1,4]} buttonType={ButtonType.Number} onClick={handleNumerical(2)}/> 
        <Button label="1" position={[0,4]} buttonType={ButtonType.Number} onClick={handleNumerical(1)}/>
        <Button label="0" buttonType={ButtonType.Number} position={[0,5]} width={3} onClick={handleNumerical(0)} />
      </Grid>
    </Container>
  )
}

export default Calculator
// 
// 

// 

