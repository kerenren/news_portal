import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, FormControl, Spacer, Input, Button } from "@chakra-ui/core"
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
                <Flex align="between">
                    <FormControl id="search" isRequired display="flex" w="75%">
                        <Input placeholder="&#xf002; Search for a topic" type="text" />
                        <Button
                            ml={2}
                            colorScheme="teal"
                            type="submit"
                        >
                            Search
                    </Button>
                    </FormControl>
                    <Spacer />
                    <Button colorScheme="teal" variant="outline">
                        <Link to='/login' >
                            <p>Login</p>
                        </Link>
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}