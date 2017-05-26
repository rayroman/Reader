/**
 * Created by rroman681 on 5/15/17.
 */
import CharacterItem from "../components/CharacterItem";
import {connect} from "react-redux";
import {toggleCharAction, queryCharacterAction} from "../actions";

const mapStateToProps = (state, props) => ({
    showTrad: state.ui.showTraditional,
    character: state.currentItem.char
});

const mapDispatchToProps = dispatch => ({
    toggleChar() {
        dispatch(toggleCharAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterItem);