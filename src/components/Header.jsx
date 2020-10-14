import React from 'react';
import { Box, Heading, Text, Divider } from "@chakra-ui/core"
import styles from "../style/Header.module.css"



function Header() {

    return (
        <Box
            height="50vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center" >

            <h1 mt={[2, 4, 6, 8]} className={styles.header} >
                GET INFORMED
            </h1>

            <h1 my={0} pd={0} className={styles.header}>
                GET SECURED
            </h1>

            <div className={styles.divider} />

            <Text fontSize="xl"> News Curated For You</Text>

        </Box>
    );
}

export default Header;
