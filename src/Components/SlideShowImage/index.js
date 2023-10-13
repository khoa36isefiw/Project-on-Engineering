import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Box } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './slideshow.scss'
const cx = classNames.bind(styles);
const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


// function ShapeExample() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col style={{ display: 'flex', overflowX: 'scroll' }}>
//           {itemData.map((item, index) => (
//             <div
//               key={item.id}
//               style={{
//                 transform: `translateX(${(index - currentImageIndex) * 30}px)`, // Move the image
//                 transition: 'transform 0.3s ease-in-out', // Apply smooth transition
//               }}
//             >
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '200px', height: '200px' }}
//               />
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ShapeExample;

// scroll successfully but there are
// function ShapeExample() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     const scrollWidth = scrollContainer.scrollWidth;
//     const containerWidth = scrollContainer.offsetWidth;

//     const interval = setInterval(() => {
//       if (scrollContainer.scrollLeft + containerWidth >= scrollWidth) {
//         scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
//         setCurrentImageIndex(0);
//       } else {
//         scrollContainer.scrollBy({ left: containerWidth, behavior: 'smooth' });
//         setCurrentImageIndex((prevIndex) => prevIndex + 1);
//       }
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col style={{ display: 'flex', overflowX: 'auto' }} ref={scrollContainerRef}>
//           {itemData.map((item, index) => (
//             <div
//               key={item.id}
//               style={{ marginRight: '10px' }}
//             >
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '200px', height: '200px' }}
//               />
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ShapeExample;


// function ShapeExample() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col style={{ display: 'flex', overflowX: 'scroll' }}>
//           {itemData.map((item, index) => (
//             <div
//               key={item.id}
//               style={{
//                 transform: `translateX(${(index - currentImageIndex) * 100}px)`, // Adjust the spacing between images
//                 transition: 'transform 0.3s ease-in-out',
//               }}
//             >
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '200px', height: '200px' }}
//               />
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ShapeExample;


function ShapeExample() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    const imageWidth = 200; // Width of each image
    const numImages = itemData.length;
    const totalWidth = numImages * imageWidth;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    //  marginBottom: '12px', marginLeft: '12px'
    <Container sx={{m: 12}}>
      <Box sx={{ borderTop: '1px solid', borderColor: 'gray', margin: '0 64px 12px 64px',  }} className={cx('m-border-bottom')}/>
      <Row>
        <Col
          style={{
            display: 'flex',
            overflowX: 'scroll',
            width: '100%', // Set a fixed width for the container
            marginLeft: '64px',
            marginRight: '64px',
          }}
          ref={containerRef}
        >
          {itemData.map((item, index) => (
            <div
              key={item.id}
              style={{
                transform: `translateX(${(index - currentImageIndex) * 150}px)`, // Adjust the spacing between images
                transition: 'transform 0.3s ease-in-out',
                marginBottom: '6px',

              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;