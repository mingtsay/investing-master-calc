type CardAdditional<Type = string> = {
  type: Type,
  text: string,
  amount: number,
  maxAmount?: number,
}

type CardAdditionalCarLoan = CardAdditional<'carLoan'>

type CardAdditionalStudyTour = CardAdditional<'studyTourCard'>

type CardAdditionalConnections = CardAdditional<'connectionsCard'>

type CardAdditionalEstate = CardAdditional<'estate'>

type CardAdditionalStock = CardAdditional<'stock'>

type CardAdditionalType =
  CardAdditionalCarLoan
  | CardAdditionalStudyTour
  | CardAdditionalConnections
  | CardAdditionalEstate
  | CardAdditionalStock

export type Card = {
  color: string,
  title: string,
  goal: number,
  startingMoney: number,
  startingStock: number,
  startingInsurance: number,
  additional?: CardAdditionalType,
  description?: string,
}

export type Cards = { [index: number]: Card };

const cards: Cards = {
  69: {
    color: '#54aff8',
    title: '帶父母出國旅遊',
    goal: 23000,
    startingMoney: 2500,
    startingStock: 1,
    startingInsurance: 0,
  },
  70: {
    color: '#d088e3',
    title: '存到結婚基金',
    goal: 24000,
    startingMoney: 1000,
    startingStock: 0,
    startingInsurance: 2,
    additional: {
      type: 'carLoan',
      text: '只要你持有汽車貸款牌，目標金額可減少 1,500 元。',
      amount: 1500,
    },
  },
  71: {
    color: '#a071ea',
    title: '加盟開設自己的店',
    goal: 25500,
    startingMoney: 1000,
    startingStock: 1,
    startingInsurance: 1,
    additional: {
      type: 'stock',
      text: '你每持有一張股票，目標金額可減少 500 元，最多扣減 5,000 元',
      amount: 500,
      maxAmount: 5000,
    },
    description: '投資市場的動態往往反應消費者的喜好變化，讓你發現有潛力的加盟事業。',
  },
  72: {
    color: '#7f8bf7',
    title: '出國遊學',
    goal: 25000,
    startingMoney: 4000,
    startingStock: 0,
    startingInsurance: 0,
    additional: {
      type: 'studyTourCard',
      text: '拿取 3 張遊學考察牌放在面前，A 面朝上。',
      amount: 800,
    },
    description: '增加出國的經驗，可以讓你深入了解不同國家的風土民情，也讓你更清楚想要學習哪個國家的文化。',
  },
  73: {
    color: '#80b780',
    title: '存到買房頭期款',
    goal: 27000,
    startingMoney: 2500,
    startingStock: 1,
    startingInsurance: 0,
    additional: {
      type: 'estate',
      text: '你每放置一棟房屋在地產投資區，目標金額可減少 1,000 元。',
      amount: 1000,
    },
    description: '投資房地產讓你更了解地產的相關知識，進而挖掘到自己喜歡的物件。',
  },
  74: {
    color: '#f0b527',
    title: '存到創業啟動資金',
    goal: 26500,
    startingMoney: 1000,
    startingStock: 2,
    startingInsurance: 0,
    additional: {
      type: 'connectionsCard',
      text: '拿取 3 張創業人脈牌放在面前，A 面朝上。',
      amount: 1500,
    },
    description: '在理財課程的場合，更容易遇到對投資創業有興趣的人脈，拓展生活圈，找到共同築夢的夥伴。',
  },
}
export default cards

export const cardIds = Object.keys(cards).map(cardIdString => parseInt(cardIdString))
