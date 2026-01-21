import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { signUp } from '@/services/auth.service';
import { router } from 'expo-router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const { error } = await signUp(email, password);
    if (error) Alert.alert(error.message);
    else router.replace('/(tabs)');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Signup</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Create Account" onPress={handleSignup} />
    </View>
  );
}
