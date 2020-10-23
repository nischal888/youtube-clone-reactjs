import SearchComponents from "./components";
import { connect } from "react-redux";
import { resetSearchFlag } from "./store/actions";
const mapStateToProps = ({ searchYoutubeVideoReducer }) => {
  return {
    searchVideo: searchYoutubeVideoReducer.searchVideo,
  };
};
const mapDispatchToProps = {
  resetSearchFlag,
};
const Search = SearchComponents;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
