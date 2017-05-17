/**
 * Created by rroman681 on 5/17/17.
 */
import {connect} from "react-redux";
import SearchForm from "./SearchForm";

const mapStateToProps = (state) => ({
    fetching: state.fetching
});

export default connect(mapStateToProps)(SearchForm);