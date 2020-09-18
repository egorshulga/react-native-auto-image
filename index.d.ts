import * as React from 'react';
import { ImageProps, ImageSourcePropType } from 'react-native';

export interface AutoImageProps extends ImageProps {
  source: ImageSourcePropType;
  mainAxisSize: number;
  mainAxis?: 'horizontal' | 'vertical';
  maxCrossAxisSize?: number;
  fallbackSource?: ImageSourcePropType;
  onCrossAxisSizeChange?: (crossAxisSize: number) => void;
  animated?: boolean;
}

declare class AutoImage extends React.Component<AutoImageProps, any> {}

export default AutoImage;
