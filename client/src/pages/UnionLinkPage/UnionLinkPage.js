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
import { AppHeader } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UnionLinkPage = () => {
  return (
    <Container>
      <AppHeader
        title={'유니온/링크 캐릭터'}
        subtitle={'🕹캐릭터 관리🕹'}
        icon={'ellipsis-vertical-outline'}
      />
    </Container>
  );
};

export default UnionLinkPage;
