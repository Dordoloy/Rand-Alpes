import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HikeCard from '../../components/HikeCard/HikeCard';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

function HomeView({navigation}) {
  const openMoreInfo = () => {
    console.log('test');
    navigation.navigate('MoreInfo');
  };

  const renderItem = ({item}) => (
    <HikeCard
      onPress={openMoreInfo}
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
    <View>
      <HeaderBar />
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
