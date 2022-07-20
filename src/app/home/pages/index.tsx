import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import {Item} from '../entity';
import mockData from '../mocks/data';
import styles from '../styles/PageStylesheet';

const HomePage = ({navigation}) => {
  const [creditList, setCreditList] = useState<Item[]>([]);

  const listAllData = () => {
    const creditData: Item[] = [];
    fetch('https://test1.kopelindo.co.id/api/pengajuan/list', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        data.map((d: Item) => creditData.push(d));
        setCreditList(creditData);
      });

    setCreditList(mockData);
  };

  useEffect(() => {
    listAllData();

    return navigation.addListener('focus', () => {
      listAllData();
    });
  }, []);

  const removeHandler = (id: number | undefined) => {
    fetch('https://test1.kopelindo.co.id/api/pengajuan/delete/' + id, {
      method: 'DELETE',
    }).then(res => res.status === 200 && listAllData());
  };

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <Button
          style={styles.addButtonStyle}
          onPress={() =>
            navigation.navigate('CreditForm', {
              itemId: 0,
              formType: 'ADD',
              tenorParam: 0,
              plafonParam: 0,
            })
          }>
          <Text>Tambah Data</Text>
        </Button>
        {creditList.length !== 0 ? (
          creditList.map((item, index) => (
            <Card style={styles.itemCardStyle} key={index}>
              <Title>Plafon: Rp. {item.plafon}</Title>
              <Text style={styles.cardText}>Tenor: {item.tenor} Tahun</Text>

              <View style={styles.cardActionContainer}>
                <Button
                  style={styles.editCardButtonAction}
                  onPress={() =>
                    navigation.navigate('CreditForm', {
                      itemId: item.id,
                      formType: 'UPDATE',
                      tenorParam: item.tenor,
                      plafonParam: item.plafon,
                    })
                  }>
                  <Text>Edit</Text>
                </Button>
                <Button onPress={() => removeHandler(item?.id)}>
                  <Text>Hapus</Text>
                </Button>
              </View>
            </Card>
          ))
        ) : (
          <Text>Tidak ada data.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default HomePage;
