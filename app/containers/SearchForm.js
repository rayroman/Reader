/**
 * Created by rroman681 on 5/24/17.
 */

import {connect} from "react-redux";
import SearchForm from "../components/SearchForm";
import {charQuery} from "../actions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onChangeChar(item) {
        dispatch(charQuery(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);