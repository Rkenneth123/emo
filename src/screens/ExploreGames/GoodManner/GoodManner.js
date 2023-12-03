import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Modal,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GoodEmotionScreen({ navigation }) {
  const [lockLevel2, setLockLevel2] = useState(true);
  const [lockLevel3, setLockLevel3] = useState(true);
  const [lockLevel4, setLockLevel4] = useState(true);
  const [lockLevel5, setLockLevel5] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();

  const handleLevel1 = () => {
    navigation.navigate('GoodEmotionLevel1');
  };
  const handleLevel2 = () => {
    if (lockLevel2) {
      Alert.alert('Please Complete Level 1');
    } else {
      navigation.navigate('GoodEmotionLevel2');
    }
  };
  const handleLevel3 = () => {
    if (lockLevel3) {
      Alert.alert('Please Complete Level 2');
    } else {
      navigation.navigate('GoodEmotionLevel3');
    }
  };
  const handleLevel4 = () => {
    if (lockLevel4) {
      Alert.alert('Please Complete Level 3');
    } else {
      navigation.navigate('GoodEmotionLevel4');
    }
  };
  const handleLevel5 = () => {
    if (lockLevel5) {
      Alert.alert('Please Complete Level 4');
    } else {
      navigation.navigate('GoodEmotionLevel5');
    }
  };
  const handlePressBack = async () => {
    navigation.navigate('ExploreGames');
  };

  const unlockLevel2 = async () => {
    const score = await AsyncStorage.getItem('GoodEmotionLevel1');
    let finalScore = parseInt(score);

    if (finalScore >= 3) {
      setLockLevel2(false);
    }
  };

  const unlockLevel3 = async () => {
    const score = await AsyncStorage.getItem('GoodEmotionLevel2');
    let finalScore = parseInt(score);

    if (finalScore >= 3) {
      setLockLevel3(false);
    }
  };

  const unlockLevel4 = async () => {
    const score = await AsyncStorage.getItem('GoodEmotionLevel3');
    let finalScore = parseInt(score);

    if (finalScore >= 3) {
      setLockLevel4(false);
    }
  };

  const unlockLevel5 = async () => {
    const score = await AsyncStorage.getItem('GoodEmotionLevel4');
    let finalScore = parseInt(score);

    if (finalScore >= 3) {
      setLockLevel5(false);
    }
  };

  useEffect(() => {
    unlockLevel2();
    unlockLevel3();
    unlockLevel4();
    unlockLevel5();
  }, []);

  const load = async () => {
    const itemName = await AsyncStorage.getItem('Name');
    const itemGender = await AsyncStorage.getItem('Gender');
    setName(itemName);
    setGender(itemGender);
  };

  const reset = async () => {
    await AsyncStorage.removeItem('Name');
    await AsyncStorage.removeItem('Gender');
    await AsyncStorage.removeItem('GuessLevel1');
    await AsyncStorage.removeItem('GuessLevel2');
    await AsyncStorage.removeItem('GuessLevel3');
    await AsyncStorage.removeItem('GuessLevel4');
    await AsyncStorage.removeItem('GuessLevel5');
    await AsyncStorage.removeItem('BehaviorLevel1');
    await AsyncStorage.removeItem('BehaviorLevel2');
    await AsyncStorage.removeItem('BehaviorLevel3');
    await AsyncStorage.removeItem('BehaviorLevel4');
    await AsyncStorage.removeItem('BehaviorLevel5');
    await AsyncStorage.removeItem('GoodEmotionLevel1');
    await AsyncStorage.removeItem('GoodEmotionLevel2');
    await AsyncStorage.removeItem('GoodEmotionLevel3');
    await AsyncStorage.removeItem('GoodEmotionLevel4');
    await AsyncStorage.removeItem('GoodEmotionLevel5');
    await AsyncStorage.removeItem('Day 1');
    await AsyncStorage.removeItem('Day 2');
    await AsyncStorage.removeItem('Day 3');
    await AsyncStorage.removeItem('Day 4');
    await AsyncStorage.removeItem('Day 5');
    await AsyncStorage.removeItem('Day 6');
    await AsyncStorage.removeItem('Day 7');
    await AsyncStorage.removeItem('Day 8');
    await AsyncStorage.removeItem('Day 9');
    await AsyncStorage.removeItem('Day 10');
    await AsyncStorage.setItem('activity_day', (0).toString());
    Alert.alert('Data is Reset');
    navigation.navigate('Loading');
  };

  useEffect(() => {
    load();
  }, []);

  function renderModal() {
    return (
      <Modal visible={openModal} animationType='fade' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.textSetting}>Setting</Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Image source={{ uri: 'https://i.ibb.co/dB0qgj6/close.png' }} style={styles.close} />
            </TouchableOpacity>
            <Text style={styles.textLabel}>{name}</Text>
            <Text>Name</Text>
            <Text style={styles.textGender}>{gender}</Text>
            <Text>Gender</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={reset}>
                <Text style={styles.textReset}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <ImageBackground
      source={require('../../../../assets/NewAssets/ExploreGames/GoodEmotion/GOODEMOTION.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={handlePressBack}>
            <Image source={{ uri: 'https://i.ibb.co/hHGcr3x/Back.png' }} style={styles.headerBack} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image
              source={require('../../../../assets/NewAssets/Dashboard/Settings.png')}
              style={styles.headerSettings}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContent}>
          <TouchableOpacity onPress={handleLevel1}>
            <Image source={{ uri: 'https://i.ibb.co/2Sd2nQL/Level1.png' }} style={styles.bodyItem} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLevel2}>
            <View style={styles.levelsContainer}>
              <Image source={{ uri: 'https://i.ibb.co/WWNN9cb/Level2.png' }} style={styles.bodyItem} />
              {lockLevel2 ? (
                <Image source={{ uri: 'https://i.ibb.co/hHygbjM/Lock1.png' }} style={styles.lockSize} />
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLevel3}>
            <View style={styles.levelsContainer}>
              <Image source={{ uri: 'https://i.ibb.co/1rg141J/Level3.png' }} style={styles.bodyItem} />
              {lockLevel3 ? (
                <Image source={{ uri: 'https://i.ibb.co/hHygbjM/Lock1.png' }} style={styles.lockSize} />
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLevel4}>
            <View style={styles.levelsContainer}>
              <Image source={{ uri: 'https://i.ibb.co/47ZjbXS/Level4.png' }} style={styles.bodyItem} />
              {lockLevel4 ? (
                <Image source={{ uri: 'https://i.ibb.co/hHygbjM/Lock1.png' }} style={styles.lockSize} />
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLevel5}>
            <View style={styles.levelsContainer}>
              <Image source={{ uri: 'https://i.ibb.co/fMx9TGw/Level5.png' }} style={styles.bodyItem} />
              {lockLevel5 ? (
                <Image source={{ uri: 'https://i.ibb.co/hHygbjM/Lock1.png' }} style={styles.lockSize} />
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {renderModal()}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: '-10%',
  },
  headerBack: {
    margin: 0,
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
  headerSettings: {
    margin: 0,
    height: 30,
    width: 90,
    resizeMode: 'stretch',
    marginTop: -25,
  },
  bodyContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: -30,
  },
  levelsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bodyItem: {
    margin: 0,
    height: 100,
    width: 100,
    resizeMode: 'stretch',
  },
  lockSize: {
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  close: {
    margin: 0,
    height: 50,
    width: 50,
    marginLeft: 270,
    marginTop: -40,
    resizeMode: 'stretch',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '60%',
    backgroundColor: 'skyblue',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'white',
    marginTop: '5%',
    margin: 20,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  textLabel: {
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 10,
    width: 200,
    height: 40,
  },
  textSetting: {
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'brown',
    textAlign: 'center',
    marginTop: -40,
    margin: 10,
    width: 200,
    height: 40,
  },
  textGender: {
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 10,
    width: 200,
    height: 40,
  },
  textReset: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    margin: 10,
    width: 200,
    gap: 5,
  },
});
