import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    const { src, alt, largeImage, openModal } = this.props;
    return (
      <li
        onClick={() => {
          openModal(largeImage);
        }}
        className={styles.ImageGalleryItem}
      >
        <img src={src} alt={alt} className={styles.ImageGalleryItem_image} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  alt: PropTypes.string,
};
