/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';

const data = [
  {
    id: '1',
    title: 'Hello Swiper',
    description: 'Hello Swiper',
    logo: '',
    backgroundColor: '#97CAE5',
  },
  {
    id: '2',
    title: 'Beautiful',
    description: 'Beautiful',
    logo: '',
    backgroundColor: '#97CAE5',
  },
  {
    id: '3',
    title: 'And simple',
    description: 'And simple',
    logo: '',
    backgroundColor: '#92BBD9',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onIndexChanged = (index) => {
    if (index === data.length) {
      // Navigate login
      return;
    }
    this.setState({index});
    console.log('index', index);
  };

  onPress = () => {
    const {index} = this.state;
    if (index === data.length - 1) {
      // Navigate login
      return;
    }
    console.log('onPress', index);
    this.setState((state) => ({
      index: state.index + 1,
    }));
  };

  render() {
    const {index} = this.state;
    const isCheck = index === data.length - 1;
    console.log('render', index);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1}}>
          <Swiper
            style={styles.wrapper}
            index={index}
            onIndexChanged={this.onIndexChanged}
            loop={false}>
            {data.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.slide1,
                  {backgroundColor: item.backgroundColor},
                ]}>
                <Text style={styles.text}>{item.description}</Text>
              </View>
            ))}
          </Swiper>
          <Button
            title={isCheck ? 'Bắt đầu' : 'Tiếp tục'}
            containerStyle={{position: 'absolute', bottom: 100, right: 0}}
            onPress={this.onPress}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
