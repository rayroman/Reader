/**
 * Created by rroman681 on 5/17/17.
 */

const GuessForm = ({}) => {
    let guess;

    const submit = e => {
        e.preventDefault();
        // Todo: action to send guess and check if it's right
    };

    return (
        <form action=""
              onSubmit={submit}
        >
            <input type="text"
                   ref={input => guess = input}
            />
        </form>
    )
};