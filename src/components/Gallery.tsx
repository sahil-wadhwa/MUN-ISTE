import React from 'react';
import Masonry from 'react-masonry-css';

const images = [
  { src: '/assets/mun1.jpg', height: 250 },
  { src: '/assets/mun2.jpg', height: 350 },
  { src: '/assets/mun3.jpg', height: 200 },
  { src: '/assets/mun4.jpg', height: 400 },
  { src: '/assets/mun5.jpg', height: 300 },
  { src: '/assets/mun6.jpg', height: 200 },
  { src: '/assets/mun10.jpg', height: 300 },
  { src: '/assets/mun8.jpg', height: 180 },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative overflow-visible">
      {/* Centered heading with Merriweather font */}
      <div className="flex justify-center mb-12">
        <h2
          className="text-3xl font-bold border-b-4 border-red-600 pb-3"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          CUMUN in Retrospect
        </h2>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto relative z-10"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map(({ src, height }, index) => (
          <div
            key={index}
            className="mb-6 relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            style={{ height: `${height}px` }}
          >
            <img
              src={src}
              alt={`NHSMUN photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
