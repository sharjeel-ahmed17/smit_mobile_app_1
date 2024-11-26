import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Courses() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Courses</Text>
      <TouchableOpacity onPress={() => router.push('/events')}>
        <Text>Go to Events</Text>
      </TouchableOpacity>
    </View>
  );
}
