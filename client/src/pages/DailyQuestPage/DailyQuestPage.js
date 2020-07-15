import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Text, Right, Card, CardItem, Thumbnail } from 'native-base';
import { AppHeader } from '../../components';
import {
  EventImage1,
  EventImage2,
  Symbol1,
  Symbol2,
  Symbol3,
  Symbol4,
  Symbol5,
  Symbol6,
  MonsterPark,
  DailyGift,
  Mileage,
  BossZakum,
  BossMagnus,
  BossHilla,
  BossHorntail,
  BossKaung,
  BossPapulatus,
  BossArkarium,
  BossPinkBean,
  BossVonLeon,
  BossRootAbyss,
  BossUrsus,
  BossCygnus,
  BossQueen,
  BossPierre,
  BossVonbon,
  BossVellum,
  BossLotus,
  BossDamien,
  BossLucid,
  BossWill,
} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

const eventContent = [
  {
    id: 10,
    title: '각성의 비급 등급업',
    img: EventImage1,
    num: 1,
  },
  {
    _id: 11,
    title: '이벤트 코인',
    img: EventImage2,
    num: 2,
  },
];
const arcaneSymbol = [
  {
    id: 20,
    title: '소멸의 여로',
    img: Symbol1,
  },
  {
    id: 21,
    title: '츄츄 아일랜드',
    img: Symbol2,
  },
  {
    id: 22,
    title: '레헬른',
    img: Symbol3,
  },
  {
    id: 23,
    title: '아르카나',
    img: Symbol4,
  },
  {
    id: 24,
    title: '모라스',
    img: Symbol5,
  },
  {
    id: 25,
    title: '에스페라',
    img: Symbol6,
  },
  {
    id: 26,
    title: '에르다 스펙트럼',
    img: Symbol1,
  },
  {
    id: 27,
    title: '배고픈 무토',
    img: Symbol2,
  },
  {
    id: 28,
    title: '드림 브레이커',
    img: Symbol3,
  },
  {
    id: 29,
    title: '스피릿 세이비어',
    img: Symbol4,
  },
];
const dailyContent = [
  {
    id: 30,
    title: '몬스터파크',
    img: MonsterPark,
  },
  {
    id: 31,
    title: '데일리 기프트',
    img: DailyGift,
  },
  {
    id: 32,
    title: '마일리지',
    img: Mileage,
  },
];
const dailyBoss = [
  {
    id: 40,
    title: '자쿰',
    img: BossZakum,
  },
  {
    id: 41,
    title: '매그너스',
    img: BossMagnus,
  },
  {
    id: 42,
    title: '힐라',
    img: BossHilla,
  },
  {
    id: 43,
    title: '혼테일',
    img: BossHorntail,
  },
  {
    id: 44,
    title: '카웅',
    img: BossKaung,
  },
  {
    id: 45,
    title: '파풀라투스',
    img: BossPapulatus,
  },
  {
    id: 46,
    title: '아카이럼',
    img: BossArkarium,
  },
  {
    id: 47,
    title: '핑크빈',
    img: BossPinkBean,
  },
  {
    id: 48,
    title: '반 레온',
    img: BossVonLeon,
  },
  {
    id: 49,
    title: '루타비스',
    img: BossRootAbyss,
  },
  {
    id: 50,
    title: '우르스',
    img: BossUrsus,
  },
];
const weeklyBoss = [
  {
    id: 60,
    title: '하드 힐라',
    img: BossHilla,
  },
  {
    id: 61,
    title: '카오스 핑크빈',
    img: BossPinkBean,
  },
  {
    id: 62,
    title: '카오스 자쿰',
    img: BossZakum,
  },
  {
    id: 63,
    title: '시그너스',
    img: BossCygnus,
  },
  {
    id: 64,
    title: '카오스 블러디퀸',
    img: BossQueen,
  },
  {
    id: 65,
    title: '카오스 삐에르',
    img: BossPierre,
  },
  {
    id: 66,
    title: '카오스 반반',
    img: BossVonbon,
  },
  {
    id: 67,
    title: '카오스 벨룸',
    img: BossVellum,
  },
  {
    id: 68,
    title: '하드 매그너스',
    img: BossMagnus,
  },
  {
    id: 69,
    title: '스우',
    img: BossLotus,
  },
  {
    id: 70,
    title: '데미안',
    img: BossDamien,
  },
  {
    id: 71,
    title: '카오스 파풀라투스',
    img: BossPapulatus,
  },
  {
    id: 72,
    title: '루시드',
    img: BossLucid,
  },
  {
    id: 73,
    title: '윌',
    img: BossWill,
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
