import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  Modal,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DailyActivityScreen({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [days, setDays] = useState(0);
  const [detailDay, setDetailDay] = useState();
  const [activities, setActivities] = useState();

  const handlePressBack = async () => {
    navigation.navigate('Dashboard');
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

  const getDaysNumber = async () => {
    const result = await AsyncStorage.getItem('activity_day');
    setDays(parseInt(result));
  };

  const addDaysNumber = async () => {
    if (days <= 9) {
      await AsyncStorage.setItem('activity_day', (days + 1).toString());
      getDaysNumber();
    } else {
      Alert.alert(`You've reached the maximum limit`);
    }
  };

  const addDetails = async (day) => {
    setDetailModal(true);
    setDetailDay(day);
    const result = await AsyncStorage.getItem(day);
    setActivities(result);
  };

  const saveDetails = async () => {
    await AsyncStorage.setItem(detailDay, activities);
    Alert.alert('Activities saved');
  };

  useEffect(() => {
    load();
    getDaysNumber();
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

  function renderDetailModal() {
    return (
      <Modal visible={detailModal} animationType='fade' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.textSetting}>{detailDay}</Text>
            <View style={styles.detailInfo}>
              <Text>Name</Text>
              <Text style={styles.textLabel}>{name}</Text>
              <Text>Gender</Text>
              <Text style={styles.textGender}>{gender}</Text>
            </View>
            <TextInput
              style={styles.detailTextArea}
              value={activities}
              onChangeText={(text) => {
                setActivities(text);
              }}
              multiline={true}
              numberOfLines={4}
            />
            <View style={styles.detailButtonContainer}>
              <TouchableOpacity onPress={saveDetails}>
                <Text style={styles.textReset}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDetailModal(false)}>
                <Text style={styles.textReset}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/NewAssets/dailyActivity/dailyactivity.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={handlePressBack}>
            <Image
              source={require('../../assets/NewAssets/dailyActivity/Back.png')}
              style={styles.headerBack}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image
              source={require('../../assets/NewAssets/dailyActivity/Settings.png')}
              style={styles.headerSettings}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContent}>
          <SafeAreaView>
            <ScrollView style={styles.scrollView}>
              <View style={styles.activityContent}>
                <View style={styles.DayContent}>
                  {days >= 1 ? <Text style={styles.textDay}>Day 1</Text> : null}
                  {days >= 2 ? <Text style={styles.textDay}>Day 2</Text> : null}
                  {days >= 3 ? <Text style={styles.textDay}>Day 3</Text> : null}
                  {days >= 4 ? <Text style={styles.textDay}>Day 4</Text> : null}
                  {days >= 5 ? <Text style={styles.textDay}>Day 5</Text> : null}
                  {days >= 6 ? <Text style={styles.textDay}>Day 6</Text> : null}
                  {days >= 7 ? <Text style={styles.textDay}>Day 7</Text> : null}
                  {days >= 8 ? <Text style={styles.textDay}>Day 8</Text> : null}
                  {days >= 9 ? <Text style={styles.textDay}>Day 9</Text> : null}
                  {days >= 10 ? <Text style={styles.textDay}>Day 10</Text> : null}
                  {days === 10 ? null : (
                    <TouchableOpacity onPress={addDaysNumber}>
                      <Text style={styles.textDay}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.activitiesContainer}>
                  {days >= 1 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 1')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 2 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 2')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 3 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 3')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 4 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 4')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 5 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 5')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 6 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 6')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 7 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 7')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 8 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 8')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 9 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 9')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                  {days >= 10 ? (
                    <TouchableOpacity onPress={() => addDetails('Day 10')}>
                      <Text style={styles.textActivity}>Activities</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      {renderModal()}
      {renderDetailModal()}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  bodyContent: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginTop: "-10%"
  },
  scrollView: {
    marginHorizontal: 20,
  },
  activityContent: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  activitiesContainer: {
    width: '70%',
    gap: 20,
  },
  DayContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    // marginTop: -30,
    marginLeft: 20,
    width: '30%',
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
  bodyItem: {
    margin: 0,
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
    backgroundColor: 'skyblue',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'white',
    marginTop: '5%',
    margin: 20,
  },
  detailInfo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  detailButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  detailTextArea: {
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 10,
    width: '80%',
  },
  close: {
    margin: 0,
    height: 50,
    width: 50,
    marginLeft: 270,
    marginTop: -40,
    resizeMode: 'stretch',
  },

  textDay: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    padding: 3,
    width: 150,
    // marginTop: -75,
    gap: 10,
  },
  textActivity: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    margin: -10,
    width: '90%',
    marginTop: 0,
    padding: 3,
    gap: 5,
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
