import * as React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Subtitle,
  Right,
  Button,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AnalysisPage = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>{'통계'}</Title>
          <Subtitle>{'📈숙제 한눈에 보기📉'}</Subtitle>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default AnalysisPage;
