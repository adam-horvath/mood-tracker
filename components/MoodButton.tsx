import { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

const MoodButton: FC<Props> = ({ label, onPress, buttonStyle, buttonTextStyle }) => {
  return (
    <TouchableOpacity style={buttonStyle ?? styles.item} onPress={onPress}>
      <Text style={buttonTextStyle ?? styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e5e7eb', // gray-200
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    minWidth: 120,
  },
  itemText: {
    fontSize: 18,
  },
});

export default MoodButton;
