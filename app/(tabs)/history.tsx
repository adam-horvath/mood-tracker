import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { FC, useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import MoodButton from '../../components/MoodButton';
import MoodListItem from '../../components/MoodListItem';
import { MoodEntry } from '../../models/mood';

const HistoryScreen: FC = () => {
  const [history, setHistory] = useState<MoodEntry[]>([]);

  const loadMoods = async () => {
    const stored = await AsyncStorage.getItem('moods');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadMoods();
    }, [])
  );

  const clearHistory = () => {
    AsyncStorage.setItem('moods', '[]');
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Mood History</Text>
        <MoodButton
          label={'Clear History'}
          onPress={clearHistory}
          buttonStyle={styles.clearButton}
          buttonTextStyle={styles.clearButtonText}
        />
      </View>
      {history.length === 0 ? (
        <Text>No moods logged yet.</Text>
      ) : (
        <FlatList data={history} keyExtractor={(i) => i.id} renderItem={({ item }) => <MoodListItem entry={item} />} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearButton: {
    borderColor: '#dd3333',
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  clearButtonText: {
    color: '#dd3333',
    fontWeight: 600,
  },
});

export default HistoryScreen;
