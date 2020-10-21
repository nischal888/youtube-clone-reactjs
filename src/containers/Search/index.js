import SearchComponents from "./components";
import { connect } from "react-redux";
const mapStateToProps = ({ searchYoutubeVideoReducer }) => {
  return {
    searchVideo: searchYoutubeVideoReducer.searchVideo,
  };
};
const Search = SearchComponents;
export default connect(mapStateToProps)(Search);
