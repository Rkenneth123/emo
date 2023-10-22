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

export default function AudioBookButterflyGarden({ navigation }) {
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
          text: 'A. A warm smile',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. A puzzled expression',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. A sad expression',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Empathy',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Frustration',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. Indifference',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Relief',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Disappointment',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. Apathy',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. A friendly smile',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. A bored expression',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. An angry expression',
          isCorrect: false,
        },
      ],
    },
    {
      options: [
        {
          id: 0,
          text: 'A. Excitement',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'B. Sadness',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'C. Apathy',
          isCorrect: false,
        },
      ],
    },
  ];

  const question1 = 'What expression does Mindy wear?';
  const question2 = 'What emotion does Mindy feel?';
  const question3 = 'What emotion do Mindy and Max feel?';
  const question4 = 'What expression does Emma wear?';
  const question5 = 'What emotion do Emma and Alex feel?';

  const storyLine1 =
    'In a beautiful garden, there lived a girl named Mindy who had a deep love for butterflies. She would spend hours observing their graceful dance among- the flowers. Mindy was known for her gentle and caring nature, always ready to- lend a helping hand. One day, Mindy noticed a boy named Max- sitting alone on a bench, looking upset. She approached him with a warm- smile and asked how he was feeling.';
  const storyLine2 =
    "With her warm smile, Mindy approached Max, making him feel seen and cared for. Max opened up about feeling overwhelmed and sad because he- couldn't find his favorite toy. Mindy listened attentively and offered to- help him search for it. Mindy helps Max search for the toy.";
  const storyLine3 =
    'As Mindy helped Max search for his toy, she felt empathy towards his situation. She understood how important the toy was to him and remained- patient and supportive throughout the search. Their shared effort created- a bond between them. Mindy and Max find the toy.';
  const storyLine4 =
    "After a thorough search,Mindy and Max finally found the toy hidden under a bush. Their faces lit up with relief, and Max couldn't thank Mindy- enough for her kindness. They celebrated their success and decided to spend- more time together, exploring the wonders of the butterfly garden. In- a bustling school, there was a girl named Emma who believed in the power of kindness.- She always looked for ways to make others feel valued and loved.- Emma was an excellent listener and had a knack for understanding people's emotions.- One day, Emma noticed a new student named Alex sitting alone at lunch,- looking lonely. She wanted to help Alex feel welcomed and included.- Emma approaches Alex";
  const storyLine5 =
    'Wearing a friendly smile, Emma approached Alex, introducing herself and asking if she could join him. Alex looked surprised but happy to- have someone reach out to him. They started talking and discovered shared interests- in books and art. Emma and Alex start a kindness project.';
  const storyLine6 =
    'Emma and Alex brainstormed ideas to spread kindness in their school. They decided to start a Kindness Club, organizing activities like writing encouraging- notes, performing random acts of kindness, and creating a kindness mural.- Their enthusiasm grew as more students joined the club, fostering a positive- and caring environment.';

  const line1 = storyLine1.split('- ');
  const line2 = storyLine2.split('- ');
  const line3 = storyLine3.split('- ');
  const line4 = storyLine4.split('- ');
  const line5 = storyLine5.split('- ');
  const line6 = storyLine6.split('- ');

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
      Speech.speak(questions[4].options[2].text, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      setValue4(0);
    }
  }, [value4]);

  useEffect(() => {
    if (line6 && line6.length > 0 && line6.length === value5) {
      setQuestion(question + 1);
      setShowQuestion(true);
      setValue5(0);
    }
  }, [value5]);

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

  const nextPage3 = async (isCorrect) => {
    if (isCorrect) {
      word = 0;
      setShowQuestion(false);
      setPart(part + 1);
      await Speech.speak(storyLine4, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
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
      await Speech.speak(storyLine5, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
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
      await Speech.speak(storyLine6, { pitch: 1.1, rate: 0.75, quality: 'Enhanced' });
      const update = () => {
        setValue5(word);
        word += 1;
      };
      setInterval(update, 5200);
    } else {
      Alert.alert('Incorrect Answer, please choose the correct answer.');
    }
  };

  return (
    <ImageBackground
      source={
        part === 0
          ? require('../../../assets/NewAssets/Story/ButterflyGarden.png')
          : part === 1
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly1.png')
          : part === 2
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly2.png')
          : part === 3
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly3.png')
          : part === 4
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly4.png')
          : part === 5
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly5.png')
          : part === 6
          ? require('../../../assets/NewAssets/Story/ButterflyGarden/butterfly6.png')
          : require('../../../assets/NewAssets/Story/ButterflyGarden.png')
      }
      style={styles.backgroundImage}
    >
      {part === 0 ? (
        <View style={styles.container}>
          <View style={styles.firstPage}>
            <Image source={require('../../../assets/NewAssets/Story/ButterflyGarden.png')} style={styles.bodyItem} />
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

          <Text style={styles.questionText}>What expression does Mindy wear?</Text>
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
        </View>
      ) : null}
      {showQuestion && question === 2 ? (
        <View style={styles.questionContainer}>

          <Text style={styles.questionText}>What emotion does Mindy feel?</Text>
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

          <Text style={styles.questionText}>What emotion do Mindy and Max feel?</Text>
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

      ) : null}
      {part === 4 && !showQuestion ? (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{line4[value3]}</Text>
        </View>
      ) : null}
      {showQuestion && question === 4 ? (
        <View style={styles.questionContainer}>

          <Text style={styles.questionText}>What expression does Emma wear?</Text>
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

          <Text style={styles.questionText}>What emotion do Emma and Alex feel?</Text>
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
  storyItem: {
    margin: 0,
    height: 250,
    width: 650,
    resizeMode: 'stretch',
    textAlign: 'center',
  },
  buttonBack: {
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
    padding: 5,
    width: 200,
    gap: 5,
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
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
  questionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
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
    backgroundColor: 'lightgreen',
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
