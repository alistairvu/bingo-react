import styled from "styled-components"

export const HeaderCell = styled.div`
  width: 80px;
  height: 80px;
  color: black;
  background-color: grey;
  border: 1px solid black;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 80px;
  text-align: center;
`

export const HeaderContainer = styled.div`
  display: flex;
`
export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CardContainer = styled.div`
  width: 410px;
  margin: 50px auto;
`

export const Cell = styled.div`
  width: 80px;
  height: 80px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "red" : "white")};
  border: 1px solid black;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 80px;
  text-align: center;
  cursor: pointer;
`
export const FreeCell = styled.div`
  width: 80px;
  height: 80px;
  color: white;
  background-color: green;
  border: 1px solid black;
  font-weight: 700;
  font-size: 1em;
  line-height: 80px;
  text-align: center;
`

export const Button = styled.button`
  padding: 15px;
  font-size: 1.5em;
  background: black;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 auto;
`

export const AppContainer = styled.div`
  margin-top: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`

export const DisplayElement = styled.h1`
  font-size: 2.5em;
  text-align: center;
`
