import * as React from 'react';
import {Appbar} from 'react-native-paper';

const HeaderBar = () => {
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_handleSearch} />
      <Appbar.Content title="RAND'ALPES" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default HeaderBar;
