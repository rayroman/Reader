/**
 * Created by rroman681 on 5/24/17.
 */
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Search from "../components/Search";
import {queryCharacterAction} from "../actions";

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = dispatch => ({
    sendSearch(item) {
        dispatch(queryCharacterAction(item));
    }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Search);

export default withRouter(container);