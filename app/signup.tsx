import { View, Text, Pressable, TextInput, Button, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Link } from 'expo-router';
import { account, appwriteID } from '../lib/appwrite-service'

export default function Signup() {
  const [remembered, setRemembered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

    const signup = async () => {
        await account.create(appwriteID.unique(), email, password, name);
    }

  return (
    <LinearGradient colors={[theme.colors.secondarydark, theme.colors.primarydark]} style={{flex: 1}}>
        <SafeAreaView className='flex-1 justify-center items-center'>
            <StatusBar hidden={true}/> 
            <View className='bg-none rounded-3xl w-11/12 p-6 px-8'>
                <Text className=" color-gray-300 mb-6 font-bold text-3xl">Create Account</Text>
                <TextInput className='border border-gray-300 rounded-md p-4 mb-6 w-full' placeholderTextColor={'#6b7280'} placeholder='Name' value={name} onChangeText={setName} autoCorrect={false}/>
                <TextInput className='border border-gray-300 rounded-md p-4 mb-6 w-full' placeholderTextColor={'#6b7280'} placeholder='Email' value={email} onChangeText={setEmail} inputMode='email' autoCorrect={false}/>
                <TextInput className='border border-gray-300 rounded-md p-4 mb-6 w-full' placeholderTextColor={'#6b7280'} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true}/>
                <View className='flex flex-row items-center mb-4'>
                  <Switch
                      trackColor={{false: '#666666', true: theme.colors.secondary}}
                      thumbColor={remembered? theme.colors.primary : '#565756'}
                      onValueChange={()=> setRemembered(!remembered)}
                      value={remembered}
                    />
                  <Text className='color-gray-300 ml-1'>Remember Me</Text>
                  <View className='ml-auto rounded-3xl'>
                    <LinearGradient className='rounded-md' colors={[theme.colors.secondary, theme.colors.primary]} start={{x:0, y:0}} end={{x:1, y:1}}>
                      <Pressable className='ml-0.5 mr-0.5 mb-0.5 mt-0.5 bg-[rgba(0,0,0,0.7)] rounded-md' onPress={signup}>
                          <Text className='color-gray-300 ps-2 pr-2 text-xl'>SIGN UP</Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                </View>
                <View className='flex flex-row items-center'>
                    <Link href='/' style={{color: theme.colors.primary}}>Terms & Conditions</Link>
                    <Link href='/login' className='ml-auto' style={{color: theme.colors.primary}}>Login</Link>
                </View>
            </View>
        </SafeAreaView>
    </LinearGradient>
  );
}
