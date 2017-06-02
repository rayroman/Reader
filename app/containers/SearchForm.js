/**
 * Created by rroman681 on 5/24/17.
 */

import {connect} from "react-redux";
import SearchForm from "../components/SearchForm";
import {toggleSearchCollectionAction, updateSearchCollectionAction, focusFormAction, query} from "../actions";

const mapStateToProps = state => ({
    isFocused: state.ui.isSearchFocused,
    isCharacterCollection: state.ui.isCharacterCollection
});

const mapDispatchToProps = dispatch => ({
    searchQuery(coll, item) {
        dispatch(query(coll)(item))
    },
    updateColl(coll) {
        dispatch(updateSearchCollectionAction(coll))
    },
    toggleColl() {
        dispatch(toggleSearchCollectionAction())
    },
    changeFocus(isFocused) {
        dispatch(focusFormAction(isFocused));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);