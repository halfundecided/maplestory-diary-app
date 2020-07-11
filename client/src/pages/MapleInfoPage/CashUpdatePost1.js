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
import thumbnail from '../../assets/images/royalface.png';

const CashUpdatePost1 = () => {
  return (
    <Container>
      <AppHeader
        title={'캐시샵 업데이트'}
        subtitle={'Updated 00-00-00'}
        icon={null}
      />
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{'로얄 헤어/성형외과 쿠폰'}</Text>
              <Text note>{'6월 18일 업데이트'}</Text>
            </Body>
          </Left>
        </CardItem>
        <ScrollView>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://ssl.nx.com/s2/game/maplestory/renewal/event/board/2020/0616/event_0616_04EFD0D88683806B.jpg',
              }}
              style={{ height: 2000, flex: 1, marginBottom: 200 }}
              resizeMode={'contain'}
            />
          </CardItem>
        </ScrollView>
      </Card>
    </Container>
  );
};

export default CashUpdatePost1;
