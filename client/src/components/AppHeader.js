import * as React from 'react';
import {
  Header,
  Left,
  Body,
  Title,
  Subtitle,
  Right,
  Button,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeader = ({ title, subtitle, icon }) => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Body>
      <Right>
        <Button transparent>
          <Ionicons name={icon} size={20} />
        </Button>
      </Right>
    </Header>
  );
};

export default AppHeader;
