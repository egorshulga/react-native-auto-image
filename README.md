# react-native-auto-image

Inspired by [vivaxy/react-native-auto-height-image](https://github.com/vivaxy/react-native-auto-height-image)

[![NPM Version](http://img.shields.io/npm/v/react-native-auto-image.svg?style=flat-square)](https://www.npmjs.com/package/react-native-auto-image)
[![NPM Downloads](https://img.shields.io/npm/dt/react-native-auto-image.svg?style=flat-square)](https://www.npmjs.com/package/react-native-auto-image)
[![MIT License](https://img.shields.io/npm/l/react-native-auto-image.svg?style=flat-square)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![Financial Contributors on Open Collective](https://opencollective.com/react-native-auto-image/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-native-auto-image)

This component provides you a simple way to load a remote image and automatically set `Image` crossAxisSize to the image dimension which fits the provided mainAxisSize.

ReactNative `Image` component needs users to set both `mainAxisSize` and `crossAxisSize` props.

## Installation

`yarn add react-native-auto-image`

`npm install react-native-auto-image`

## Usage

Use local or remote files:

```js
import React, { Component } from 'react';
import AutoImage from 'react-native-auto-image';

import image from 'gallifrey-falls.png';

export default class Demo extends Component {
  render() {
    return (
      <View>

        <AutoImage
          mainAxisSize={100}
          mainAxis='horizontal'
          source={image}
        />

        <AutoImage
          mainAxisSize={100}
          mainAxis='vertical'
          source={{uri: 'http://placehold.it/350x150'}}
        />

      </View>
    );
  }
}
```

You can even specify fallback images for when the source fails to load:

```js
import React, { Component } from 'react';
import AutoImage from 'react-native-auto-image';

import image from 'gallifrey-falls.png';

export default class Demo extends Component {
  render() {
    return (
      <AutoImage
        mainAxisSize={100}
        source={{uri: 'https://vivaxy.github.io/404'}}
        fallbackSource={image}
      />
    );
  }
}
```

### Props

| name               | type             | isRequired    | default           | description                                                           |
| ---                | ---              | ---           | ---               | ---                                                                   |
| `mainAxisSize`            | number           | ✔             | N/A               | image mainAxisSize to fit                                                    |
| `mainAxis`            | 'horizontal'|'vertical'           | ✔             | N/A               | main axis                                                    |
| `maxCrossAxisSize`            | number           | ✖             | `Infinity`               | image max crossAxisSize                                                    |
| `source`           | number or object | ✔             | N/A               | local (i.e. require/import) or remote image ({uri: '...'})            |
| `fallbackSource`   | number or object | ✖             | N/A               | local (i.e. require/import) or remote image ({uri: '...'})            |
| `onCrossAxisSizeChange`   | func             | ✖             | `(crossAxisSize) => {}`    | called when updating image crossAxisSize, the argument `crossAxisSize` might be `0` |
| `animated`        | bool              | ✖              | `false`               | Use `Animated.Image` instead of `Image` |

Other image props except `resizeMode` are accepted.

## Change Log

[Change log](./CHANGELOG.md)

## Contributing

[Contributing](./CONTRIBUTING.md)

## Licence

[MIT](./LICENSE)
