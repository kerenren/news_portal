import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"
import React, { useContext, useState, useEffect } from 'react';
import ArticleList from "./ArticleList";
import { NewsContext } from "../lib/Context";
import styles from "../style/TabDiv.module.css"
import queries from "../lib/queries"


export default function TabDiv() {
    const { setQuery, tabIndex, setTabIndex } = useContext(NewsContext)
    const [scrollState, setScrollState] = useState("middile");

    const checkScrollTop = () => {
        const scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 300) {
            if (scrollState !== "top") {
                setScrollState("top")
            }
        } else {
            if (scrollState !== "middile") {
                setScrollState("middile")
            }
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', checkScrollTop)
        return () => {
            document.removeEventListener('scroll', checkScrollTop)
        }
    })


    const handleTabsChange = (index) => {
        setQuery(queries[index])
        setTabIndex(index)
    }


    return (
        <div className={styles.newsContainer}>
            <Tabs isLazy isManual isFitted colorScheme="green" w="100%" index={tabIndex}
                onChange={handleTabsChange}
            >
                <TabList
                    className={`${styles.tabList} ${scrollState !== "top" ? styles.middileTab : styles.topTab}`}
                >
                    <Tab >Bit coin</Tab>
                    <Tab >Automotive</Tab>
                    <Tab >Energy</Tab>
                    <Tab >Chemicals</Tab>
                    <Tab >Maritime</Tab>
                    <Tab >Pulp & Paper</Tab>
                    <Tab >Food & Beverage</Tab>
                    <Tab >Pharmaceuticals</Tab>
                    <Tab >Oil & Gas</Tab>
                </TabList>

                <TabPanels>
                    {queries.map((index) => (
                        <TabPanel key={index}>
                            <ArticleList />
                        </TabPanel>
                    )
                    )}
                </TabPanels>
            </Tabs>
        </div>
    )
}