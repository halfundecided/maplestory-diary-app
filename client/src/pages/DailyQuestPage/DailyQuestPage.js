import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  Container,
  Text,
  Right,
  Card,
  CardItem,
  Thumbnail,
  Button,
} from 'native-base';
import { AppHeader } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import symbol1 from '../../assets/images/symbol-vj.png';
import symbol2 from '../../assets/images/symbol-chuchu.png';
import symbol3 from '../../assets/images/symbol-lachelein.png';
import symbol4 from '../../assets/images/symbol-arcana.png';
import symbol5 from '../../assets/images/symbol-morass.png';
import symbol6 from '../../assets/images/symbol-esfera.png';
import dailyGift from '../../assets/images/daily-gift.png';
import monsterPark from '../../assets/images/monster-park.png';
import mileage from '../../assets/images/mileage.png';
import zakum from '../../assets/images/zakum.png';
import magnus from '../../assets/images/magnus.png';
import hilla from '../../assets/images/hilla.png';
import horntail from '../../assets/images/horntail.png';
import kaun from '../../assets/images/kaun.png';
import papulatus from '../../assets/images/papulatus.png';
import arkarium from '../../assets/images/arkarium.png';
import pinkbean from '../../assets/images/pinkbean.png';
import vonleon from '../../assets/images/vonleon.png';
import rootabyss from '../../assets/images/rootabyss.png';
import ursus from '../../assets/images/ursus.png';
import event from '../../assets/images/event.png';
import eventcoin from '../../assets/images/eventcoin.png';
import pierre from '../../assets/images/pierre.png';
import queen from '../../assets/images/queen.png';
import vellum from '../../assets/images/vellum.png';
import vonbon from '../../assets/images/vonbon.png';
import damien from '../../assets/images/damien.png';
import cygnus from '../../assets/images/cygnus.png';
import lotus from '../../assets/images/lotus.png';
import lucid from '../../assets/images/lucid.png';
import will from '../../assets/images/will.png';

const eventContent = [
  {
    id: 10,
    title: '각성의 비급 등급업',
    img: event,
    num: 1,
  },
  {
    _id: 11,
    title: '이벤트 코인',
    img: eventcoin,
    num: 2,
  },
];
const arcaneSymbol = [
  {
    id: 20,
    title: '소멸의 여로',
    img: symbol1,
  },
  {
    id: 21,
    title: '츄츄 아일랜드',
    img: symbol2,
  },
  {
    id: 22,
    title: '레헬른',
    img: symbol3,
  },
  {
    id: 23,
    title: '아르카나',
    img: symbol4,
  },
  {
    id: 24,
    title: '모라스',
    img: symbol5,
  },
  {
    id: 25,
    title: '에스페라',
    img: symbol6,
  },
  {
    id: 26,
    title: '에르다 스펙트럼',
    img: symbol1,
  },
  {
    id: 27,
    title: '배고픈 무토',
    img: symbol2,
  },
  {
    id: 28,
    title: '드림 브레이커',
    img: symbol3,
  },
  {
    id: 29,
    title: '스피릿 세이비어',
    img: symbol4,
  },
];
const dailyContent = [
  {
    id: 30,
    title: '몬스터파크',
    img: monsterPark,
  },
  {
    id: 31,
    title: '데일리 기프트',
    img: dailyGift,
  },
  {
    id: 32,
    title: '마일리지',
    img: mileage,
  },
];
const dailyBoss = [
  {
    id: 40,
    title: '자쿰',
    img: zakum,
  },
  {
    id: 41,
    title: '매그너스',
    img: magnus,
  },
  {
    id: 42,
    title: '힐라',
    img: hilla,
  },
  {
    id: 43,
    title: '혼테일',
    img: horntail,
  },
  {
    id: 44,
    title: '카웅',
    img: kaun,
  },
  {
    id: 45,
    title: '파풀라투스',
    img: papulatus,
  },
  {
    id: 46,
    title: '아카이럼',
    img: arkarium,
  },
  {
    id: 47,
    title: '핑크빈',
    img: pinkbean,
  },
  {
    id: 48,
    title: '반 레온',
    img: vonleon,
  },
  {
    id: 49,
    title: '루타비스',
    img: rootabyss,
  },
  {
    id: 50,
    title: '우르스',
    img: ursus,
  },
];
const weeklyBoss = [
  {
    id: 60,
    title: '하드 힐라',
    img: hilla,
  },
  {
    id: 61,
    title: '카오스 핑크빈',
    img: pinkbean,
  },
  {
    id: 62,
    title: '카오스 자쿰',
    img: zakum,
  },
  {
    id: 63,
    title: '시그너스',
    img: cygnus,
  },
  {
    id: 64,
    title: '카오스 블러디퀸',
    img: queen,
  },
  {
    id: 65,
    title: '카오스 삐에르',
    img: pierre,
  },
  {
    id: 66,
    title: '카오스 반반',
    img: vonbon,
  },
  {
    id: 67,
    title: '카오스 벨룸',
    img: vellum,
  },
  {
    id: 68,
    title: '하드 매그너스',
    img: magnus,
  },
  {
    id: 69,
    title: '스우',
    img: lotus,
  },
  {
    id: 70,
    title: '데미안',
    img: damien,
  },
  {
    id: 71,
    title: '카오스 파풀라투스',
    img: papulatus,
  },
  {
    id: 72,
    title: '루시드',
    img: lucid,
  },
  {
    id: 73,
    title: '윌',
    img: will,
  },
];
const DailyQuestPage = () => {
  return (
    <Container>
      <AppHeader
        title={'데일리 퀘스트'}
        subtitle={'🍁오늘의 숙제 기록🍁'}
        icon={'person-outline'}
      />
      <ScrollView>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.listTitle}>AWAKE 코인이벤트 - 각성의 비급</Text>
          </CardItem>
          {eventContent.map((e) => (
            <TouchableOpacity key={e.id}>
              <CardItem bordered style={styles.cardItem}>
                <Thumbnail style={styles.thumbnail} source={e.img} square />
                <Text style={styles.text}>{e.title}</Text>
                <Right style={styles.right}>
                  <Ionicons name={'checkmark-circle-outline'} size={20} />
                </Right>
              </CardItem>
            </TouchableOpacity>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.listTitle}>일일퀘스트 - 아케인 심볼</Text>
          </CardItem>
          {arcaneSymbol.map((symbol) => (
            <TouchableOpacity key={symbol.id}>
              <CardItem bordered style={styles.cardItem}>
                <Thumbnail
                  style={styles.thumbnail}
                  source={symbol.img}
                  square
                />
                <Text style={styles.text}>{symbol.title}</Text>
                <Right style={styles.right}>
                  <Ionicons name={'checkmark-circle-outline'} size={20} />
                </Right>
              </CardItem>
            </TouchableOpacity>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.listTitle}>일일컨텐츠</Text>
          </CardItem>
          {dailyContent.map((content) => (
            <CardItem key={content.id} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={content.img} square />
              <Text style={styles.text}>{content.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.listTitle}>일일 보스</Text>
          </CardItem>
          {dailyBoss.map((boss) => (
            <CardItem key={boss.id} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={boss.img} square />
              <Text style={styles.text}>{boss.title}</Text>
              <Right style={styles.right}>
                <Ionicons name={'checkmark-circle-outline'} size={20} />
              </Right>
            </CardItem>
          ))}
        </Card>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.listTitle}>주간 보스</Text>
          </CardItem>
          {weeklyBoss.map((boss) => (
            <CardItem key={boss.id} bordered style={styles.cardItem}>
              <Thumbnail style={styles.thumbnail} source={boss.img} square />
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
  listTitle: {
    color: 'black',
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
