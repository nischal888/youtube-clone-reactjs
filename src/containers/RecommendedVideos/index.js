import { connect } from "react-redux";
import { getPopularVideos } from "./store/actions";
import RecommendedVideosComponent from "./components";

const mapStateToProps = (state) => {
  return {
    popularVideos: state.popularVideos,
    token: state.token,
    pageInfo: state.pageInfo,
  };
};
const mapDispatchToProps = {
  getPopularVideos,
};
const RecommendedVideos = RecommendedVideosComponent;
export default connect(mapStateToProps, mapDispatchToProps)(RecommendedVideos);
