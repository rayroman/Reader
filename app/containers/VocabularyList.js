/**
 * Created by rroman681 on 5/30/17.
 */
import {connect} from "react-redux";
import VocabularyList from "../components/VocabularyList";

const mapStateToProps = state => ({
    items: state.search.result.vocabulary
});

export default connect(mapStateToProps)(VocabularyList);