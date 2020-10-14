import { SimpleGrid } from "@chakra-ui/core"
import React, { useContext } from 'react';
import { NewsContext } from "../lib/Context"
import ArticleItem from "./ArticleItem "

function ArticleList() {
    const articlesArray = useContext(NewsContext).articles

    return (
        <SimpleGrid columns={[1,1, 2, 3]} spacing={10} width="100%" mt={[2, 4, 6, 8]} px={10}>
            {articlesArray.map((article, index) =>
                (
                    <ArticleItem key={article.title + index} article={article} />
                )
            )}
        </SimpleGrid>
    )
}

export default ArticleList;