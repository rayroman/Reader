/**
 * Created by rroman681 on 5/16/17.
 */
import "../stylesheets/searchform.scss";
import FaSearch from "react-icons/lib/fa/search";

const SearchForm = ({onChangeChar = f => f, changeFocus = f => f, isFocused = false}) => {
    let item;
    // Talk to API when submitting a query
    const submit = e => {
        e.preventDefault();
        onChangeChar(item.value);
        item.value = '';
    };

    return (
        <form action=""
              method="get"
              className={isFocused ? "focusedForm" : ""}
              onSubmit={submit}
              id="search"
        >
            <input type="text"
                   ref={input => item = input}
                   onFocus={() => changeFocus(true)}
                   onBlur={() => changeFocus(false)}
            />
            <button className={isFocused ? "focusedButton" : ""}>
                <FaSearch/>
            </button>
        </form>
    )
};

export default SearchForm;