import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import LoadingScreen from './src/screens/LoadingScreen';
import UserDetailsScreen from './src/screens/UserDetailsScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AchievementScreen from './src/screens/AchievementScreen';
import TrophyScreen from './src/screens/TrophyScreen';
import { useEffect } from 'react';
import StoryScreen from './src/screens/StoryScreen';
import ExploreGamesScreen from './src/screens/ExploreGamesScreen';
import DailyActivityScreen from './src/screens/DailyActivityScreen';
import AudioBookTalkingWithFriends from './src/screens/Story/AudioBookTalkingWithFriends';
import AudioBookButterflyGarden from './src/screens/Story/AudioBookButterflyGarden';
import AudioBookControllingAnger from './src/screens/Story/AudioBookControllingAnger';
import GuessEmotionScreen from './src/screens/ExploreGames/Guess/GuessEmotion';
import GuessLevel1 from './src/screens/ExploreGames/Guess/Levels/Level1';
import GuessLevel2 from './src/screens/ExploreGames/Guess/Levels/Level2';
import GuessLevel3 from './src/screens/ExploreGames/Guess/Levels/Level3';
import GuessLevel4 from './src/screens/ExploreGames/Guess/Levels/Level4';
import GuessLevel5 from './src/screens/ExploreGames/Guess/Levels/Level5';
import BehaviorEmotionScreen from './src/screens/ExploreGames/BehaviorTest/BehaviorEmotion';
import BehaviorLevel1 from './src/screens/ExploreGames/BehaviorTest/Levels/Level1';
import BehaviorLevel2 from './src/screens/ExploreGames/BehaviorTest/Levels/Level2';
import BehaviorLevel3 from './src/screens/ExploreGames/BehaviorTest/Levels/Level3';
import BehaviorLevel4 from './src/screens/ExploreGames/BehaviorTest/Levels/Level4';
import BehaviorLevel5 from './src/screens/ExploreGames/BehaviorTest/Levels/Level5';
import GoodEmotionScreen from './src/screens/ExploreGames/GoodManner/GoodManner';
import GoodEmotionLevel1 from './src/screens/ExploreGames/GoodManner/Levels/Level1';
import GoodEmotionLevel2 from './src/screens/ExploreGames/GoodManner/Levels/Level2';
import GoodEmotionLevel3 from './src/screens/ExploreGames/GoodManner/Levels/Level3';
import GoodEmotionLevel4 from './src/screens/ExploreGames/GoodManner/Levels/Level4';
import GoodEmotionLevel5 from './src/screens/ExploreGames/GoodManner/Levels/Level5';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();

export default function App() {
  return <AppRoutes />;
}

const AppRoutes = () => {
  let soundObject = null;
  const playSound = async () => {
    soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/music.mp3'));
      soundObject.setIsLoopingAsync(true);
      soundObject.setPositionAsync(5000);
      soundObject.setVolumeAsync(1.0);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Failed to play sound', error);
    }
  };

  const pauseSound = async () => {
    try {
      soundObject.pauseAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Loading'}
          screenOptions={{ headerShown: false, drawerLockMode: false }}
        >
          <Stack.Screen name='Loading' component={LoadingScreen} />
          <Stack.Screen name='Landing' component={UserDetailsScreen} />
          <Stack.Screen name='Dashboard' component={DashboardScreen} />
          <Stack.Screen name='Achievement' component={AchievementScreen} />
          <Stack.Screen name='Trophy' component={TrophyScreen} />
          <Stack.Screen
            name='Story'
            component={StoryScreen}
            options={{
              headerShown: false,
              headerTitle: 'Story',
            }}
            initialParams={{ myPropFunction: pauseSound }}
          />
          <Stack.Screen
            name='ExploreGames'
            component={ExploreGamesScreen}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: pauseSound }}
          />
          <Stack.Screen name='GuessEmotion' component={GuessEmotionScreen} />
          <Stack.Screen
            name='GuessEmotionLevel1'
            component={GuessLevel1}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GuessEmotionLevel2'
            component={GuessLevel2}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GuessEmotionLevel3'
            component={GuessLevel3}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GuessEmotionLevel4'
            component={GuessLevel4}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GuessEmotionLevel5'
            component={GuessLevel5}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen name='BehaviorEmotion' component={BehaviorEmotionScreen} />
          <Stack.Screen
            name='BehaviorEmotionLevel1'
            component={BehaviorLevel1}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='BehaviorEmotionLevel2'
            component={BehaviorLevel2}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='BehaviorEmotionLevel3'
            component={BehaviorLevel3}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='BehaviorEmotionLevel4'
            component={BehaviorLevel4}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='BehaviorEmotionLevel5'
            component={BehaviorLevel5}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen name='GoodEmotion' component={GoodEmotionScreen} />
          <Stack.Screen
            name='GoodEmotionLevel1'
            component={GoodEmotionLevel1}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GoodEmotionLevel2'
            component={GoodEmotionLevel2}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GoodEmotionLevel3'
            component={GoodEmotionLevel3}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GoodEmotionLevel4'
            component={GoodEmotionLevel4}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='GoodEmotionLevel5'
            component={GoodEmotionLevel5}
            options={{
              headerShown: false,
              headerTitle: 'ExploreGames',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='AudioBookTalkingWithFriends'
            component={AudioBookTalkingWithFriends}
            options={{
              headerShown: false,
              headerTitle: 'Story',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='AudioBookButterflyGarden'
            component={AudioBookButterflyGarden}
            options={{
              headerShown: false,
              headerTitle: 'Story',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen
            name='AudioBookControllingAnger'
            component={AudioBookControllingAnger}
            options={{
              headerShown: false,
              headerTitle: 'Story',
            }}
            initialParams={{ myPropFunction: playSound }}
          />
          <Stack.Screen name='DailyActivity' component={DailyActivityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,

  },
});
