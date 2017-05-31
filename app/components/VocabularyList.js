/**
 * Created by rroman681 on 5/30/17.
 *
 * The whole list of vocabulary list items
 */

import VocabularyListItem from "../containers/VocabularyListItem";
import "../stylesheets/vocabularylist.scss";

const VocabularyList = ({items}) => {
    return (
        <ul className="vocabList">
            {items.map((item, index) => (
                <VocabularyListItem vocabulary={item}
                                    key={index}
                />
            ))}
        </ul>
    )
};

export default VocabularyList;