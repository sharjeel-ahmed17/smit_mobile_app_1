import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>home screen</Text>
      <Link href={`/notification`}><Text>got to notify</Text></Link>
      <Link href={`/login`}><Text>got to login</Text></Link>
      {/* <Link href={'/login'}></Link> */}
    </View>
  );
}
