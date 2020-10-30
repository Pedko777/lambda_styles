import React, { useState, useEffect } from 'react';
import styles from './Slider.module.scss';

import { ReactComponent as Left } from '../../../ui/carousel/left.svg';
import { ReactComponent as Right } from '../../../ui/carousel/right.svg';

import Analytics from '../../../ui/carousel/Analytics.png';
import OperationalCosts from '../../../ui/carousel/OperationalCosts.png';
import Orders from '../../../ui/carousel/Orders.png';

const Slider = () => {
  const [images, setImages] = useState([Analytics, OperationalCosts, Orders]);
  const [descriptions, setDescriptions] = useState([
    {
      title: 'All your orders in one place',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
    {
      title: 'Some text',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
    {
      title: 'Bla bla bla',
      text:
        'Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform',
    },
  ]);
  const [index, setIndex] = useState(0);
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCanGoNext(true);
    }
    if (index === 0) {
      setCanGoPrev(false);
    }
  };

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      setCanGoPrev(true);
    }
    if (index === images.length - 1) {
      setCanGoNext(false);
    }
  };

  return (
    <div>
      <div>
        <button className={styles.btn} disabled={!canGoPrev} onClick={prev}>
          <Left className={canGoPrev ? styles.img : styles.imgDisabled} />
        </button>

        <button
          className={
            index === 0 ? styles.paginationBtnActive : styles.paginationBtn
          }
          onClick={() => {
            setIndex(0);
          }}
        ></button>
        <button
          className={
            index === 1 ? styles.paginationBtnActive : styles.paginationBtn
          }
          onClick={() => {
            setIndex(1);
          }}
        ></button>
        <button
          className={
            index === 2 ? styles.paginationBtnActive : styles.paginationBtn
          }
          onClick={() => {
            setIndex(2);
          }}
        ></button>
        <button className={styles.btn} disabled={!canGoNext} onClick={next}>
          <Right className={canGoNext ? styles.img : styles.imgDisabled} />
        </button>
      </div>
      <div className={styles.content}>{index}</div>
      <div>
        <img src={images[index]} alt="" width="280" />
      </div>
      <div>
        <h3>{descriptions[index].title}</h3>
        <p>{descriptions[index].text}</p>
      </div>
    </div>
  );
};

export default Slider;

// import React, { Component } from 'react';
// import styles from './Slider.module.scss';

// import Analytics from '../../../ui/carousel/Analytics.png';
// import OperationalCosts from '../../../ui/carousel/OperationalCosts.png';
// import Orders from '../../../ui/carousel/Orders.png';

// class Slider extends Component {
//   state = {
//     images: [Analytics, OperationalCosts, Orders],
//     currentImageIndex: 0,
//     infinity: false,
//     canGoPrev: false,
//     canGoNext: true,
//   };

//   prev = () => {
//     if (this.state.currentImageIndex > 0) {
//       this.setState({ currentImageIndex: this.state.currentImageIndex - 1 });
//       this.setState({ canGoNext: true });
//       //   this.state.canGoNext = true;
//     } else if (this.state.currentImageIndex === 0) {
//       this.setState({ canGoPrev: false });
//       //   this.state.canGoPrev = false;
//     }
//   };

//   next = () => {
//     if (this.state.currentImageIndex < this.state.images.length - 1) {
//       this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
//       this.setState({ canGoPrev: true });
//       //   this.state.canGoPrev = true;
//     } else if (this.state.currentImageIndex === this.state.images.length - 1) {
//       // this.state.canGoNext = false;
//       this.setState({ canGoNext: false });
//     }
//   };

//   render() {
//     console.log('canGoPrev', this.state.canGoPrev);
//     console.log('canGonext', this.state.canGoNext);
//     return (
//       <div>
//         <div>
//           <button disabled={!this.state.canGoPrev} onClick={this.prev}>
//             prev
//           </button>
//           <button disabled={!this.state.canGoNext} onClick={this.next}>
//             next
//           </button>
//         </div>
//         <div className={styles.content}>{this.state.currentImageIndex}</div>
//         <div>
//           <img
//             src={this.state.images[this.state.currentImageIndex]}
//             alt=""
//             width="280"
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default Slider;
