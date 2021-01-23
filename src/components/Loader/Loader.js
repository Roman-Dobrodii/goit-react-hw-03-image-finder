import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
          className={styles.Loading}
        />
      </div>
    );
  }
}
