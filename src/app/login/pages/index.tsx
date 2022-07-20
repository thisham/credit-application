import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Button, Card, Text, Title} from 'react-native-paper';
import styles from '../styles/PageStylesheet';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = () => {
    fetch('https://test1.kopelindo.co.id/api/login', {
      method: 'POST',
      body: {
        username: username,
        password: password,
      },
    })
      .then(res => res.json())
      .then(data => navigation.navigate('Home'));
  };

  return (
    <View style={styles.pageContainer}>
      <Card style={styles.cardContainer}>
        <Title style={styles.titleStyle}>Login</Title>

        <TextInput
          onChangeText={setUsername}
          value={username}
          style={styles.usernameStyle}
          placeholder="Username"
        />

        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={styles.usernameStyle}
          placeholder="Password"
        />

        <Button onPress={submitHandler}>
          <Text>Login</Text>
        </Button>
      </Card>
    </View>
  );
};

export default LoginPage;
