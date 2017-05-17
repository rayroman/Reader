/**
 * Created by rroman681 on 5/16/17.
 */

const SearchForm = ({}) => {
    let query;
    // Talk to API when submitting a query
    const submit = e => {
        e.preventDefault();

    }

    return (
        <form action=""
              method="get"
              onSubmit={submit}
        >
            <label htmlFor="search">Search</label>
            <input type="text"
                   ref={input => query = input}
            />
        </form>
    )
};

export default SearchForm;