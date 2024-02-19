import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material'
import React from 'react'

export type PickerItemType = { [id: string]: { title: string, color?: string } }

const PickerItem: React.FC<{
  id: string,
  items: PickerItemType,
  onSelect: (cardId: string) => void,
  selected: boolean,
}> = (props) => {
  const {
    id,
    items,
    onSelect,
    selected,
  } = props

  const item = items[id]

  return <ListItem disablePadding sx={(selected && item.color) ? {backgroundColor: item.color} : undefined}>
    <ListItemButton dense onClick={() => onSelect(id)}>
      <ListItemIcon>
        {selected ? <RadioButtonCheckedIcon/> : <RadioButtonUncheckedIcon sx={{color: item.color || undefined}}/>}
      </ListItemIcon>
      <ListItemText>{item.title}</ListItemText>
    </ListItemButton>
  </ListItem>
}

export default PickerItem
