import { connect } from "react-redux";
import { getPopularVideos, resetVideosFlag } from "./store/actions";
import RecommendedVideosComponent from "./components";

const mapStateToProps = ({ getPopularVideosReducer }) => {
  return {
    popularVideos: getPopularVideosReducer.popularVideos,
    token: getPopularVideosReducer.token,
    pageInfo: getPopularVideosReducer.pageInfo,
  };
};
const mapDispatchToProps = {
  getPopularVideos,
  resetVideosFlag,
};
const RecommendedVideos = RecommendedVideosComponent;
export default connect(mapStateToProps, mapDispatchToProps)(RecommendedVideos);
