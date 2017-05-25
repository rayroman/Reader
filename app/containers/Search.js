/**
 * Created by rroman681 on 5/24/17.
 */
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Search from "../components/Search";

const mapStateToProps = state => ({
    searchState: state.search
});

const container = connect(mapStateToProps)(Search);

export default withRouter(container);