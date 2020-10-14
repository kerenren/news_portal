import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, FormControl, FormErrorMessage, Input, Button } from "@chakra-ui/core"
import styles from "../style/NavBar.module.css"


export default function NavBar() {
    return (
        <>
            <Flex align="center" justify="space-between" py={2} px={3} className={styles.navBar}>
                <ul>
                    <li>
                        <Link to='/home' className={styles.navHome}>
                            <img className="nav-icon" src="/favicon-32x32.png" alt="logo" />
                            <p>Home</p>
                        </Link>
                    </li>
                </ul>

                <FormControl id="search" isRequired display="flex" w="50%">
                    <Input placeholder="&#xf002; Search for a topic" type="text" />
                    <Button
                        ml={2}
                        colorScheme="teal"
                        type="submit"
                    >
                        Search
                    </Button>
                </FormControl>
            </Flex>
        </>
    )
}