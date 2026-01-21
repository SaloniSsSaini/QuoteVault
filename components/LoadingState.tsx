import { View, ActivityIndicator, Text } from 'react-native';

export default function LoadingState({
  message = 'Loading...',
}: {
  message?: string;
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 10 }}>{message}</Text>
    </View>
  );
}
