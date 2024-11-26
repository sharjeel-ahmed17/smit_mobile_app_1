import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

export default function Login(){
    const router = useRouter();
    return(
        <>
        <Text>login</Text>
    <Button title="go to tab" onPress={()=>router.push('/courses')}></Button>
        </>
    )
}