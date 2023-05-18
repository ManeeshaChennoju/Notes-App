import {LiContainer, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {id, title, text} = details
  return (
    <LiContainer key={id}>
      <Heading>{title}</Heading>
      <Para>{text}</Para>
    </LiContainer>
  )
}

export default NoteItem
