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
import symbol from '../assets/images/vj-symbol.png';

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
      <Card>
        <CardItem header bordered>
          <Text>일일퀘스트 - 심볼</Text>
        </CardItem>
        <CardItem bordered>
          <Thumbnail
            style={{ marginLeft: 30, marginRight: 10 }}
            source={symbol}
          />
          <Text>소멸의 여로</Text>
          <Right>
            <Ionicons name={'checkmark-circle-outline'} size={20} />
          </Right>
        </CardItem>
      </Card>
    </Container>
  );
};

export default DailyQuestPage;
