/**
 * Created by rroman681 on 5/15/17.
 */
import CharacterItem from "../components/CharacterItem";
import {connect} from "react-redux";
import {toggleChar, charQuery} from "../actions";

const mapStateToProps = (state, props) => ({
    showTrad: state.ui.showTraditional,
    character: state.currentItem.char
});

const mapDispatchToProps = dispatch => ({
    toggleChar() {
        dispatch(toggleChar())
    },
    onChangeChar(item) {
        dispatch(charQuery(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterItem);