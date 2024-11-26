import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    initialRouteName="index"
    screenOptions={{
      headerShown : false,
      
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="login" />
      <Stack.Screen name="(tabs)" />
      
    </Stack>
  );
}
