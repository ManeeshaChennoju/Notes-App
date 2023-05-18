import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  Form,
  Input,
  TextArea,
  Div,
  AddButton,
  NotesUlContainer,
  Img,
  EmptyContainer,
  Para,
} from './styledComponents'

const Notes = () => {
  const [notesList, updateNotesList] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const noteObject = {id: uuidv4(), title, text}
    updateNotesList(prevState => [...prevState, noteObject])
    setTitle('')
    setText('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <TextArea
          placeholder="Take a Note..."
          value={text}
          onChange={onChangeText}
        />

        <Div>
          <AddButton type="submit">Add</AddButton>
        </Div>
      </Form>
      {notesList.length === 0 ? (
        <EmptyContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
            alt="notes empty"
          />
          <Heading>No Notes Yet</Heading>
          <Para>Notes you add will appear here</Para>
        </EmptyContainer>
      ) : (
        <NotesUlContainer>
          {notesList.map(eachItem => (
            <NoteItem key={eachItem.id} details={eachItem} />
          ))}
        </NotesUlContainer>
      )}
    </MainContainer>
  )
}

export default Notes
