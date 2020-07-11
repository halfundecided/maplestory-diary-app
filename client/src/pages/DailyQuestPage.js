import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
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
import dailyGift from '../assets/images/daily-gift.png';
import monsterPark from '../assets/images/monster-park.png';
import mileage from '../assets/images/mileage.png';
import zakum from '../assets/images/zakum.png';
import magnus from '../assets/images/magnus.png';
import hilla from '../assets/images/hilla.png';
import horntail from '../assets/images/horntail.png';
import kaun from '../assets/images/kaun.png';
import papulatus from '../assets/images/papulatus.png';
import arkarium from '../assets/images/arkarium.png';
import pinkbean from '../assets/images/pinkbean.png';
import vonleon from '../assets/images/vonleon.png';
import rootabyss from '../assets/images/rootabyss.png';
import ursus from '../assets/images/ursus.png';
import event from '../assets/images/event.png';
import eventcoin from '../assets/images/eventcoin.png';

const eventContent = [
  {
    title: '각성의 비급 등급업',
    img: event,
  },
  {
    title: '이벤트 코인',
    img: eventcoin,
  },
];
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
const dailyContent = [
  {
    title: '몬스터파크',
    img: monsterPark,
  },
  {
    title: '데일리 기프트',
    img: dailyGift,
  },
  {
    title: '마일리지',
    img: mileage,
  },
];
const dailyBoss = [
  {
    title: '자쿰',
    img: zakum,
  },
  {
    title: '매그너스',
    img: magnus,
  },
  {
    title: '힐라',
    img: hilla,
  },
  {
    title: '혼테일',
    img: horntail,
  },
  {
    title: '카웅',
    img: kaun,
  },
  {
    title: '파풀라투스',
    img: papulatus,
  },
  {
    title: '아카이럼',
    img: arkarium,
  },
  {
    title: '핑크빈',
    img: pinkbean,
  },
  {
    title: '반 레온',
    img: vonleon,
  },
  {
    title: '루타비스',
    img: rootabyss,
  },
  {
    title: '우르스',
    img: ursus,
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
      <ScrollView>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>AWAKE 코인이벤트 - 각성의 비급</Text>
          </CardItem>
          {eventContent.map((ev) => (
            <CardItem key={ev.title} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={ev.img} />
              <Text style={styles.text}>{ev.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>일일퀘스트 - 아케인 심볼</Text>
          </CardItem>
          {arcaneSymbol.map((symbol) => (
            <CardItem key={symbol.title} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={symbol.img} />
              <Text style={styles.text}>{symbol.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>일일컨텐츠</Text>
          </CardItem>
          {dailyContent.map((content) => (
            <CardItem key={content.title} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={content.img} />
              <Text style={styles.text}>{content.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text>일일 보스</Text>
          </CardItem>
          {dailyBoss.map((boss) => (
            <CardItem key={boss.title} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={boss.img} />
              <Text style={styles.text}>{boss.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 5,
    marginRight: 5,
  },
  cardItem: {
    height: 55,
  },
  thumbnail: {
    marginLeft: 30,
    marginRight: 10,
    width: 40,
    height: 40,
  },
  text: {
    flex: 1,
  },
  right: {
    marginRight: 30,
  },
});

export default DailyQuestPage;
