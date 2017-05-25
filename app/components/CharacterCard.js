/**
 * Created by rroman681 on 5/24/17.
 * Card for returning searches
 */

// Usage of "keyword" key makes this specific to character (vs. vocab)
const CharacterCard = ({character, isTraditional}) => {
    const {item, keyword} = character;
    return (
        <article className="card">
            <h1>{isTraditional ? item.traditional : item.simplified}</h1>
            <p>{keyword}</p>
        </article>
    )
};

export default CharacterCard;