// // // import React from 'react'
// // // import phone from './images/phone.jpg'
// // // import plus from './images/plus.jpg'
// // // import styled from 'styled-components'
// // // export default function CoverImage() {
// // //   return (
// // //     <ImageWrapper className='hero'>
// // //       <img src={phone} className='phone' style={{width:'900px'}}alt="" />
// // //       <img src={plus} className='plus' style={{width:'200px'}}alt="" />
// // //     </ImageWrapper>
// // //   )
// // // }

// // // const ImageWrapper = styled.div`
// // // position: relative;
// // // margin-left: auto;
// // // .phone{
// // //   color: green;
// // //   position: absolute;
// // //   left: 0px;
// // // }
// // // .plus{
// // //   position: absolute;

// // // }
// // // `;
// // import React from 'react'
// // import phone from './images/phone.jpg'
// // import plus from './images/plus.jpg'
// // import styled from 'styled-components'

// // export default function CoverImage() {
// //   return (
// //     <ImageWrapper>
// //       <div className="rotate">
// //       <img src={phone} className='phone' alt="" />
// //       <img src={plus} className='plus' alt="" />
// //       <button>Track Health</button>
// //       </div>
// //     </ImageWrapper>
// //   )
// // }

// // const ImageWrapper = styled.div`
// // position: relative;
// // margin-top: 80px;
// //   .rotate{
// //     position: absolute;
// //     right: 100%;
// //     /* overflow: hidden; */
// //     transform: translate(10px, 20px) rotate(-10deg);
// //   }
// //   .phone {
// //     position: absolute;
// //     left: 0;
// //     top: 0;
// //     width: 600px;
// //   }
// //   .plus {
// //     position: absolute;
// //     left: 225px;
// //     background-color: white;
// //     top: 60px;
// //     height: 170px;
// //     width: 150px;
// //     border: black;
// //   }
// //   button{
// //     z-index: 2;
// //     position: absolute;
// //     left: 260px;
// //     top: 300px;
// //     background-color: rgb(0, 255, 119);
// //     color: white;
// //     border-radius: 25%;
// //     width: 80px;
// //     border:none;
// //     outline: none;
// //   }

// // `;

// import React from 'react';
// import phone from './images/phone.jpg';
// import plus from './images/plus.jpg';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';

// const ImageWrapper = styled('div')(({ theme }) => ({
//   position: 'relative',
//   marginTop: '80px',
//   '& .rotate': {
//     position: 'absolute',
//     right: '100%',
//     transform: 'translate(10px, 20px) rotate(-10deg)',
//   },
//   '& .phone': {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: '600px',
//   },
//   '& .plus': {
//     position: 'absolute',
//     left: '225px',
//     backgroundColor: 'white',
//     top: '60px',
//     height: '170px',
//     width: '150px',
//     border: 'black',
//   },
//   '& button': {
//     zIndex: 2,
//     position: 'absolute',
//     left: '260px',
//     top: '300px',
//     backgroundColor: 'rgb(0, 255, 119)',
//     color: 'white',
//     borderRadius: '25%',
//     width: '80px',
//     border: 'none',
//     outline: 'none',
//   },
// }));

// export default function CoverImage() {
//   return (
//     <ImageWrapper>
//       <div className="rotate">
//         <img src={phone} className='phone' alt="" />
//         <img src={plus} className='plus' alt="" />
//         <Button variant="contained">Track Health</Button>
//       </div>
//     </ImageWrapper>
//   );
// }

import React from 'react';
import phone from './images/phone.jpg';
import plus from './images/plus.jpg';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: '90px',
  // display: 'hidden',
  '& .rotate': {
    position: 'absolute',
    right: '100%',
    transform: 'translate(10px, 20px) rotate(-10deg) ',
  },
  '& .phone': {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '600px',
    backgroundColor: '#F9F6EE',

  },
  '& .plus': {
    position: 'absolute',
    left: '225px',
    backgroundColor: 'white',
    top: '60px',
    height: '170px',
    width: '150px',
    border: 'black',
  },
  '& button': {
    zIndex: 2,
    position: 'absolute',
    left: '260px',
    top: '300px',
    backgroundColor: 'rgb(0, 255, 119)',
    color: 'white',
    borderRadius: '25%',
    width: '80px',
    border: 'none',
    outline: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    '& .rotate': {
      display: 'none',
      width:'100px',
      position: 'absolute',
      margin:'auto',

    },
  },
}));

export default function CoverImage() {
  return (
    <ImageWrapper
    sx={{background:'#F9F6EE',}}>
      <div className="rotate">
        <img src={phone} className='phone' alt="" />
        <img src={plus} className='plus' alt="" />
        <Button variant="contained">Track Health</Button>
      </div>
    </ImageWrapper>
  );
}
