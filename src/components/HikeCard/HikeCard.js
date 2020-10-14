import {View} from 'react-native';
import {Button, Card, Paragraph, Title, Avatar} from 'react-native-paper';
import React from 'react';

type Props = {
  onPress: () => any,
  libelle: string,
  massif: string,
  img: string,
  denivellee: number,
  duree: number,
  difficulte: string,
};

const HikeCard: React.FC<Props> = (props) => (
  <View style={{padding: 20, paddingBottom: 10}}>
    <Card onPress={props.onPress}>
      <Card.Content>
        <Title>{props.libelle}</Title>
        <Paragraph>
          <Paragraph>
            <Avatar.Icon size={15} icon="flag-triangle" /> {props.massif}
          </Paragraph>{' '}
          <Paragraph>
            {' '}
            <Avatar.Icon size={15} icon="trending-up" /> {props.denivellee}m
          </Paragraph>{' '}
          <Paragraph>
            {' '}
            <Avatar.Icon size={15} icon="av-timer" /> {props.duree}
          </Paragraph>{' '}
          <Paragraph>
            {' '}
            <Avatar.Icon size={15} icon="grave-stone" />{' '}
            {props.difficulte === '1/4'
              ? 'Facile'
              : props.difficulte === '2/4'
              ? 'Moyen'
              : props.difficulte === '3/4'
              ? 'Difficile'
              : props.difficulte === '4/4'
              ? 'Très Difficile'
              : props.difficulte}
          </Paragraph>
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: `${props.img}`}} />
      <Card.Actions>
        <Button onPress={props.onPress}>PLUS D'INFO</Button>
      </Card.Actions>
    </Card>
  </View>
);

export default HikeCard;
