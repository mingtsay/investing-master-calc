import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material'
import React from 'react'

export type PickerItemType = { [index: number]: { title: string, color: string } }

const PickerItem: React.FC<{
  id: number,
  items: PickerItemType,
  onSelect: (cardId: number) => void,
  selected: number,
}> = (props) => {
  const {
    id,
    items,
    onSelect,
    selected,
  } = props

  const item = items[id]
  const isSelected = selected === id

  return <ListItem disablePadding sx={isSelected ? {backgroundColor: item.color} : undefined}>
    <ListItemButton dense onClick={() => onSelect(id)}>
      <ListItemIcon>
        {isSelected ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon sx={{color: item.color}}/>}
      </ListItemIcon>
      <ListItemText>{item.title}</ListItemText>
    </ListItemButton>
  </ListItem>
}

export default PickerItem
