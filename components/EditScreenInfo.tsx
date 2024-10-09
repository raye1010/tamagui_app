import { YStack, Paragraph } from 'tamagui';

export const EditScreenInfo = ({ path }: { path: string }) => {
  return (
    <YStack>
      <YStack alignItems="center" marginHorizontal="$6">
        <YStack borderRadius="$3" marginVertical="$1">
          <Paragraph>Path = "{path}"</Paragraph>
        </YStack>
      </YStack>
    </YStack>
  );
};
