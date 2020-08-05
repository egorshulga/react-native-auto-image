# react-native-auto-crossAxisSize-image

Initialized by [vivaxy/gt-npm-package](https://github.com/vivaxy/gt-npm-package)

[![NPM Version](http://img.shields.io/npm/v/react-native-auto-crossAxisSize-image.svg?style=flat-square)](https://www.npmjs.com/package/react-native-auto-crossAxisSize-image)
[![NPM Downloads](https://img.shields.io/npm/dt/react-native-auto-crossAxisSize-image.svg?style=flat-square)](https://www.npmjs.com/package/react-native-auto-crossAxisSize-image)
[![MIT License](https://img.shields.io/npm/l/react-native-auto-crossAxisSize-image.svg?style=flat-square)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![Financial Contributors on Open Collective](https://opencollective.com/react-native-auto-crossAxisSize-image/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-native-auto-crossAxisSize-image)

This component provides you a simple way to load a remote image and automatically set `Image` crossAxisSize to the image dimension which fits the provided mainAxisSize.

ReactNative `Image` component needs users to set both `mainAxisSize` and `crossAxisSize` props.

## Installation

`yarn add react-native-auto-crossAxisSize-image`

`npm install react-native-auto-crossAxisSize-image`

## Usage

Use local or remote files:

```js
import React, { Component } from 'react';
import AutoImage from 'react-native-auto-crossAxisSize-image';

import image from 'gallifrey-falls.png';

export default class Demo extends Component {
  render() {
    return (
      <View>

        <AutoImage
          mainAxisSize={100}
          source={image}
        />

        <AutoImage
          mainAxisSize={100}
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
import AutoImage from 'react-native-auto-crossAxisSize-image';

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

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/vivaxy/react-native-auto-crossAxisSize-image/graphs/contributors"><img src="https://opencollective.com/react-native-auto-crossAxisSize-image/contributors.svg?mainAxisSize=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/react-native-auto-crossAxisSize-image/contribute)]

#### Individuals

<a href="https://opencollective.com/react-native-auto-crossAxisSize-image"><img src="https://opencollective.com/react-native-auto-crossAxisSize-image/individuals.svg?mainAxisSize=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/react-native-auto-crossAxisSize-image/contribute)]

<a href="https://opencollective.com/react-native-auto-crossAxisSize-image"><img src="https://opencollective.com/react-native-auto-crossAxisSize-image/organization.svg?mainAxisSize=890"></a>

## Related Projects

- [react-native-scalable-image](https://github.com/ihor/react-native-scalable-image)
- [react-native-fit-image](https://github.com/huiseoul/react-native-fit-image)
- [react-native-responsive-image-view](https://github.com/wKovacs64/react-native-responsive-image-view)
