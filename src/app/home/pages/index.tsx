import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import styles from '../styles/PageStylesheet';

const HomePage = ({navigation}) => {
  const [creditList, setCreditList] = useState();

  useEffect(() => {
    const creditData = [];
    fetch('https://test1.kopelindo.co.id/api/pengajuan/list', {
      method: 'GET',
    })
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => {
        data.map(d => creditData.push(d));
        setCreditList(creditData);
      });
  }, []);

  return (
    <View style={styles.pageContainer}>
      {creditList.map(e => (
        <Text>{e}</Text>
      ))}
    </View>
  );
};

export default HomePage;
