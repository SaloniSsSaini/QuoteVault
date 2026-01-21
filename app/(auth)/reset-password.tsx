import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { resetPassword } from '@/services/auth.service';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    const { error } = await resetPassword(email);
    if (error) Alert.alert(error.message);
    else Alert.alert('Reset email sent');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Reset Password</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <Button title="Send" onPress={handleReset} />
    </View>
  );
}
