/**
 * Created by rroman681 on 5/17/17.
 */

const GuessForm = ({isCorrect = null, processGuess = f => f}) => {
    let guess;

    const submit = e => {
        e.preventDefault();
        // Todo: action to send guess and check if it's right
        processGuess(guess.value);
        guess.value = "";
    };

    return (
        <form action=""
              onSubmit={submit}
        >
            <input type="text"
                   ref={input => guess = input}
            />
            {(isCorrect === null) ?
                "" : (isCorrect) ?
                    "good job!" :
                    "oh no!"
            }
        </form>
    )
};

export default GuessForm;