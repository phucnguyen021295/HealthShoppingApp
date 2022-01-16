import React, {PureComponent} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  Dimensions,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';

// Components
import {SemiBoldText} from '../../../../base/components/Text';

// Apis
import {getNewHomeApi} from '../../../../apis/health';
import {heightToDP, widthToDP} from '../../../../core/utils/dimension';
import LinearGradient from 'react-native-linear-gradient';

const ENTRIES1 = [
  {
    time: '1612685842',
    title: '',
    brief: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    des: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image150: '',
    image500: '',
  },
  {
    time: '1612685842',
    title: '',
    brief: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    des: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    image150: '',
    image500: '',
  },
];
const {width: screenWidth} = Dimensions.get('window');

class MyCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      entries: ENTRIES1,
    };

    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    getNewHomeApi({}, (response) => {
      const {data} = response;
      if (data.length === 0) {
        return;
      }
      const {items, total} = data;
      this.setState({entries: items.slice(0, 5)});
    });
  }

  onDetailNew = (item) => {
    this.props.navigation.navigate('NewDetail', {item});
  };

  _renderItem({item, index}, parallaxProps) {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => this.onDetailNew(item)}>
        <ParallaxImage
          source={{uri: item.image500}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0}
          {...parallaxProps}
        />
        <SemiBoldText style={styles.title} numberOfLines={2}>
          {item.title}
        </SemiBoldText>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.linearGradient}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const {entries} = this.state;
    return (
      <Carousel
        sliderWidth={screenWidth - widthToDP(6)}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - widthToDP(46)}
        data={entries}
        renderItem={this._renderItem}
        hasParallaxImages={true}
      />
    );
  }
}

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    width: screenWidth - widthToDP(46),
    height: widthToDP(150),
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: '#dddddd',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    color: '#ffffff',
    position: 'absolute',
    bottom: widthToDP(12),
    left: 20,
    width: screenWidth - widthToDP(100),
    zIndex: 11,
  },

  linearGradient: {
    position: 'absolute',
    bottom: 0,
    height: widthToDP(100),
    width: '100%',
    zIndex: 10,
    borderRadius: 8,
  },
});
