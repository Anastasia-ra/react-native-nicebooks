import 'react-native-gesture-handler';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RandomQuotes from './screens/RandomQuotes';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'https://nicebooks-backend.herokuapp.com/api/graphql', // '/graphql',
  credentials: 'same-origin', // 'include',
});

const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
      notifyOnNetworkStatusChange: true,
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'ignore',
      fetchPolicy: 'network-only',
    },
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RandomQuotes" component={RandomQuotes} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
