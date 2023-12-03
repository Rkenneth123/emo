import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Alert,
  ScrollView,
  Dimensions,
 
} from 'react-native';


export default function AchievementScreen({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const handlePressStory = () => {
    navigation.navigate('Story');
  };

  const handlePressExploreGames = () => {
    navigation.navigate('ExploreGames');
  };

  const handlePressDailyActivity = () => {
    navigation.navigate('DailyActivity');
  };
  const screenwidth = Dimensions.get("window").width
  const screenheight = Dimensions.get("window").height

  const handlePressBack = async () => {
    const itemName = await AsyncStorage.getItem('Name');
    const itemGender = await AsyncStorage.getItem('Gender');
    if (itemGender && itemName) {
      navigation.navigate('Loading');
    } else {
      navigation.navigate('Landing');
    }
  };

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
              <Image
                source={require('../../assets/NewAssets/Dashboard/close.png')}
                style={styles.close}
              />
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
      source={require('../../assets/NewAssets/background3.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Back.png')}
              style={styles.headerBack}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Settings.png')}
              style={styles.headerSettings}
            />
          </TouchableOpacity>
        </View>

      
        <View style={styles.bodyContent}>
          <TouchableOpacity onPress={handlePressStory}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Story.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressExploreGames}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Explore.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
      
        </View>
      
  
        <View style={styles.bodyContents}>
       
          <TouchableOpacity onPress={handlePressStory}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Story.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressExploreGames}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Explore.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressDailyActivity}>
            <Image
              source={require('../../assets/NewAssets/Dashboard/Daily.png')}
              style={styles.bodyItem}
            />
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    marginLeft: 20,
    width: 250,
    marginTop: -30,
  },
  bodyContents: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    marginLeft: 350,
    width: 350,
    marginTop: -230,
  },
  bodyItem: {
    margin: 0,
    height: 90,
    width: 90,
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
  scroll:{
    flex: 1,
    flexDirection: 'row',
    gap: 50,
    marginLeft: 40,
    marginRight: 10,
    marginTop: 0,
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
  scroll:{
    flex: 1,
    flexDirection: 'row',
    gap: 50,
    marginLeft: 40,
    marginRight: 10,
    marginTop: -50,
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
