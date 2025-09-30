import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { FC } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import MoodButton from '../../components/MoodButton';
import { Mood, MoodEntry } from '../../models/mood';

const moods: Mood[] = ['😀 Happy', '😢 Sad', '😡 Angry', '😴 Tired', '🤩 Excited'];

const AddMoodScreen: FC = () => {
  const router = useRouter();

  const saveMood = async (mood: Mood) => {
    try {
      const newEntry: MoodEntry = { id: uuidv4(), mood, date: new Date().toISOString() };

      const existing = await AsyncStorage.getItem('moods');
      const parsed: MoodEntry[] = existing ? JSON.parse(existing) : [];
      const updated = [...parsed, newEntry];

      await AsyncStorage.setItem('moods', JSON.stringify(updated));
      Alert.alert('Saved!', `Mood logged: ${mood}`);
      router.back();
    } catch (e) {
      console.error('Failed to save mood', e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {moods.map((m) => (
        <MoodButton key={m} label={m} onPress={() => saveMood(m)} />
      ))}
    </View>
  );
};

export default AddMoodScreen;
