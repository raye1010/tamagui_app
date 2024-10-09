import React, { useState } from 'react';
import { AlertDialog, Button, Switch, XStack, YStack } from 'tamagui';
import { ListItem, ScrollView } from 'tamagui';
import { GestureResponderEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

type TUser = {
  id: number;
  name: string;
};

const Properties = () => {
  const [data, setData] = useState<TUser[]>(
    Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      name: `User #${i + 1}`,
    }))
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   if (loading) return
  //   setLoading(true)
  //   // Replace with your API call
  //   const newData = await fetchMoreData(page)
  //   setData([...data, ...newData])
  //   setPage(page + 1)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    //   const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    //   const paddingToBottom = 20
    //   if (layoutMeasurement.height + contentOffset.y >=
    //       contentSize.height - paddingToBottom) {
    //     fetchData()
    //   }
  };

  const [userIdSelected, setUserIdSelected] = useState<number>(-1);
  const onPress: (event: GestureResponderEvent, user: TUser) => void = (event, user) => {
    // console.log(user.id);
    setUserIdSelected(user.id);
  };

  const userSelected = data.filter((u) => u.id == userIdSelected)?.at(0)?.name ?? '__';

  const [selected, setSelected] = useState<number[]>([]);
  const onCheckedChange = (checked: boolean, id: number) => {
    if (checked) {
      setSelected((_selected) => {
        return [..._selected, id];
      });
    } else {
      setSelected((_selected) => {
        return _selected.filter((v) => v != id);
      });
    }
  };
  //   console.log('selected', selected);

  return (
    <>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
        <YStack>
          {data.map((user) => {
            // console.log('selected', selected);
            var checked = selected.find((i) => i == user.id) ?? -1;
            // console.log(`${user.id}:`, checked);
            return (
              <ListItem
                key={user.id}
                //   onPress={(e) => onPress(e, user)}
              >
                {user.name}
                <Switch
                  id={user.id.toString()}
                  native
                  onCheckedChange={(checked) => onCheckedChange(checked, user.id)}
                  checked={checked > 0}>
                  <Switch.Thumb animation="quick" />
                </Switch>
              </ListItem>
            );
          })}
          {/* {loading && <Spinner />} */}
        </YStack>
      </ScrollView>
      <AlertDialog
        native
        open={userIdSelected > 0}
        onOpenChange={(open) => {
          if (!open) setUserIdSelected(-1);
        }}>
        <AlertDialog.Trigger />
        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}>
            <YStack space>
              {/* <AlertDialog.Title>Accept</AlertDialog.Title> */}
              <AlertDialog.Description>{`You selected ${userSelected}`}</AlertDialog.Description>
              <XStack gap="$3" justifyContent="flex-end">
                <AlertDialog.Action asChild>
                  <Button theme="active">確定</Button>
                </AlertDialog.Action>
                <AlertDialog.Cancel asChild>
                  <Button>取消</Button>
                </AlertDialog.Cancel>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </>
  );
};

export default Properties;
