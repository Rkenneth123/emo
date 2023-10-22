import React, { useEffect, useState } from 'react';
import {
  Text,
  StatusBar,
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

export default function AudioBookControllingAnger({ navigation }) {
  const [part, setPart] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [question, setQuestion] = useState(0);
  let word = 0;
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const route = useRoute();
  const { myPropFunction } = route.params;

  const handleHomePage = async () => {
    myPropFunction();
    navigation.navigate('Story');
  };

  const questions = [
    {
      options: [
        {
          id: 0,
          text: "A. John hug people when he's Angry'",
          isCorrect: false,
        },
        {
          id: 1,
          text: 'B. John say anything that came to his mind and hurt people.',
          isCorrect: true,
        },
        {
          id: 2,
          text: "C. John's laughing when he's Angry.",
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. A notebook',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Pillow and blanket',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. A water and food',
          isCorrect: false,
        },
      ],
    },
  ];

  const question1 = 'What John do when he became angry?';
  const question2 = 'What did his father give to John?';

  const storyLine1 =
    'There was once a young boy named John who had a problem controlling his temper. When John became angry, he would just say anything that came to his- mind and hurt people. ';
  const storyLine2 =
    'When his father and John is in the living room  his father gave him a notebook and said, “Every time you get angry, scratch one paper”';
  const storyLine3 =
    'The first few days the boy scratch so many paper that he emptied half of the notebook. Over the weeks, the number of paper in the notebook he scratched- reduced and gradually, his temper was much in control. Then came- a day when he didn’t lose his temper at all. His father asked him to scratch- one paper each day so that he manages to control his temper.- Finally, on the day the child was removing the last paper, his father says, “You have done- well, boy. But do you see the notebook?, even after you collect and- put a tape or glue on those torn paper it will never be the same. Likewise,- when you say mean things in anger, you will leave a scar in the person’s mind,- as the paper you scratched”.';

  const line1 = storyLine1.split('- ');
  const line2 = storyLine2.split('- ');
  const line3 = storyLine3.split('- ');

  useEffect(() => {
    if (line1 && line1.length > 0 && line1.length === value) {
      setQuestion(question + 1);
      setShowQuestion(true);
      Speech.speak(question1, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[0].options[0].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[0].options[1].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      Speech.speak(questions[0].options[2].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
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
      Speech.speak(questions[1].options[2].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue1(0);
    }
  }, [value1]);

  useEffect(() => {
    if (line3 && line3.length > 0 && line3.length === value2) {
      setQuestion(question + 1);
      setShowQuestion(true);
      setValue2(0);
    }
  }, [value2]);

  const startPage = async () => {
    setPart(0);
    setPart(part + 1);
    setTimeout(async () => {
      await Speech.speak(storyLine1, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
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
      await Speech.speak(storyLine2, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
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
      await Speech.speak(storyLine3, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue2(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../../assets/NewAssets/Story/ControllingAnger.png')}
      style={styles.backgroundImage}
    >
      {part === 0 ? (
        <View style={styles.container}>
          <View style={styles.firstPage}>
            <Image
              source={require('../../../assets/NewAssets/Story/ControllingAnger.png')}
              style={styles.bodyItem}
            />
            <Button title='Start' onPress={startPage} />
          </View>
        </View>
      ) : part === 1 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line1[value]}</Text>
          {/* Input image based on the storyline */}
        </View>
      ) : null}
      {showQuestion && question === 1 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What John do when he became angry?</Text>
          <View style={styles.optionTextContainer}>
            {questions[0].options.map((option) => {
              return (
                <TouchableOpacity key={option.id} onPress={() => nextPage1(option.isCorrect)}>
                  <Text style={styles.questionText}>{option.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : null}
      {part === 2 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line2[value1]}</Text>
          {/* Input image based on the storyline */}
        </View>
      ) : null}
      {showQuestion && question === 2 ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What did his father give to John?</Text>
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
          {/* Input image based on the storyline */}
        </View>
      ) : null}
      {showQuestion && question === 3 ? (
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
    backgroundColor: 'white',
    color: 'skyblue',
    fontSize: 16,
    alignItems: 'center',
    marginTop: 250,
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
    backgroundColor: 'lightblue',
    color: 'white',
    borderRadius: 50,
    width: '60%',
    marginLeft: '20%',
    borderWidth: 10,
    margin: 10,
    borderColor: 'white',
  },
  questionText: {
    color: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    textAlign: 'center',
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
  },
});
