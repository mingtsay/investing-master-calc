import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  List,
} from '@mui/material'
import {Check as CheckIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon} from '@mui/icons-material'
import React, {ReactElement} from 'react'
import PickerItem, {PickerItemType} from './PickerItem'

type PickerProps = {
  isSelected: boolean,
  items: PickerItemType,
  onSelect: (id: number) => void,
  selected: number,
  subheader: string,
  title: string,
};

const Picker: React.FC<PickerProps> = (props): ReactElement => {
  const {
    isSelected,
    items,
    onSelect,
    selected,
    subheader,
    title,
  } = props

  const ids = Object.keys(items).map(Number)

  const [expanded, setExpanded] = React.useState(!isSelected)

  const handleExpandClick = () => {
    setExpanded(v => !v)
  }

  const handleSelect = (id: number) => {
    onSelect(id)
    if (!isSelected) setExpanded(false)
  }

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * ids.length)
    onSelect(ids[randomIndex])
  }

  const handleDeselect = () => {
    onSelect(0)
  }

  return <Card variant="outlined" sx={{m: 4}}>
    <CardHeader
      action={
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="展開/收合"
        >
          {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
      }
      title={<>
        {title}
        {isSelected && <CheckIcon color="success" fontSize="small" sx={{ml: 1}}/>}
      </>}
      subheader={subheader}
    />
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <List disablePadding>
          {ids.map(cardId => <PickerItem
            key={`card-${cardId}`}
            id={cardId}
            items={items}
            selected={selected}
            onSelect={handleSelect}
          />)}
        </List>
      </CardContent>
      <Divider/>
      <Box sx={{m: 'auto', p: 1}}>
        <ButtonGroup variant="text" fullWidth>
          <Button onClick={handleRandomSelect}>隨機選擇</Button>
          <Button onClick={handleDeselect} color="secondary" disabled={!isSelected}>取消選擇</Button>
        </ButtonGroup>
      </Box>
    </Collapse>
  </Card>
}

export default Picker
