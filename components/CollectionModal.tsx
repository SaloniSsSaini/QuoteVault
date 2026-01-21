import { View, Text, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

type Props = {
  visible: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
};

export default function CollectionModal({
  visible,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            margin: 20,
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            New Collection
          </Text>

          <TextInput
            placeholder="Collection name"
            value={name}
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 10,
              marginBottom: 10,
            }}
          />

          <Button
            title="Create"
            onPress={() => {
              onCreate(name);
              setName('');
              onClose();
            }}
          />

          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
