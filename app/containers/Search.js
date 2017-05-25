/**
 * Created by rroman681 on 5/24/17.
 */
import {connect} from "react-redux";
import Search from "../components/Search";

const mapStateToProps = state => ({
    searchState: state.search
});

export default connect(mapStateToProps)(Search);