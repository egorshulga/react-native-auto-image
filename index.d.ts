import * as React from 'react';
import { ImageProps } from 'react-native';

interface TSource {
  uri: string;
}

export interface AutoImageProps extends ImageProps {
  source: number | TSource;
  mainAxisSize: number;
  mainAxis?: 'horizontal' | 'vertical';
  maxCrossAxisSize?: number;
  fallbackSource?: number | TSource;
  onCrossAxisSizeChange?: (crossAxisSize: number) => void;
  animated?: boolean;
}

declare class AutoImage extends React.Component<
  AutoImageProps,
  any
> {}

export default AutoImage;
