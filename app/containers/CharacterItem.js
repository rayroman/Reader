/**
 * Created by rroman681 on 5/15/17.
 */
import CharacterItem from "../components/CharacterItem";
import {connect} from "react-redux";
import {toggleChar, query} from "../actions";

const mapStateToProps = (state, props) => ({
    showTrad: state.isTrad,
    currChar: state.currChar
});

const mapDispatchToProps = dispatch => ({
    toggleChar() {
        dispatch(toggleChar())
    },
    onChangeChar(item) {
        dispatch(query(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterItem);