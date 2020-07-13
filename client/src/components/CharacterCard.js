import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text, Button, Left, Right } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CharacterCard = ({ name, imageSrc }) => {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri: imageSrc,
          }}
          style={{ height: 140, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Button
            iconLeft
            small
            warning
            style={{ marginLeft: 0, alignSelf: 'center' }}>
            <Ionicons
              name="heart-outline"
              style={{ paddingLeft: 10, color: 'white' }}
            />
            <Text>{name}</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CharacterCard;
