import React, { useState } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

// to pass selected state later to UnionLinkPage
// https://stackoverflow.com/questions/58440442/passing-data-from-child-to-parents-react-hooks

const CharacterCard = ({ name, imageSrc }) => {
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(!selected);
  };
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
            onPress={handleSelected}
            iconLeft
            small
            warning
            style={{ marginLeft: 0, alignSelf: 'center' }}>
            {selected ? (
              <Ionicons
                name="heart-outline"
                style={{ paddingLeft: 10, color: 'white' }}
              />
            ) : (
              <Ionicons
                name="heart"
                style={{ paddingLeft: 10, color: 'white' }}
              />
            )}
            <Text>{name}</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CharacterCard;
