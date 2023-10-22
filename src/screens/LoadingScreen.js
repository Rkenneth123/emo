import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen({ navigation }) {
  const handlePress = async () => {
    try {
      const name = await AsyncStorage.getItem('Name');
      const gender = await AsyncStorage.getItem('Gender');
      if (gender && name) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate('Landing');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/NewAssets/StartPage/LoadingScreen.png')}
      style={styles.backgroundImage}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={require('../../assets/NewAssets/StartPage/PlayButton.png')}
            style={styles.image2}
          />
        </TouchableOpacity>
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
  image2: {
    margin: 0,
    height: 50,
    width: 100,
    marginTop: 300,
    marginBottom: 80
  },
});
