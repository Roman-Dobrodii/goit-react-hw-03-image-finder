import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;

    return (
      <ul className={styles.ImageGallery}>
        {images.map(item => (
          <ImageGalleryItem
            key={item.id}
            src={item.webformatURL}
            alt={item.tags}
            largeImage={item.largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  key: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
