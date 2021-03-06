/**
 * Created by rroman681 on 5/16/17.
 */
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
        >
            <label htmlFor="search">Search</label>
            <input type="text"
                   ref={input => item = input}
            />
            <button>Search</button>
        </form>
    )
};

export default SearchForm;