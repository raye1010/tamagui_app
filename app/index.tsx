import { Href, Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href={'/(tabs)/home' as Href<any>} />;
}