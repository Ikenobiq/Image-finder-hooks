const ImageGalleryItem = ({ listImage, onImgClick }) => {
  return (
    <li>
      <img
        onClick={() => onImgClick(listImage.largeImageURL, listImage.tags)}
        src={listImage.webformatURL}
        alt={listImage.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
export default ImageGalleryItem;
