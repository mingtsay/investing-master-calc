import React, {useState} from 'react'
import './App.css'
import {Container} from '@mui/material'
import Picker from './Picker'
import CardInfo from './CardInfo'
import {cards, characterColors, characters} from './data'

function App() {
  const [selectedCard, setSelectedCard] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState('')
  const [selectedCharacterColor, setSelectedCharacterColor] = useState('')

  const isCardSelected = cards.hasOwnProperty(selectedCard)
  const isCharacterSelected = characters.hasOwnProperty(selectedCharacter)
  const isCharacterColorSelected = characterColors.hasOwnProperty(selectedCharacterColor)

  const onCardSelect: (cardId: string) => any = cardId => {
    setSelectedCard(cardId)
  }

  const onCharacterSelect: (characterId: string) => any = characterId => {
    setSelectedCharacter(characterId)
  }

  const onCharacterColorSelect: (characterColorId: string) => any = characterColorId => {
    setSelectedCharacterColor(characterColorId)
  }

  return <Container maxWidth="xs">
    <Picker
      isSelected={isCharacterSelected}
      items={characters}
      onSelect={onCharacterSelect}
      selected={selectedCharacter}
      subheader="請在此選擇您的遊戲角色，或點選「隨機選擇」由系統自動為您選擇。"
      title={isCharacterSelected ? `角色名稱：${characters[selectedCharacter].title}` : '選擇遊戲角色'}
    />
    <Picker
      isSelected={isCharacterColorSelected}
      items={characterColors}
      onSelect={onCharacterColorSelect}
      selected={selectedCharacterColor}
      subheader="由於本桌遊出貨時，各個角色顏色為隨機出貨，因此請您從這四種顏色中挑選出您的角色顏色。"
      title={isCharacterColorSelected ? `角色顏色：${characterColors[selectedCharacterColor].title}` : '選擇遊戲角色顏色'}
    />
    <Picker
      isSelected={isCardSelected}
      items={cards}
      onSelect={onCardSelect}
      selected={selectedCard}
      subheader="請在此選擇您抽中的夢想牌，或點選「隨機選擇」由系統自動為您選擇。"
      title="選擇夢想牌"
    />
    {isCardSelected && <CardInfo card={cards[selectedCard]}/>}
  </Container>
}

export default App
