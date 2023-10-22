import React, { useEffect, useState } from 'react';
import {
  View,
  Alert,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

export default function GoodEmotionLevel3({ navigation }) {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const route = useRoute();
  const { myPropFunction } = route.params;

  const handleGameReset = () => {
    setShowFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const handleGameEmotionMenu = () => {
    setShowFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
    myPropFunction();
    navigation.navigate('ExploreGames');
  };

  const handlePressBack = async () => {
    navigation.navigate('GoodEmotion');
  };

  const handleNextLevel = async () => {
    if (score >= 3) {
      navigation.navigate('GoodEmotionLevel4');
    } else {
      Alert.alert('Please complete Level 3');
    }
  };

  const questions = [
    {
      level: 1,
      page: 1,
      main: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L3-1.png'),
      options: [
        {
          id: 0,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L3-3.png'),
          alt: '',
          isCorrect: true,
        },
        {
          id: 1,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L3-2.png'),
          alt: '',
          isCorrect: false,
        },
      ],
    },
    {
      level: 2,
      page: 2,
      main: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L1-1.png'),

      options: [
        {
          id: 0,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L1-2.png'),
          alt: '',
          isCorrect: true,
        },

        {
          id: 1,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L1-3.png'),
          alt: '',
          isCorrect: false,
        },
      ],
    },
    {
      level: 3,
      page: 3,
      main: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L2-1.png'),
      options: [
        {
          id: 0,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L2-3.png'),
          alt: '',
          isCorrect: false,
        },
        {
          id: 1,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L2-2.png'),
          alt: '',
          isCorrect: true,
        },
      ],
    },

    {
      level: 4,
      page: 4,
      main: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L4-1.png'),
      options: [
        {
          id: 0,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L4-3.png'),
          alt: '',
          isCorrect: false,
        },
        {
          id: 1,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L4-2.png'),
          alt: '',
          isCorrect: true,
        },
      ],
    },
    {
      level: 5,
      page: 5,
      main: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L5-1.png'),
      options: [
        {
          id: 0,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L5-3.png'),
          alt: '',
          isCorrect: false,
        },

        {
          id: 1,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L5-2.png'),
          alt: '',
          isCorrect: true,
        },
        {
          id: 2,
          path: require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/L5-4.png'),
          alt: '',
          isCorrect: false,
        },
      ],
    },
  ];

  const optionClicked = async (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
      await AsyncStorage.setItem('GoodEmotionLevel3', (score + 1).toString());
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
                source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/close.png')}
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
      source={require('../../../../../assets/NewAssets/ExploreGames/GoodEmotion/Level1/Guess_BG.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={!showFinalResults ? styles.containerHeader : styles.containerHeader2}>
          <TouchableOpacity onPress={handlePressBack}>
            <Image
              source={require('../../../../../assets/NewAssets/Dashboard/Back.png')}
              style={styles.headerBack}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image
              source={require('../../../../../assets/NewAssets/Dashboard/Settings.png')}
              style={styles.headerSettings}
            />
          </TouchableOpacity>
        </View>
        {showFinalResults ? (
          <View style={styles.finalResultMainContainer}>
            <View style={styles.finalResultContainer}>
              {score >= 3 ? (
                <View>
                  <Text>New Achievement Unlock – Good Manners Level 4</Text>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Achievements.png')}
                    style={styles.tropy}
                  />
                </View>
              ) : null}
              <Text>{`SUCCESSFUL ${score}/5`}</Text>

              {score === 1 || score === 2 ? (
                <View style={styles.starContainer}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                </View>
              ) : score === 3 || score === 4 ? (
                <View style={styles.starContainer}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                </View>
              ) : score === 5 ? (
                <View style={styles.starContainer}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starfill.png')}
                    style={styles.stars}
                  />
                </View>
              ) : (
                <View style={styles.starContainer}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Starnofill.png')}
                    style={styles.stars}
                  />
                </View>
              )}
              <View style={styles.menuContainer}>
                <TouchableOpacity onPress={handleGameEmotionMenu}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Proceedtolevelmenu.png')}
                    style={styles.menu}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGameReset}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Regame.png')}
                    style={styles.menu}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextLevel}>
                  <Image
                    source={require('../../../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/Proceedtonextlevelbutton.png')}
                    style={styles.menu}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text>{`Level # 3`}</Text>
            <Text>{`Game ${currentQuestion + 1}/5`}</Text>
            <View>
              <Image style={styles.imageQuestion} source={questions[currentQuestion].main} />
            </View>
            <View style={styles.optionContainer}>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <TouchableOpacity key={option.id} onPress={() => optionClicked(option.isCorrect)}>
                    <Image style={styles.imageOption} source={option.path} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}
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
    marginTop: '-17%',
  },
  containerHeader2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: '-9%',
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
  questionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-25%',
  },
  imageQuestion: {
    margin: 0,
    height: 200,
    width: 150,
    marginLeft: -300,
    marginTop: -10,
    resizeMode: 'stretch',
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginTop: -120,
    marginLeft: 200,
  },
  imageOption: {
    margin: 0,
    height: 150,
    width: 145,
  },
  finalResultMainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  finalResultContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',

    backgroundColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '-15%',
    margin: 20,
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 350,
    gap: 5,
    marginTop: '-10%',
  },
  stars: {
    margin: 0,
    height: 60,
    width: 60,
    resizeMode: 'stretch',
  },

  tropy: {
    margin: 0,
    height: 60,
    width: 60,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    gap: 5,
    marginTop: '-15%',
  },
  menu: {
    margin: 0,
    height: 120,
    width: 120,
    resizeMode: 'stretch',
    gap: -5,
  },
  achievement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
