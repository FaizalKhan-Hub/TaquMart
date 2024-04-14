// App.js
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18n from './src/app/localization/locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PrimaryButon} from './src/app/components';

const App = () => {
  const {t} = useTranslation();
  useEffect(() => {
    async function fetchData() {
      const lng = await AsyncStorage.getItem('language-Selected');
      return i18n.changeLanguage(JSON.parse(lng));
    }
    fetchData();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <View>
        <Text>{t('TaquMart')}</Text>
      </View>
    </I18nextProvider>
  );
};

export default App;