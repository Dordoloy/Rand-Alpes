import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HikeCard from '../../components/HikeCard/HikeCard';
import {Appbar} from 'react-native-paper';

function HomeView() {
  const renderItem = ({item}) => (
    <HikeCard
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
    <View style={{flex: 1, padding: 20}}>
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
