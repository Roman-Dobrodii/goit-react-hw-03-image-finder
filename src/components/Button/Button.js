import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { loadMoreImages } = this.props;
    return (
      <div>
        <button
          type="button"
          className={styles.Button}
          onClick={loadMoreImages}
        >
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
