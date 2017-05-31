/**
 * Created by rroman681 on 5/30/17.
 */
import {connect} from "react-redux";
import {queryVocabularyAction} from "../actions";
import VocabularyListItem from "../components/VocabularyListItem";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    vocabSearch(item) {
        dispatch(queryVocabularyAction(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyListItem);