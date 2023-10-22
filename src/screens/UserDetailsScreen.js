import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserDetailsScreen({ navigation }) {
  const [boy, setBoy] = useState(false);
  const [girl, setGirl] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const handlePress = async () => {
    if (!boy && !girl) {
      Alert.alert('Please see choose a character');
    } else if (!name) {
      Alert.alert('Please input your name');
    } else {
      try {
        await AsyncStorage.setItem('Name', name);
        await AsyncStorage.setItem('Gender', gender);
        Alert.alert(`${gender} character Created`);
        navigation.navigate('Dashboard');
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  const handlePressGirl = () => {
    setGirl(true);
    setBoy(false);
    setGender('Girl');
  };
  const handlePressBoy = () => {
    setGirl(false);
    setBoy(true);
    setGender('Boy');
  };

  return (
    <ImageBackground
      source={require('../../assets/NewAssets/UserDetails/CharacterBg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setName(text);
          }}
          autoCapitalize={'characters'}
          placeholder='NAME'
          placeholderTextColor={'white'}
        />
        <View style={styles.containerImage}>
          <TouchableOpacity onPress={handlePressBoy}>
            <Image
              source={require('../../assets/boys.png')}
              style={boy ? styles.boyImageSelected : styles.boyImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressGirl}>
            <Image
              source={require('../../assets/NewAssets/UserDetails/girl.png')}
              style={girl ? styles.girlImageSelected : styles.girlImage}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require('../../assets/NewAssets/UserDetails/done.png')}
              style={styles.doneImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  containerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    gap: 40,
    marginTop: '5%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    alignItems: 'center',
    // gap: 40,
  },
  boyImage: {
    margin: 0,
    height: 80,
    width: 80,
  },
  girlImage: {
    margin: 0,
    height: 80,
    width: 80,
  },
  boyImageSelected: {
    margin: 0,
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  girlImageSelected: {
    margin: 0,
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  doneImage: {
    margin: 0,
    height: 50,
    width: 50,
    marginTop: 40,
    marginBottom: 80

  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'white',
    // alignSelf: 'stretch',
    width: '30%',
    marginTop: 75,
    margin: 32,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
