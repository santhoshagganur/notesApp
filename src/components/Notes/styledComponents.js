// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
`

export const MainHeading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
  font-size: 30px;
  font-weight: 500;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: #475569;
  padding: 20px;
  height: 250px;
  width: 600px;
`

export const UserInput = styled.input`
  background-color: transparent;
  padding: 10px;
  width: 300px;
  height: 30px;
  border-width: 0;
  margin-bottom: 20px;
`

export const UserInputContent = styled.textarea`
  background-color: transparent;
  padding: 10px;
  width: 300px;
  height: 30px;
  border-width: 0;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  padding: 10px;
  border-width: 0;
  color: #ffffff;
  font-size: 14px;
  align-self: flex-end;
  width: 100px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
`
export const Image = styled.img`
  height: 150px;
  background-size: cover;
`
