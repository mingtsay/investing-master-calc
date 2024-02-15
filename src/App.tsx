import React, {useState} from 'react'
import './App.css'
import {Container} from '@mui/material'
import cards, {cardIds} from './cards'
import Picker from './Picker'
import CardInfo from './CardInfo'
import characters from './characters'

function App() {
  const [selectedCard, setSelectedCard] = useState(0)
  const [selectedCharacter, setSelectedCharacter] = useState(0)

  const isCardSelected = cardIds.includes(selectedCard)
  const isCharacterSelected = cardIds.includes(selectedCharacter)

  const onCardSelect: (cardId: number) => any = cardId => {
    setSelectedCard(cardId)
  }

  const onCharacterSelect: (characterId: number) => any = characterId => {
    setSelectedCharacter(characterId)
  }

  const card = cards[selectedCard]
  // const character = characters[selectedCharacter]

  return <Container maxWidth="xs">
    <Picker
      isSelected={isCardSelected}
      items={cards}
      onSelect={onCardSelect}
      selected={selectedCard}
      subheader="請在此選擇您抽中的夢想牌，或點選「隨機選擇」由系統自動為您選擇。"
      title="選擇夢想牌"
    />
    {isCardSelected && <CardInfo card={card}/>}
    <Picker
      isSelected={isCharacterSelected}
      items={characters}
      onSelect={onCharacterSelect}
      selected={selectedCharacter}
      subheader="請在此選擇您的遊戲角色，或點選「隨機選擇」由系統自動為您選擇。"
      title="選擇遊戲角色"
    />
  </Container>
}

export default App
