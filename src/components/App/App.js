import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loading from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import imagesFetchApi from '../Services/ImagesApi';

import styles from './App.module.css';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: '',
    isLoading: false,
    largeImage: null,
    isShowModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images.length !== this.state.images.length) {
      window.scrollBy({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getImages = e => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    imagesFetchApi
      .imagesFetchApi(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearchFormSubmit = query => {
    this.getImages(this.state.searchQuery, this.state.page);

    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  loadMoreImages = e => {
    const { searchQuery, page } = this.state;
    this.getImages(searchQuery, page);
  };

  openModal = largeImage => {
    this.setState({ isShowModal: true, largeImage: largeImage });
  };

  closeModal = () => {
    this.setState({ isShowModal: false, largeImage: null });
  };

  render() {
    const {
      searchQuery,
      images,
      isLoading,
      isShowModal,
      largeImage,
    } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar
          searchQuery={searchQuery}
          onSubmit={this.handleSearchFormSubmit}
        />
        {isLoading && <Loading />}
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button loadMoreImages={this.loadMoreImages} />}
        {isShowModal && (
          <Modal onClose={this.closeModal} largeImage={largeImage} />
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
}
