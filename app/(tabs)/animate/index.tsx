import { Stack, Link, useLocalSearchParams } from 'expo-router';
import { Button, Square, useControllableState, useEvent } from 'tamagui';
import { Container } from '~/tamagui.config';

export default function AnimationsDemo(props: any) {
  const [positionI, setPositionI] = useControllableState({
    strategy: 'most-recent-wins',
    prop: props.position,
    defaultProp: 0,
  });
  const position = positions[positionI];
  const onPress = useEvent(() => {
    setPositionI((x: number) => {
      return (x + 1) % positions.length;
    });
  });

  return (
    <>
      <Container>
        <Square
          animation={(props.animation || 'bouncy') as any}
          animateOnly={['transform']}
          onPress={onPress}
          size={104}
          borderColor="$borderColor"
          borderWidth={1}
          borderRadius="$9"
          backgroundColor="$color9"
          hoverStyle={{
            scale: 1.5,
          }}
          pressStyle={{
            scale: 0.9,
          }}
          {...position}>
          {props.children}
        </Square>
      </Container>
    </>
  );
}

export const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: '0deg',
  },
  {
    x: -50,
    y: -50,
    scale: 0.5,
    rotate: '-45deg',
    hoverStyle: {
      scale: 0.6,
    },
    pressStyle: {
      scale: 0.4,
    },
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: '180deg',
    hoverStyle: {
      scale: 1.1,
    },
    pressStyle: {
      scale: 0.9,
    },
  },
];
