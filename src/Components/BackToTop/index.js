import React, { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
const ScrollButtonToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div
        className={styles.backToTopButton}
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
    >
        <Avatar >
          <ArrowCircleUpIcon className={cx('backToTopButton')}/>
        </Avatar>
    </div>
  );
};

export default ScrollButtonToTop;