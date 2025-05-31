// src/types/react-masonry-css.d.ts

declare module 'react-masonry-css' {
  import * as React from 'react';

  interface MasonryProps {
    breakpointCols?: number | { [key: string]: number };
    className?: string;
    columnClassName?: string;
    children?: React.ReactNode;
  }

  const Masonry: React.FC<MasonryProps>;

  export default Masonry;
}
