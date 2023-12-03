import React, { useEffect, useState } from 'react';
import {
  Text,
  BackHandler,
  View,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
const Speech = require('expo-speech');
import { useRoute } from '@react-navigation/native';

export default function AudioBookTalkingWithFriends({ navigation }) {
  const [part, setPart] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [question, setQuestion] = useState(0);
  let word = 0;
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);

  const route = useRoute();
  const { myPropFunction } = route.params;

  const handleHomePage = async () => {
    myPropFunction();
    navigation.navigate('Story');
  };

  const questions = [
    {
      main: require('../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/page11.png'),
      options: [
        {
          id: 0,
          path: require('../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/happy.png'),
          alt: 'happy',
          isCorrect: false,
        },
        {
          id: 2,
          path: require('../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/angry.png'),
          alt: 'angry',
          isCorrect: false,
        },
        {
          id: 3,
          path: require('../../../assets/NewAssets/ExploreGames/GuessEmotion/Level1/sad.png'),
          alt: 'sad',
          isCorrect: true,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Emily invite lily to join their friend group',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Leave her alone',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Happy',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Sad',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. Angry',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Happy',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'B. Inlove',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. Angry',
          isCorrect: true,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Ignore him',
          isCorrect: false,
        },
        {
          id: 1,
          text: 'B. Confront him',
          isCorrect: true,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Accept',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Walk away',
          isCorrect: false,
        },
      ],
    },
  ];

  const question1 = 'Is she sad, happy, or angry?';
  const question2 = 'what should be good to do?';
  const question3 = 'What do they feel?';
  const question4 = 'What does Ethan feel?';
  const question5 = 'What should Olivia and Noah do?';
  const question6 = 'Olivia and Noah apologize to Ethan, What should Ethan do?';

  const storyLine1 =
    'Once upon a time in a small town called Harmonyville, there were four best friends named Emily, Ethan, Olivia, and Noah. They were known- for their strong bond and spent most of their time together, sharing their joys,- sorrows, and dreams. They were always there for one another, offering support- and understanding whenever needed. One sunny day, as the friends- gathered at their favorite spot in the park. They noticed a new girl sitting alone- on a nearby bench, her name was Lily,';
  const storyLine2 =
    'Emily approached Lily with a warm smile. Emily soon discovered that Lily had recently moved to Harmonyville and was struggling to make friends.- She missed her old home and felt lonely in the new town.';
  const storyLine3 =
    "Seeing the opportunity to help, Emily invited Lily to join their friend group. Lily hesitated at first, but her heart was touched by Emily's kindness,- and she agreed. The next day, Emily introduced Lily- to Ethan, Olivia, and Noah. Although the friends welcomed Lily,- they were cautious about letting her into their tight-knit circle. They worried that- her presence might disrupt the harmony they had built over the years. However,- they decided to give her a chance. As days turned into weeks, Lily- started spending more time with the group.";
  const storyLine4 =
    "She would often share stories about her previous town and her adventures, and everyone enjoyed listening. However, over time, Ethan began to- feel left out. Lily and Emily's friendship seemed to overshadow their bond,- and he started feeling replaced.";
  const storyLine5 =
    "Ethan's emotions grew, and he started distancing himself from the group. He didn't openly express his feelings, assuming that his friends would- understand his silent struggle. But as the days passed, his behavior became- noticeable to Olivia and Noah, who grew concerned about their friend's well-being.";
  const storyLine6 =
    "One evening, Olivia and Noah decided to confront Ethan about his changed behavior. They met him at their secret meeting spot, a treehouse- nestled in the woods. Olivia spoke first, Ethan, we've noticed that- something is bothering you. We're here for you, and we want to understand.- Relieved that his friends had noticed, Ethan opened up about feeling left out and- forgotten. Olivia and Noah listened intently, realizing their mistake- in unintentionally neglecting their friend's feelings. They- apologized and vowed to make things right.";
  const storyLine7 =
    'The next day, Olivia and Noah organized a group meeting at the park. They gathered their friends and, one by one, shared their honest feelings.- Emily realized how much she had been caught up in her new friendship with Lily and acknowledged- that she had unknowingly neglected Ethan. Tears were shed,- apologies were made, and the friends reaffirmed their commitment to each other.- They vowed to always communicate openly and honestly, ensuring that no one would feel isolated- or neglected again. From that day forward, they made a pact- to include each other in their conversations, activities, and decisions. Through- their experience, the friends learned the importance of open communication and the value- of inclusivity. They discovered that talking openly with- friends, even about difficult emotions, can strengthen bonds and prevent misunderstandings.- The story of Emily, Ethan, Olivia, Noah, and Lily became an- inspiration for others in Harmonyville, reminding everyone of the significance of- empathy and understanding in friendships. And so, in Harmonyville,- the power of talking and listening transformed their lives and paved the way for a community- rooted in compassion and strong, lasting friendships.';

  const line1 = storyLine1.split('- ');
  const line2 = storyLine2.split('- ');
  const line3 = storyLine3.split('- ');
  const line4 = storyLine4.split('- ');
  const line5 = storyLine5.split('- ');
  const line6 = storyLine6.split('- ');
  const line7 = storyLine7.split('- ');

  useEffect(() => {
    if (line1 && line1.length > 0 && line1.length === value) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question1, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue(0);
    }
  }, [value]);

  useEffect(() => {
    if (line2 && line2.length > 0 && line2.length === value1) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question2, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[1].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[1].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue1(0);
    }
  }, [value1]);

  useEffect(() => {
    if (line3 && line3.length > 0 && line3.length === value2) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question3, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[2].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[2].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[2].options[2].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue2(0);
    }
  }, [value2]);

  useEffect(() => {
    if (line4 && line4.length > 0 && line4.length === value3) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question4, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[3].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[3].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[3].options[2].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue3(0);
    }
  }, [value3]);

  useEffect(() => {
    if (line5 && line5.length > 0 && line5.length === value4) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question5, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[4].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[4].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue4(0);
    }
  }, [value4]);

  useEffect(() => {
    if (line6 && line6.length > 0 && line6.length === value5) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question6, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[5].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[5].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue5(0);
    }
  }, [value5]);

  useEffect(() => {
    if (line7 && line7.length > 0 && line7.length === value6) {
      setQuestion(question + 1);
      setShowQuestion(true);
      setValue6(0);
    }
  }, [value6]);

  const startPage = async () => {
    setPart(0);
    setPart(part + 1);
    setTimeout(async () => {
      Speech.speak(storyLine1, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue(word);
        word += 1;
      };
      setInterval(update, 5200);
    }, 2000);
  };

  const nextPage1 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine2, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue1(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  const nextPage2 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine3, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue2(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  const nextPage3 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine4, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue3(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  const nextPage4 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine5, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue4(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  const nextPage5 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine6, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue5(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  const nextPage6 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      Speech.speak(storyLine7, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue6(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Stop', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Okay',
          onPress: () => {
            BackHandler.exitApp(), Speech.stop();
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  }, [question]);
  return (
    <ImageBackground
      source={
        part === 0
          ? require('../../../assets/NewAssets/Story/TalkingWithFriends1.png')
          : part === 1
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly7.png')
          : part === 2
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly8.png')
          : part === 3
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly9.png')
          : part === 4
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly10.png')
          : part === 5
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly11.png')
          : part === 6
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly12.png')
          : part === 7
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly13.png')
          : require('../../../assets/NewAssets/Story/TalkingWithFriends1.png')
      }
      style={styles.backgroundImage}
    >
      {part === 0 ? (
        <View style={styles.container}>
          <View style={styles.firstPage}>
            <Image source={{ uri: 'https://i.ibb.co/vstq2DS/Talking-With-Friends.png' }} style={styles.bodyItem} />
            <Button title='Start' onPress={startPage} />
          </View>
        </View>
      ) : part === 1 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line1[value]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 1 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Is she sad, happy, or angry?</Text>
          <View>
            <Image style={styles.imageQuestion} source={questions[0].main} />
          </View>
          <View style={styles.optionContainer}>
            {questions[0].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage1(option.isCorrect)}>
                  <Image style={styles.imageOption} source={option.path} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 2 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line2[value1]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 2 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What should be good to do?</Text>
          <View style={styles.optionTextContainer}>
            {questions[1].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage2(option.isCorrect)}>
                  <Text style={styles.questionText}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 3 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line3[value2]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 3 ? (
        <View style={styles.questionContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.questionText}>What do they feel?</Text>
            <View style={styles.optionTextContainer}>
              {questions[2].options.map((option) => {
                return (
                  <TouchableOpacity key={option.id} onPress={() => nextPage3(option.isCorrect)}>
                    <Text style={styles.questionText}>{option.text}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      ) : null}
      {part === 4 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line4[value3]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 4 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What does Ethan feel?</Text>
          <View style={styles.optionTextContainer}>
            {questions[3].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage4(option.isCorrect)}>
                  <Text style={styles.questionText}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 5 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line5[value4]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 5 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What should Olivia and Noah do?</Text>
          <View style={styles.optionTextContainer}>
            {questions[4].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage5(option.isCorrect)}>
                  <Text style={styles.questionText}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 6 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line6[value5]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 6 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Olivia and Noah apologize to Ethan, What should Ethan do?</Text>
          <View style={styles.optionTextContainer}>
            {questions[5].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage6(option.isCorrect)}>
                  <Text style={styles.questionText}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 7 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line7[value6]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 7 ? (
        <View style={styles.endMainContainer}>
          <View style={styles.endContainer}>
            <Text style={styles.endText}>The End</Text>
            <TouchableOpacity onPress={handleHomePage}>
              <Text style={styles.buttonBack}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPage: {
    gap: 20,
  },
  storyItem: {
    margin: 0,
    height: 250,
    width: 650,
    resizeMode: 'stretch',
  },
  bodyItem: {
    margin: 0,
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  subtitleContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  subtitleText: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 16,
    alignItems: 'center',

    textAlign: 'center',
  },
  buttonBack: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    textAlign: 'center',
    margin: 10,
    padding: 5,
    width: 200,
    gap: 5,
  },
  questionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '3%',
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
    color: 'white',
    borderRadius: 50,
    width: '60%',
    marginLeft: '20%',
    borderWidth: 10,
    margin: 10,
    borderColor: 'white',
  },
  // fix css for this questionText style
  questionText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
    fontSize: 20,
    margin: 20,
    alignItems: 'center',
    marginTop: -1,
    textAlign: 'center',
    borderRadius: 10,
  },
  imageQuestion: {
    margin: 0,
    height: 120,
    width: 120,
    resizeMode: 'stretch',
    marginTop: 10,
  },
  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 40,
  },
  optionTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    marginTop: -40,
  },
  imageOption: {
    margin: 0,
    height: 80,
    width: 80,
    marginTop: -30,
  },

  endMainContainer: {
    flex: 1,
    alignItems: 'center',
    height: '80%',
  },
  endContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '60%',
    backgroundColor: 'lightblue',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'white',
    marginTop: '5%',
    margin: 20,
  },
  endText: {
    fontSize: 40,
    fontStyle: 'italic',
    color: 'white',
  },
});
