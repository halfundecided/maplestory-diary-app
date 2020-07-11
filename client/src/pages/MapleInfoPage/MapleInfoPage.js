import * as React from 'react';
import { ScrollView } from 'react-native';
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
  Text,
} from 'native-base';
import { AppHeader } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import eventImage from '../../assets/images/event.png';
import burning from '../../assets/images/burning.png';
import sunday from '../../assets/images/sunday.png';
import royalface from '../../assets/images/royalface.png';
import royalstyle from '../../assets/images/royalstyle.png';
import choicehair from '../../assets/images/choicehair.png';
import skill from '../../assets/images/skill.png';
import ability from '../../assets/images/ability.png';
import linkunion from '../../assets/images/linkunion.png';

const eventList = [
  {
    num: 3,
    title: '이번주 썬데이 메이플',
    subtitle: '2020년 7월 12일 오전 0시 ~ 오후 1시 59분',
    thumbnail: sunday,
  },
  {
    num: 2,
    title: 'AWAKE 각성의 시간',
    subtitle: '각성의 비급, 선인의 보물, 코인상점',
    thumbnail: eventImage,
  },
  {
    num: 1,
    title: 'AWAKE 버닝',
    subtitle: '버닝월드, 테라버닝 플러스',
    thumbnail: burning,
  },
];

const cashUpdateList = [
  {
    num: 3,
    title: '초이스 헤어/성형외과 쿠폰',
    subtitle: '7월 9일 업데이트',
    thumbnail: choicehair,
    subpage: 'CashUpdatePost3',
  },
  {
    num: 2,
    title: '로얄스타일 쿠폰&마스터피스',
    subtitle: '87기 스페셜 라벨: 산호의 기억',
    thumbnail: royalstyle,
    subpage: 'CashUpdatePost2',
  },
  {
    num: 1,
    title: '로얄 헤어/성형외과 쿠폰',
    subtitle: '6월 18일 업데이트',
    thumbnail: royalface,
    subpage: 'CashUpdatePost1',
  },
];

const infoList = [
  {
    num: 1,
    title: '직업별 스킬트리',
    subtitle: '직업별 스킬트리/하이퍼스킬 간단히 한눈에 보기',
    thumbnail: skill,
  },
  {
    num: 2,
    title: '어빌리티',
    subtitle: '직업별 어빌리티 모음',
    thumbnail: ability,
  },
  {
    num: 3,
    title: '링크/유니온',
    subtitle: '직업별 링크/유니온 효과 정리',
    thumbnail: linkunion,
  },
];

const MapleInfoPage = ({ navigation }) => {
  return (
    <>
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
                    <Thumbnail square small source={event.thumbnail} />
                  </Left>
                  <Body>
                    <Text>{event.title}</Text>
                    <Text note numberOfLines={1}>
                      {event.subtitle}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => navigation.navigate('EventPost1')}>
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
              {cashUpdateList.map((update) => (
                <ListItem thumbnail key={update.title}>
                  <Left>
                    <Thumbnail square small source={update.thumbnail} />
                  </Left>
                  <Body>
                    <Text>{update.title}</Text>
                    <Text note numberOfLines={1}>
                      {update.subtitle}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      onPress={() => navigation.navigate(update.subpage)}>
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
              {infoList.map((post) => (
                <ListItem thumbnail key={post.title}>
                  <Left>
                    <Thumbnail square small source={post.thumbnail} />
                  </Left>
                  <Body>
                    <Text>{post.title}</Text>
                    <Text note numberOfLines={1}>
                      {post.subtitle}
                    </Text>
                  </Body>
                  <Right>
                    {/* <Button transparent>
                    <Ionicons name={'chevron-forward-outline'} size={20} />
                  </Button> */}
                  </Right>
                </ListItem>
              ))}
            </List>
          </Card>
        </ScrollView>
      </Container>
    </>
  );
};

export default MapleInfoPage;
