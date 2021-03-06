import { createContext } from "react"


export const NewsContext = createContext({
    articles: [],
    setArticles: () => { },
    apiError: " ",
    setApiError: () => { },
    query: "",
    setQuery: () => { },
})