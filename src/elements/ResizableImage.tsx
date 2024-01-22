import React from 'react';

interface ImageComponentProps {
  src: string;
  alt?: string;
}

const ResizableImage: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    // <Box
    //   sx={{
    //     width: '100%',
    //     height: '100%',
    //     overflow: 'hidden',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
    // </Box>
  );
};

export default ResizableImage;
