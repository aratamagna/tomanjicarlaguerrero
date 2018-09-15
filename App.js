import React from 'react';
import { Button, Image, FlatList, ActivityIndicator, AppRegistry, Text, View  } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
      source={require('./logo.png')}
      style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#fff' }}
      />
    );
  }
}

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {card: 0};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        if (this.state.card >= images.length-1){
          return { card: 0 };
        }
        return { card: this.state.card+1 };
      });
    }, 5000);
  }

  render() {
    return (
      <Image
      source={images[this.state.card].image}
      style={{ width: 300, height: 300, borderRadius: 150 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Icon.Button name="bars" backgroundColor="#f4511e" onPress={() => {navigation.navigate('Settings')}}></Icon.Button>
    ),
  };

  constructor(props){
    super(props);
    // this.state ={ isLoading: true}
    this.state ={ isLoading: false}
  }

  // componentDidMount(){
  //   return fetch('')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //
  //     this.setState({
  //       isLoading: false,
  //       dataSource: responseJson.movies,
  //     }, function(){
  //
  //     });
  //
  //   })
  //   .catch((error) =>{
  //     console.error(error);
  //   });
  // }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center' }} >
      <HomeSlider/>
      </View>
      <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center' }} >
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Button
      title="Go to Details"
      onPress={() => {
        this.props.navigation.navigate('Recipe', {
          itemId: 0,
          otherParam: '',
        });
      }}
      />
      </View>
      </View>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}

class GameScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}

class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}

class DeliveryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Game: GameScreen,
    Recipe: RecipeScreen,
    Delivery: DeliveryScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const images = [
  {image:require('./public/_FB_IMG_1500684065442.jpg')},
  {image:require('./public/alomacho.gif')},
  {image:require('./public/alomacho2.gif')},
  {image:require('./public/callatevoviejaqla.jpg')},
  {image:require('./public/choche.jpg')},
  {image:require('./public/descarga.jpeg')},
  {image:require('./public/diablosseñorito.jpg')},
  {image:require('./public/dimondo.jpg')},
  {image:require('./public/el-fritanga-632x400.jpg')},
  {image:require('./public/FB_IMG_1535571048594.jpg')},
  {image:require('./public/FB_IMG_1536677932264.jpg')},
  {image:require('./public/felipito.jpg')},
  {image:require('./public/hermano-borra-esa-wea.jpg')},
  {image:require('./public/hoyo-negro.jpg')},
  {image:require('./public/hqdefault.jpg')},
  {image:require('./public/IMG-20170502-WA0060.jpg')},
  {image:require('./public/instintodemadreleona.jpg')},
  {image:require('./public/jueguesumu.gif')},
  {image:require('./public/lacalila.jpg')},
  {image:require('./public/nancy.jpg')},
  {image:require('./public/niñopoeta.gif')},
  {image:require('./public/paso.jpg')},
  {image:require('./public/porfavorayudeme.jpg')},
  {image:require('./public/quebrutal.jpg_large.jpg')},
  {image:require('./public/shrek.jpg')},
  {image:require('./public/sientatemierda.jpg')},
  {image:require('./public/WhatsAppImage2018-09-11.jpeg')},
  // {image:require('')},
  // {image:require('')}
]

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
