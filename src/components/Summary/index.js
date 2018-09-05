import React from "react";

import H1 from "../H1";
import Link from "./Link";
import Date from "./Date";
import ContinueReading from "./ContinueReading";
import Article from "../Article";
import ArticleHeader from "../ArticleHeader";

function Summary({ date, title, excerpt, hasMore, slug }) {
    return (
        <div>
            <ArticleHeader>
                <H1>
                    <Link to={slug}>{title}</Link>
                </H1>
                <Date>{date}</Date>
            </ArticleHeader>

            <Article>
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Article>

            {hasMore && <ContinueReading to={slug}>Continue Reading &rarr;</ContinueReading>}
        </div>
    );
}

export default Summary;
