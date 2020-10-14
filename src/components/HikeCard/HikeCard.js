import {View} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
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
  <View style={{marginBottom: 15}}>
    <Card>
      <Card.Content>
        <Title>{props.libelle}</Title>
        <Paragraph>
          <Paragraph>{props.massif}</Paragraph> -{' '}
          <Paragraph>{props.denivellee}m</Paragraph> -{' '}
          <Paragraph>{props.duree}</Paragraph> -
          <Paragraph>
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
        <Button>PLUS D'INFO</Button>
      </Card.Actions>
    </Card>
  </View>
);

export default HikeCard;
