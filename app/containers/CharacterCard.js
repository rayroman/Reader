/**
 * Created by rroman681 on 5/24/17.
 */
import {connect} from "react-redux";
import CharacterCard from "../components/CharacterCard";

const mapStateToProps = state => ({
    isTraditional: state.ui.isTraditional
});

export default connect(mapStateToProps)(CharacterCard);