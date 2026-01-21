import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { signIn } from '@/services/auth.service';
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await signIn(email, password);
    if (error) Alert.alert(error.message);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <Button title="Login" onPress={handleLogin} />

      <Link href="/(auth)/signup">Create Account</Link>
      <Link href="/(auth)/reset-password">Forgot Password?</Link>
    </View>
  );
}
