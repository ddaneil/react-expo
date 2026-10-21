import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { halloweenStyles } from '../constants/globalStyles';

export default function Index() {
  return (
    <View style={halloweenStyles.container}>
      {/* Basic Link acting as a button
      <Link href="https://expo.dev" style={styles.button}>
        <Text style={styles.buttonText}>Open Expo Website</Text>
      </Link> */}

      <Text style={halloweenStyles.spookyHeader}>SELECTION MENU</Text>

      {/* Internal App Route */}
      <Link href="/forms" style={halloweenStyles.pumpkinButton}>
        <Text style={halloweenStyles.pumpkinButtonText}>Forms</Text>
      </Link>

      <Link href="/loadingAndPullRefresh" style={halloweenStyles.pumpkinButton}>
        <Text style={halloweenStyles.pumpkinButtonText}>Loading and Pull Refresh</Text>
      </Link>
    </View>
  );
}

