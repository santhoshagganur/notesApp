// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  MainHeading,
  CardContainer,
  UserInput,
  AddButton,
  UserInputContent,
  Form,
  ListContainer,
  Image,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [notes, setNotes] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const changeContent = event => {
    setContent(event.target.value)
  }

  const addNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      content,
    }

    setNotes(prevNotes => [...prevNotes, newNote])
    setContent('')
    setTitle('')
  }

  return (
    <MainContainer>
      <MainHeading> Notes </MainHeading>
      <CardContainer>
        <Form onSubmit={addNotes}>
          <UserInput
            placeholder="Title"
            type="text"
            value={title}
            onChange={changeTitle}
          />
          <UserInputContent
            placeholder="Take a Note..."
            type="text"
            value={content}
            onChange={changeContent}
          />
          <AddButton type="submit"> Add </AddButton>
        </Form>
      </CardContainer>

      {notes.length === 0 ? (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <h1> No Notes Yet </h1>
          <p> Notes you add will appear here </p>
        </>
      ) : null}
      <ListContainer>
        {notes.map(each => (
          <NoteItem noteDetails={each} key={each.id} />
        ))}
      </ListContainer>
    </MainContainer>
  )
}

export default Notes
