import Loader from "react-loader-spinner";
const CustomLoader = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      className="loader"
    />
  );
};
export default CustomLoader;
