/**
 * Created by rroman681 on 5/22/17.
 */
import {connect} from "react-redux";
import GuessForm from "../components/GuessForm";
import {getCorrect} from "../selectors";
import {submitGuessAction} from "../actions";

const mapStateToProps = state => ({
    isCorrect: getCorrect("char")(state)
});

const mapDispatchToProps = dispatch => ({
    processGuess: guess => {
        dispatch(submitGuessAction(guess));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GuessForm);