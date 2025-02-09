import { View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme';
import { StatusBar } from 'expo-status-bar';


export default function Login() {
  return (
    <LinearGradient colors={[theme.colors.secondary, theme.colors.primary]} style={{flex: 1}}>
        <SafeAreaView className='flex-1 justify-center items-center'>
            <StatusBar hidden={true}/> 
            <View className='bg-white rounded-3xl w-10/12 p-6 px-8'>
                <Text className="text-gray-800 mb-6 font-bold text-3xl">Login</Text>
                <TextInput className='border border-black rounded-md p-4 mb-6 w-full' placeholder='Email'/>
                <TextInput className='border border-black rounded-md p-4 mb-6 w-full' placeholder='Password'/>
            </View>
        </SafeAreaView>
    </LinearGradient>
  );
}
