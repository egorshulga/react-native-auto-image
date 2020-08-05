import React, { Component } from 'react';
import AutoImage from 'react-native-auto-image';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';

import image from './assets/image.png';

export default class App extends Component {
  state = {
    dynamicMainAxisSize: 200
  };

  handleTextInputChange = (text) => {
    const mainAxisSize = Number(text);
    if (!Number.isNaN(mainAxisSize)) {
      this.setState({ dynamicMainAxisSize: mainAxisSize });
    }
  };

  render() {
    const { dynamicMainAxisSize } = this.state;
    return (
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollViewContentContainer}
      >
        {/* <TextInput
          value={String(dynamicMainAxisSize)}
          keyboardType="numeric"
          style={styles.textInputStyle}
          onChangeText={this.handleTextInputChange}
        />
        <Text>Basic example</Text>
        <AutoImage
          mainAxisSize={100}
          source={{ uri: 'http://placehold.it/350x150' }}
        />
        <Text>Basic example (vertical)</Text>
        <AutoImage
          mainAxisSize={100}
          mainAxis='vertical'
          source={{ uri: 'http://placehold.it/350x150' }}
        /> */}
        <Text>Basic example with local image</Text>
        <AutoImage mainAxisSize={100} source={image} />
        {/* <Text>Basic example with local image (vertical)</Text>
        <AutoImage mainAxisSize={100} mainAxis='vertical' source={image} /> */}
        {/* <Text>Basic example with dynamic mainAxisSize</Text>
        <AutoImage
          mainAxisSize={dynamicMainAxisSize}
          maxCrossAxisSize={300}
          source={{ uri: 'http://placehold.it/350x150' }}
        />
        <Text>Basic example with dynamic mainAxisSize and local image</Text>
        <AutoImage mainAxisSize={dynamicMainAxisSize} source={image} />
        <Text>Wrong image</Text>
        <AutoImage
          mainAxisSize={100}
          source={{ uri: 'https://vivaxy.github.io/404' }}
          onError={(error) => {
            console.log('----- onError', error);
          }}
        />
        <Text>Wrong image with fallback</Text>
        <AutoImage
          mainAxisSize={100}
          source={{ uri: 'https://vivaxy.github.io/404' }}
          fallbackSource={{ uri: 'http://placehold.it/350x150' }}
          onError={(error) => {
            console.log('----- onError', error);
          }}
        />
        <Text>Wrong image with local fallback</Text>
        <AutoImage
          mainAxisSize={100}
          source={{ uri: 'https://vivaxy.github.io/404' }}
          fallbackSource={image}
          onError={(error) => {
            console.log('----- onError', error);
          }}
        /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  scrollViewContentContainer: {
    alignItems: 'center',
    paddingTop: 100
  },
  textInputStyle: {
    mainAxisSize: 300,
    crossAxisSize: 30,
    borderStyle: 'solid',
    borderColor: '#eee',
    borderMainAxisSize: 1
  }
});
