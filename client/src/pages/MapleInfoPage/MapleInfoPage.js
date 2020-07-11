import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Card,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import { AppHeader } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import eventImage from '../../assets/images/event.png';

const eventList = [
  {
    num: 3,
    title: '이번주 썬데이 메이플',
    subtitle: '2020년 7월 12일 오전 0시 ~ 오후 1시 59분',
  },
  {
    num: 2,
    title: '버닝월드/테라버닝',
    subtitle: 'AWAKE 테라버닝 플러스',
  },
  {
    num: 1,
    title: '선인의 보물',
    subtitle: 'AWAKE',
  },
];

const cashUpdateList = [
  {
    num: 3,
    title: '초이스 헤어/성형',
    subtitle: '7월 9일',
  },
  {
    num: 2,
    title: '로얄스타일 쿠폰',
    subtitle: '87기 스페셜 라벨: 산호의 기억',
  },
  {
    num: 1,
    title: '로얄 헤어/성형',
    subtitle: '6월 18일',
  },
];

const infoList = [
  {
    num: 1,
    title: '직업별 스킬트리',
    subtitle: '직업별 스킬트리/하이퍼스킬 간단히 한눈에 보기',
  },
  {
    num: 2,
    title: '어빌리티',
    subtitle: '직업별 어빌리티 모음',
  },
  {
    num: 3,
    title: '링크/유니온',
    subtitle: '직업별 링크/유니온 효과 정리',
  },
];

const MapleInfoPage = () => {
  return (
    <Container>
      <AppHeader
        title={'최신 정보'}
        subtitle={'📕메린이 백과사전📕'}
        icon={'ellipsis-vertical-outline'}
      />
      <ScrollView>
        <Card>
          <List>
            <ListItem itemHeader first>
              <Text>이벤트/업데이트</Text>
            </ListItem>
            {eventList.map((event) => (
              <ListItem thumbnail key={event.title}>
                <Left>
                  <Thumbnail square source={eventImage} />
                </Left>
                <Body>
                  <Text>{event.title}</Text>
                  <Text note numberOfLines={1}>
                    {event.subtitle}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Ionicons name={'chevron-forward-outline'} size={20} />
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card>
          <List>
            <ListItem itemHeader first>
              <Text>캐시샵 업데이트</Text>
            </ListItem>
            {cashUpdateList.map((event) => (
              <ListItem thumbnail key={event.title}>
                <Left>
                  <Thumbnail square source={eventImage} />
                </Left>
                <Body>
                  <Text>{event.title}</Text>
                  <Text note numberOfLines={1}>
                    {event.subtitle}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Ionicons name={'chevron-forward-outline'} size={20} />
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Card>
        <Card>
          <List>
            <ListItem itemHeader first>
              <Text>메린이를 위한 꿀팁 모음</Text>
            </ListItem>
            {infoList.map((event) => (
              <ListItem thumbnail key={event.title}>
                <Left>
                  <Thumbnail square source={eventImage} />
                </Left>
                <Body>
                  <Text>{event.title}</Text>
                  <Text note numberOfLines={1}>
                    {event.subtitle}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Ionicons name={'chevron-forward-outline'} size={20} />
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default MapleInfoPage;
