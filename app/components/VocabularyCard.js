/**
 * Created by rroman681 on 6/1/17.
 */
import FaList from "react-icons/lib/fa/list";

/*
 Todo: make autocomplete for vocabulary search
 Todo: render characters for vocabulary card
 */
const VocabularyCard = ({vocabulary, isTraditional}) => {
    const {item, definitions, pinyin, characters} = vocabulary;
    console.log(characters);
    return (
        <article className="card">
            <h1>{isTraditional ? item.traditional : item.simplified}</h1>
            <section>
                <h2><FaList/> Definition{definitions.length > 1 ? "s" : ""}</h2>
                <ul>
                    {definitions.map((def, index) => (
                        <li key={index}>{def}</li>
                    ))}
                </ul>
            </section>
        </article>
    )
};

export default VocabularyCard;