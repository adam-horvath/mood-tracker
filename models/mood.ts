export type Mood = "😀 Happy" | "😢 Sad" | "😡 Angry" | "😴 Tired" | "🤩 Excited";

export interface MoodEntry {
  id: string;
  mood: Mood;
  date: string;
}
