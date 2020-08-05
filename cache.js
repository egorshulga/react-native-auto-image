/**
 * @since 2017-04-24 20:50:41
 * @author vivaxy
 */

import { Image } from 'react-native';
// undocumented but part of react-native; see
// https://github.com/facebook/react-native/issues/5603#issuecomment-297959695
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

/**
 * store with
 *  key: image
 *  value: {
 *      width: 100,
 *      height: 100,
 *  }
 */
const cache = new Map();

const getImageSizeFromCache = (image) => {
  if (typeof image === 'number') {
    return cache.get(image);
  } else {
    return cache.get(image.uri);
  }
};

const loadImageSize = (image) => {
  return new Promise((resolve, reject) => {
    //number indicates import X or require(X) was used (i.e. local file)
    if (typeof image === 'number') {
      const { width, height } = resolveAssetSource(image);
      resolve({ width, height });
    } else {
      Image.getSize(
        image.uri,
        (width, height) => {
          // success
          resolve({ width, height });
        },
        reject
      );
    }
  });
};

export const getImageSizeFitMainAxisSizeFromCache = (image, mainAxis, toMainAxisSize, maxCrossAxisSize) => {
  const size = getImageSizeFromCache(image);
  if (size) {
    const { width, height } = size;
    if (!width || !height) return { width: 0, height: 0 };
    if (mainAxis === 'horizontal') {
      const scaledHeight = (toMainAxisSize * height) / width;
      return {
        width: toMainAxisSize,
        height: scaledHeight > maxCrossAxisSize ? maxCrossAxisSize : scaledHeight
      };
    } else {
      const scaledWidth = (toMainAxisSize * width) / height;
      return {
        width: scaledWidth > maxCrossAxisSize ? maxCrossAxisSize : scaledWidth,
        height: toMainAxisSize
      };
    }
  }
  return {};
};

const getImageSizeMaybeFromCache = async (image) => {
  debugger;
  let size = getImageSizeFromCache(image);
  debugger;
  if (!size) {
    debugger;
    size = await loadImageSize(image);
    debugger;
    if (typeof image === 'number') {
      cache.set(image, size);
    } else {
      cache.set(image.uri, size);
    }
  }
  return size;
};

export const getImageSizeFitMainAxisSize = async (image, mainAxis, toMainAxisSize, maxCrossAxisSize) => {
  debugger;
  const { width, height } = await getImageSizeMaybeFromCache(image);
  if (!width || !height) return { width: 0, height: 0 };
  if (mainAxis === 'horizontal') {
    const scaledHeight = (toMainAxisSize * height) / width;
    return {
      width: toMainAxisSize,
      height: scaledHeight > maxCrossAxisSize ? maxCrossAxisSize : scaledHeight
    };
  } else {
    const scaledWidth = (toMainAxisSize * width) / height;
    return {
      width: scaledWidth > maxCrossAxisSize ? maxCrossAxisSize : scaledWidth,
      height: toMainAxisSize
    };
  }
};
