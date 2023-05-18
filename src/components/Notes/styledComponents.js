import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const Heading = styled.h1`
  color: blue;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  font-family: 'Bree Serif';
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #bfbfbfbf;
  width: 60%;
  padding: 20px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  //   background-color: transparent;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
`
export const Div = styled.div`
  align-self: flex-end;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AddButton = styled.button`
  background-color: blue;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
`
export const NotesUlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const Img = styled.img`
  height: 130px;
  width: 130px;
`
export const Para = styled.p`
  color: black;
`
