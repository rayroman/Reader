/**
 * Created by rroman681 on 5/15/17.
 */

const Hanzi = ({charTrad, charSimp, showTrad, onToggle = f => f}) => {
    return (
        <h1 className="character"
            onClick={onToggle}
        >
            {showTrad ? charTrad : charSimp}
        </h1>
    )
};

export default Hanzi;