import headerComponent from "./components";
import { connect } from "react-redux";
import { searchYoutubeVideo } from "../Search/store/actions";

const mapDispatchToProps = {
  searchYoutubeVideo,
};
const Header = headerComponent;
export default connect(null, mapDispatchToProps)(Header);
