import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import styles from '../styles/PageStylesheet';

const CreditForm = ({navigation, route}) => {
  const [plafon, setPlafon] = useState<number>(0);
  const [tenor, setTenor] = useState<number>(0);

  const {itemId, formType, plafonParam, tenorParam} = route.params;

  useEffect(() => {
    const getItemDetail = () => {
      setPlafon(plafonParam ?? 0);
      setTenor(tenorParam ?? 0);
    };
    if (formType === 'UPDATE' && itemId) {
      getItemDetail();
    }
    console.log('ami');
  }, [formType, itemId, tenorParam, plafonParam]);

  const submitHandler = () => {
    fetch(
      !itemId
        ? 'https://test1.kopelindo.co.id/api/pengajuan/create'
        : 'https://test1.kopelindo.co.id/api/pengajuan/update/' + itemId,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          plafon: plafon,
          tenor: tenor,
        }),
      },
    ).then(() => navigation.navigate('Home'));
  };

  return (
    <View style={styles.pageContainer}>
      <Card style={styles.cardContainer}>
        <Title style={styles.titleStyle}>
          {formType === 'UPDATE' ? 'Update Kredit' : 'Tambah Kredit'}
        </Title>

        <Text>Plafon</Text>
        <TextInput
          onChangeText={e => setPlafon(Number(e.replace(/[^0-9]/g, '')))}
          value={String(plafon)}
          style={styles.usernameStyle}
          placeholder="Plafon"
          keyboardType="number-pad"
        />

        <Text>Tenor (dalam tahun)</Text>
        <TextInput
          onChangeText={e => setTenor(Number(e.replace(/[^0-9]/g, '')))}
          value={String(tenor)}
          style={styles.usernameStyle}
          placeholder="Tenor"
          keyboardType="number-pad"
        />

        <Button onPress={submitHandler} style={styles.buttonStyle}>
          <Text>{formType === 'UPDATE' ? 'Ubah' : 'Tambah'}</Text>
        </Button>
      </Card>
    </View>
  );
};

export default CreditForm;
