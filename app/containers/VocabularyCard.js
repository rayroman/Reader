/**
 * Created by rroman681 on 6/1/17.
 */
import VocabularyCard from "../components/VocabularyCard";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    isTraditional: state.ui.showTraditional
});

export default connect(mapStateToProps)(VocabularyCard)