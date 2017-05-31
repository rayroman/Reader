/**
 * Created by rroman681 on 5/24/17.
 */

import {connect} from "react-redux";
import SearchForm from "../components/SearchForm";
import {queryCharacterAction, focusFormAction} from "../actions";

const mapStateToProps = state => ({
    isFocused: state.ui.isSearchFocused,
});

const mapDispatchToProps = dispatch => ({
    onChangeChar(item) {
        dispatch(queryCharacterAction(item))
    },
    changeFocus(isFocused) {
        dispatch(focusFormAction(isFocused));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);