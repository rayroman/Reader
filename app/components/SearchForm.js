/**
 * Created by rroman681 on 5/16/17.
 */
import "../stylesheets/search.scss";
import FaSearch from "react-icons/lib/fa/search";

const SearchForm = ({onChangeChar = f => f}) => {
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
              onSubmit={submit}
              id="search"
        >
            <input type="text"
                   ref={input => item = input}
            />
            <button><FaSearch/></button>
        </form>
    )
};

export default SearchForm;