import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@mui/material'
import {
  Badge as BadgeIcon,
  Description as DescriptionIcon,
  EditNote as EditNoteIcon,
  Flag as FlagIcon,
  Money as MoneyIcon,
  Shield as ShieldIcon,
  ShowChart as ShowChartIcon,
  SportsScore as SportsScoreIcon,
} from '@mui/icons-material'
import React from 'react'
import {CardType} from './data'

const CardInfo: React.FC<{ card: CardType }> = ({card}) => {
  return <Card variant="outlined" sx={{m: 4, backgroundColor: `${card.color}66`}}>
    <CardHeader
      title={<>
        <BadgeIcon fontSize="small" sx={{mr: 1}}/>
        {card.title}
      </>}
      subheader="您選擇之夢想牌詳情內容，包含目標金額、起始資產、補充條件/配置、卡牌描述等。"
    />
    <CardContent>
      <List>
        <ListItem>
          <ListItemText primary={<>
            <SportsScoreIcon sx={{fontSize: 'small', mr: 1}}/>
            目標金額
          </>} secondary={`${card.goal.toLocaleString()} 元`}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={<>
            <FlagIcon sx={{fontSize: 'small', mr: 1}}/>
            起始資產
          </>} secondary={<List disablePadding>
            <ListItem dense sx={{py: 0}}>
              <MoneyIcon sx={{fontSize: 'small', mr: 1}}/>
              {card.startingMoney.toLocaleString()} 元
            </ListItem>
            {card.startingStock > 0 && <ListItem dense sx={{py: 0}}>
                <ShowChartIcon sx={{fontSize: 'small', mr: 1}}/>
                股票標記 {card.startingStock} 個
            </ListItem>}
            {card.startingInsurance > 0 && <ListItem dense sx={{py: 0}}>
                <ShieldIcon sx={{fontSize: 'small', mr: 1}}/>
                保險牌 {card.startingInsurance} 張
            </ListItem>}
          </List>}/>
        </ListItem>
        {card.additional && <ListItem>
            <ListItemText primary={<>
              <EditNoteIcon sx={{fontSize: 'small', mr: 1}}/>
              補充條件/配置
            </>} secondary={card.additional.text}/>
        </ListItem>}
        {card.description && <ListItem>
            <ListItemText primary={<>
              <DescriptionIcon sx={{fontSize: 'small', mr: 1}}/>
              卡牌描述
            </>} secondary={card.description}/>
        </ListItem>}
      </List>
    </CardContent>
  </Card>
}

export default CardInfo
