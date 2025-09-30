import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodEntry } from '../models/mood';

interface Props {
  entry: MoodEntry;
}

const MoodListItem: FC<Props> = ({ entry }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>
      {entry.mood} — {new Date(entry.date).toLocaleString()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e5e7eb', // gray-200
    padding: 8,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 18,
  },
});

export default MoodListItem;
