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
import { InfoChoice } from '../../assets/images';

const CashUpdatePost3 = () => {
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
            <Thumbnail source={InfoChoice} />
            <Body>
              <Text>{'초이스 헤어/성형외과 쿠폰'}</Text>
              <Text note>{'7월 9일 업데이트'}</Text>
            </Body>
          </Left>
        </CardItem>
        <ScrollView>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://lwi.nexon.com/maplestory/2020/0709_board/0709_choice398ugjldg.jpg',
              }}
              style={{ height: 3000, flex: 1, marginBottom: 200 }}
              resizeMode={'contain'}
            />
          </CardItem>
        </ScrollView>
      </Card>
    </Container>
  );
};

export default CashUpdatePost3;
