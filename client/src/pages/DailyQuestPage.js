import * as React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Button,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import symbol1 from '../assets/images/symbol-vj.png';
import symbol2 from '../assets/images/symbol-chuchu.png';
import symbol3 from '../assets/images/symbol-lachelein.png';
import symbol4 from '../assets/images/symbol-arcana.png';
import symbol5 from '../assets/images/symbol-morass.png';
import symbol6 from '../assets/images/symbol-esfera.png';

const arcaneSymbol = [
  {
    title: '소멸의 여로',
    img: symbol1,
  },
  {
    title: '츄츄 아일랜드',
    img: symbol2,
  },
  {
    title: '레헬른',
    img: symbol3,
  },
  {
    title: '아르카나',
    img: symbol4,
  },
  {
    title: '모라스',
    img: symbol5,
  },
  {
    title: '에스페라',
    img: symbol6,
  },
  {
    title: '에르다 스펙트럼',
    img: symbol1,
  },
  {
    title: '배고픈 무토',
    img: symbol2,
  },
  {
    title: '드림 브레이커',
    img: symbol3,
  },
  {
    title: '스피릿 세이비어',
    img: symbol4,
  },
];
const DailyQuestPage = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>{'데일리 퀘스트'}</Title>
          <Subtitle>{'🍁오늘의 숙제 기록🍁'}</Subtitle>
        </Body>
        <Right>
          <Button transparent>
            <Ionicons name={'person-outline'} size={20} />
          </Button>
        </Right>
      </Header>
      <Card style={{ marginLeft: 5, marginRight: 5 }}>
        <CardItem header bordered>
          <Text>일일퀘스트 - 아케인 심볼</Text>
        </CardItem>
        {arcaneSymbol.map((symbol) => (
          <CardItem bordered style={{ height: 55 }}>
            <Thumbnail
              style={{
                marginLeft: 30,
                marginRight: 10,
                width: 40,
                height: 40,
              }}
              source={symbol.img}
            />
            <Text style={{ flex: 1 }}>{symbol.title}</Text>
            <Right style={{ marginRight: 30 }}>
              <Ionicons name={'checkmark-circle-outline'} size={20} />
            </Right>
          </CardItem>
        ))}
      </Card>
    </Container>
  );
};

export default DailyQuestPage;
