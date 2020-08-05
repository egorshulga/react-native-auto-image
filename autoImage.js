/**
 * @since 2017-04-11 19:10:08
 * @author vivaxy
 */
import React, { useEffect, useState, useRef } from 'react';
import ImagePolyfill from './imagePolyfill';
import AnimatableImage from './animatableImage';
import PropTypes from 'prop-types';

import { getImageSizeFitMainAxisSize, getImageSizeFitMainAxisSizeFromCache } from './cache';
import { NOOP, DEFAULT_SIZE } from './helpers';

// remove `resizeMode` props from `Image.propTypes`
const { resizeMode, ...ImagePropTypes } = AnimatableImage.propTypes;

function AutoImage(props) {
  const { onCrossAxisSizeChange, source, mainAxis: mainAxisProp, mainAxisSize, style, maxCrossAxisSize, ...rest } = props;
  const mainAxis = mainAxisProp ?? 'horizontal';

  const [crossAxisSize, setCrossAxisSize] = useState(
    getImageSizeFitMainAxisSizeFromCache(source, mainAxis, mainAxisSize, maxCrossAxisSize).crossAxisSize ||
    DEFAULT_SIZE
  );
  const mountedRef = useRef(false);

  useEffect(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);

  useEffect(
    function () {
      (async function () {
        const size = await getImageSizeFitMainAxisSize(source, mainAxis, mainAxisSize, maxCrossAxisSize);
        const newCrossAxisSize = mainAxis === 'horizontal' ? size.height : size.width
        if (mountedRef.current) {
          // might trigger `onCrossAxisSizeChange` with same `crossAxisSize` value
          // dedupe maybe?
          setCrossAxisSize(newCrossAxisSize);
          onCrossAxisSizeChange(newCrossAxisSize);
        }
      })();
    },
    [source, mainAxis, onCrossAxisSizeChange, mainAxisSize, maxCrossAxisSize]
  );

  // StyleSheet.create will cache styles, not what we want
  const imageStyles = mainAxis === 'horizontal' ?
    { width: mainAxisSize, height: crossAxisSize } :
    { width: crossAxisSize, height: mainAxisSize };

  // Since it only makes sense to use polyfill with remote images
  const ImageComponent = source.uri ? ImagePolyfill : AnimatableImage;
  return (
    <ImageComponent source={source} style={[imageStyles, style]} {...rest} />
  );
}

AutoImage.propTypes = {
  ...ImagePropTypes,
  mainAxisSize: PropTypes.number.isRequired,
  mainAxis: PropTypes.oneOf(['horizontal', 'vertical']),
  maxCrossAxisSize: PropTypes.number,
  onCrossAxisSizeChange: PropTypes.func,
  animated: PropTypes.bool
};

AutoImage.defaultProps = {
  maxCrossAxisSize: Infinity,
  onCrossAxisSizeChange: NOOP,
  animated: false
};

export default AutoImage;
