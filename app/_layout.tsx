import config from '~/tamagui.config';
import { TamaguiProvider, XStack, Text, YStack } from 'tamagui';
import { Slot } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const RootLayout = () => {
  const { top: statusBarHeight } = useSafeAreaInsets(); // Get safe area insets

  return (
    <TamaguiProvider config={config}>
      <YStack backgroundColor="#bbac84" height={statusBarHeight} />
      <XStack
        minHeight={50}
        space="$2"
        padding="$2"
        backgroundColor="#bbac84"
        justifyContent="space-between" // Distribute space between items
        alignItems="center" // Center items vertically
      >
        <Text color="white" fontWeight="bold">
          Left
          Left
        </Text>
        <Text color="white" fontWeight="bold">
          Center
          Center
        </Text>
        <Text color="white" fontWeight="bold">
          Right
        </Text>
      </XStack>
      <Slot />
    </TamaguiProvider>
  );
};

export default RootLayout;
