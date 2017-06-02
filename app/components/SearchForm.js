/**
 * Created by rroman681 on 5/16/17.
 */
import "../stylesheets/searchform.scss";
import FaSearch from "react-icons/lib/fa/search";

const SearchForm = ({searchQuery = f => f,
                        changeFocus = f => f,
                        toggleColl = f => f,
                        updateColl = f => f,
                        isFocused = false}) => {
    let item, isChecked, collection = "character";
    // Talk to API when submitting a query
    const submit = e => {
        e.preventDefault();
        const coll = isChecked.checked ? "vocabulary" : "character";
        searchQuery(coll, item.value);
        updateColl(coll);
        item.value = '';
    };

    const changeCheck = e => {
        e.preventDefault();
    };

    return (
        <div>
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
            <div id="searchToggle">
                <span>Character</span>
                <label className="switch">
                    <input type="checkbox"
                           defaultChecked={false}
                           ref={checked => isChecked = checked}
                           onChange={() => {
                               toggleColl();
                           }}
                           />
                    <div/>
                </label>
                <span>
                    Vocabulary
                </span>
            </div>
        </div>
    )
};

export default SearchForm;