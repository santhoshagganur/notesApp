// Write your code here
import {ListItem, ListItemHeading, ListContent} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, content} = noteDetails

  return (
    <ListItem>
      <ListItemHeading> {title} </ListItemHeading>
      <ListContent> {content} </ListContent>
    </ListItem>
  )
}

export default NoteItem
