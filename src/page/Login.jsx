import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/core';

export default function Login() {
    return (
        <Flex py={10} width="full" align="center" justifyContent="center">
            <Box py={10}>
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit">
                            Sign In
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}