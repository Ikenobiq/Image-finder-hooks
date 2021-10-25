import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const fetchImages = ({ query, page }) => {
  return axios
    .get(
      `?q=${query}&page=${page}&key=23400298-f5ccb6ec4bc6d2911c7e89aba&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => {
      console.log(response);
      return response.data.hits;
    });
};
export default fetchImages;
