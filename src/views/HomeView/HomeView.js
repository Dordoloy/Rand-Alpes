import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

const Item = ({libelle, massif, img, denivellee, duree, difficulte}) => (
  <View>
    <Card>
      <Card.Content>
        <Title>{libelle}</Title>
        <Paragraph>
          <Paragraph>{massif}</Paragraph> - <Paragraph>{denivellee}m</Paragraph>{' '}
          - <Paragraph>{duree}</Paragraph> - {console.log('d', {difficulte})}
          <Paragraph>
            {difficulte === '1/4'
              ? 'Facile'
              : difficulte === '2/4'
              ? 'Moyen'
              : difficulte === '3/4'
              ? 'Difficile'
              : 'Très difficile'}
          </Paragraph>
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: `${img}`}} />
      <Card.Actions>
        <Button>PLUS D'INFO</Button>
      </Card.Actions>
    </Card>
  </View>
);

function HomeView() {
  const renderItem = ({item}) => (
    <Item
      libelle={item.libelle}
      massif={item.massif.libelle}
      img={item.img}
      denivellee={item.denivellee}
      duree={item.duree}
      difficulte={item.difficulte}
    />
  );

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://entrepot.metropolegrenoble.fr/opendata/38185-GRE/Environnement/json/balade.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    console.log(isLoading);
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>RAND'APLES</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

export default HomeView;
