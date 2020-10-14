import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"
import React, { useContext, useState } from 'react';
import ArticleList from "./ArticleList";
import { NewsContext } from "../lib/Context";
import styles from "../style/TabDiv.module.css"


export default function TabDiv() {
    const { setQuery, tabIndex, setTabIndex } = useContext(NewsContext)
    const [scrollState, setScrollState] = useState("top");


    document.addEventListener("scroll", e => {
        const scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 300) {
            if (scrollState !== "overNav") {
                setScrollState("overNav")
            }
        } else {
            if (scrollState !== "top") {
                setScrollState("top")
            }
        }
    })

    const queries = ["bitcoin", "automotive", "Energy", "Chemicals", "Maritime", "pulp", "food", "Pharmaceuticals", "oil"]

    const handleTabsChange = (index) => {
        setQuery(queries[index])
        setTabIndex(index)
    }


    return (
        <div className={styles.newsContainer}>
            <Tabs isLazy isManual isFitted colorScheme="green" w="100%" index={tabIndex}
                onChange={handleTabsChange}
            >
                <TabList position={scrollState === "top" ? "relative" : "sticky"} className={styles.tabList}>
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