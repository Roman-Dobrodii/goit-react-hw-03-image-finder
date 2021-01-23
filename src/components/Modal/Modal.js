import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickOnCloseBtn);
    document.addEventListener('click', this.clickOnOverlay);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickOnCloseBtn);
    document.addEventListener('click', this.clickOnOverlay);
  }

  clickOnCloseBtn = e => {
    e.code === 'Escape' && this.props.onClose();
  };

  clickOnOverlay = e => {
    (e.target.nodeName === 'DIV' || e.target.nodeName === 'BUTTON') &&
      this.props.onClose();
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div>
        <div className={styles.Overlay}>
          <div className={styles.Modal}>
            <img src={largeImage} alt={''} />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
