import { View, Text, Pressable, TextInput, Button, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Link } from 'expo-router';
import { account, appwriteID } from '../lib/appwrite-service'

export default function Profile() {
    return (
        <LinearGradient colors={[theme.colors.primarydark, theme.colors.secondarydark]} locations={[0.4, 0.95]} style={{flex: 1}}>
            <SafeAreaView className="flex-1">
                <StatusBar hidden={true}/> 
                <View className="w-full h-40 items-center justify-center">
                <View style={{ 
                    position: 'absolute', 
                    width: 80, 
                    height: 80, 
                    backgroundColor: 'blue', 
                    borderRadius: 40,
                    top: '50%',
                    left: '50%',
                    transform: [{ translateX: -40 }, { translateY: -40 }]
                }} />
                <View style={{ 
                    position: 'absolute', 
                    width: 24, 
                    height: 24, 
                    backgroundColor: 'green', 
                    borderRadius: 16, 
                    borderWidth: 2, 
                    borderColor: 'white',
                    top: '60%',
                    left: '52%'
                }} />
            </View>
                <View style={{marginTop: -10}} className="flex-row h-22 relative justify-center items-center">
                <Text className='text-center color-white text-3xl'>Profile Name</Text>
                </View>
                <View className="flex-row h-22 justify-center items-center">
                <Text className='color-white text-base mt-2'>"this is the bio section"</Text>
                </View>
                <View className="flex-row h-22 justify-center items-center">
                <Text className='color-secondary text-xl mt-2'>University of Waterloo</Text>
                </View>
                <View className="flex-row h-22 justify-center items-center">
                <Text className='color-purple-600 text-xl'>Academic Weapon</Text>
                <Text className='color-secondary text-xl ms-3'>4096</Text>
                <View className="bg-secondary w-3 aspect-square rounded-full m-3"/>
                </View>
                <View className="flex-row h-22 justify-center items-center">
                <Text className='color-green-500 text-base'>Currently Studying:</Text>
                <Text className='color-green-500 text-base ms-3'>ECE 106</Text>
                </View>
                <View className="flex-row h-22 mt-9 items-center">
                <Text className='color-white text-base ml-3'>Current Courses:</Text>
                <Text className='color-secondary text-base ms-3'>ECE 106, ECE 124, MAT 119, GENE 120</Text>
                </View>
                <View className="flex-row h-22 mt-2 items-center">
                <Text className='color-white text-base ml-3'>Favourite Study Methods:</Text>
                <Text className='color-secondary text-base ms-3'>Pomodoro, Notes Re-Writing</Text>
                </View>
                <View className="flex-row h-22 mt-2 items-center">
                <Text className='color-white text-base ml-3'>Achievements:</Text>
                </View>
                <View className='justify-center mt-6 items-center'>
                    <View className='bg-white h-32 w-5/6'/>
                </View>
                <View className='justify-center mt-6 items-center'>
                    <View className='bg-white h-32 w-5/6'/>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}