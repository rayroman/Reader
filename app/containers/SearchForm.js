/**
 * Created by rroman681 on 5/24/17.
 */

import {connect} from "react-redux";
import SearchForm from "../components/SearchForm";
import {charQuery, focusForm} from "../actions";

const mapStateToProps = state => ({
    isFocused: state.search.isFocused
});

const mapDispatchToProps = dispatch => ({
    onChangeChar(item) {
        dispatch(charQuery(item))
    },
    changeFocus(isFocused) {
        dispatch(focusForm(isFocused));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);