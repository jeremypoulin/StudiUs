import { View } from 'react-native';
import "../global.css";
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View className='items-center justify-center flex-1'>
      <Link className='text-3xl justify-center items-center align-middle' href="/login">Login</Link>
      <Link className='text-3xl justify-center items-center align-middle' href="/profile">Profile</Link>
    </View>
  );
}
