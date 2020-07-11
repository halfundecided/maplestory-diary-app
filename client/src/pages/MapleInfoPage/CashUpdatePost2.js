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
import thumbnail from '../../assets/images/royalstyle.png';

const CashUpdatePost2 = () => {
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
              <Text>{'로얄스타일 쿠폰&마스터피스'}</Text>
              <Text note>{'87기 스페셜 라벨: 산호의 기억'}</Text>
            </Body>
          </Left>
        </CardItem>
        <ScrollView>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://ssl.nx.com/s2/game/maplestory/renewal/event/board/2020/0623/event_0623_D91BD00100DADD60.jpg',
              }}
              style={{ height: 6000, flex: 1, marginBottom: 200 }}
              resizeMode={'contain'}
            />
          </CardItem>
        </ScrollView>
      </Card>
    </Container>
  );
};

export default CashUpdatePost2;
