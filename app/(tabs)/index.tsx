import { useRouter } from 'expo-router';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen: FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Tracker</Text>

      <TouchableOpacity style={styles.buttonBlue} onPress={() => router.push('/add-mood')}>
        <Text style={styles.buttonText}>Log Mood</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGreen} onPress={() => router.push('/history')}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb', // gray-50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonBlue: {
    backgroundColor: '#3b82f6', // blue-500
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 16,
  },
  buttonGreen: {
    backgroundColor: '#22c55e', // green-500
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
