import React from 'react';
import { ScrollView, Image } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
} from 'native-base';
import { AppHeader } from '../../components';
import thumbnail from '../../assets/images/sunday.png';

const EventPost1 = () => {
  return (
    <Container>
      <AppHeader
        title={'이벤트/업데이트'}
        subtitle={'Updated 00-00-00'}
        icon={null}
      />
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{'이번주 썬데이 메이플'}</Text>
              <Text note>{''}</Text>
            </Body>
          </Left>
        </CardItem>
        <ScrollView>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://ssl.nx.com/s2/game/maplestory/renewal/event/board/2020/0624/event_0624_F0C2F83EFD2AB326.jpg',
              }}
              style={{ height: 600, flex: 1, marginBottom: 200 }}
              resizeMode={'contain'}
            />
          </CardItem>
        </ScrollView>
      </Card>
    </Container>
  );
};

export default EventPost1;
