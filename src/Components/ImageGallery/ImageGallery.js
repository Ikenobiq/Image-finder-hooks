import ImageGelleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGellery = ({ listImages, onImgClick }) => {
  return (
    <ul className="ImageGallery">
      {listImages.map((listImage) => (
        <ImageGelleryItem
          key={listImage.id}
          listImage={listImage}
          onImgClick={onImgClick}
        />
      ))}
    </ul>
  );
};

export default ImageGellery;
