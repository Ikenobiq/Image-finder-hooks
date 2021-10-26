import { useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImages from "./fetchImages";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import CustomLoader from "./Loader/Loader";
import Modal from "./modal/Modal";

const App = () => {
  const [listImages, setListImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");

  const onSubmit = async (qqq111) => {
    setQuery(qqq111);
    setPage(1);

    setLoader(true);
    try {
      const hits = await fetchImages({ query: qqq111, page: 1 });
      setListImages(hits);
    } catch {
    } finally {
      setLoader(false);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const onClickBtn = async () => {
    setLoader(true);
    try {
      const hits = await fetchImages({ query, page: page + 1 });
      setPage((prevState) => {
        return prevState + 1;
      });
      setListImages((prevListImages) => {
        return [...prevListImages, ...hits];
      });
    } catch {
    } finally {
      setLoader(false);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  const onImgClick = (largeImageURL, tags) => {
    setModal(true);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery listImages={listImages} onImgClick={onImgClick} />
      {listImages.length > 0 && <LoadMoreButton onClick={onClickBtn} />}
      {loader && <CustomLoader />}
      {modal && (
        <Modal
          closeModal={closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
    </div>
  );
};
export default App;
