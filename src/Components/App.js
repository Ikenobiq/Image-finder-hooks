import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImages from "./fetchImages";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import CustomLoader from "./Loader/Loader";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    listImages: [],
    query: "",
    page: 1,
    loader: false,
    modal: false,
    largeImageURL: null,
    tags: null,
  };
  onSubmit = (query) => {
    this.setState({ query, page: 1 });
  };
  getImages = async () => {
    const { query, page } = this.state;
    this.setState({ loader: true });
    try {
      const hits = await fetchImages({ query, page });
      console.log(hits);
      this.setState({
        listImages: hits,
      });
    } catch {
    } finally {
      this.setState({ loader: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  componentDidUpdate(_, prevState, __) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }
  onClickBtn = async () => {
    const { query, page } = this.state;
    this.setState({ loader: true });
    try {
      const hits = await fetchImages({ query, page: page + 1 });
      this.setState((prevState) => {
        return {
          page: prevState.page + 1,
          listImages: [...prevState.listImages, ...hits],
        };
      });
    } catch {
    } finally {
      this.setState({ loader: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  onImgClick = (largeImageURL, tags) => {
    this.setState({ modal: true, largeImageURL, tags });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery
          listImages={this.state.listImages}
          onImgClick={this.onImgClick}
        />
        {this.state.listImages.length > 0 && (
          <LoadMoreButton onClick={this.onClickBtn} />
        )}
        {this.state.loader && <CustomLoader />}
        {this.state.modal && (
          <Modal
            closeModal={this.closeModal}
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
          />
        )}
      </div>
    );
  }
}

export default App;
