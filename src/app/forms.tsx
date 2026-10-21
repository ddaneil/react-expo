import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { halloweenStyles } from '@/constants/globalStyles'

export default function SimpleSpookyForm() {
  // 1. Establish state variables for your inputs
  const [username, setUsername] = useState('');
  const [secretCode, setSecretCode] = useState('');

  // 2. Handle form submission logic
  const handleSubmission = () => {
    if (!username || !secretCode) {
      Alert.alert('Cursed Input!', 'Please fill out both fields before casting your spell.');
      return;
    }

    Alert.alert('Success!', `Welcome to the crypt, ${username}! Your secret code has been accepted.`);
    
    // Clear the form fields after successful submission
    setUsername('');
    setSecretCode('');
  };

  return (
    <View style={halloweenStyles.container}>
        <View style={halloweenStyles.cryptCard}>
        <Text style={halloweenStyles.ghostlySubheader}>Summoner Registration</Text>

        {/* Username Input Field */}
        <Text style={halloweenStyles.simpleLabel}>Summoner Name</Text>
        <TextInput
            style={halloweenStyles.cauldronInput}
            placeholder="e.g. GhostRider"
            placeholderTextColor="#555"
            value={username}
            onChangeText={(text) => setUsername(text)} // Updates state on type
            autoCapitalize="words"
            />

        {/* Secret Code Input Field */}
        <Text style={halloweenStyles.simpleLabel}>Secret Passcode</Text>
        <TextInput
            style={halloweenStyles.cauldronInput}
            placeholder="••••••••"
            placeholderTextColor="#555"
            secureTextEntry={true} // Obscures text entry for safety
            value={secretCode}
            onChangeText={(text) => setSecretCode(text)} // Updates state on type
            autoCapitalize="none"
            />

        {/* Submit Action Button */}
        <Pressable 
            style={({ pressed }) => [
                halloweenStyles.pumpkinButton,
                pressed && halloweenStyles.buttonPressed
            ]}
            onPress={handleSubmission}
            >
            <Text style={halloweenStyles.pumpkinButtonText}>Register</Text>
        </Pressable>
        </View>
    </View>
  );
}