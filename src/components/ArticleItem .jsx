import { Link, Image, Box, Heading, Text, HStack, AspectRatio, Tag, Spacer } from "@chakra-ui/core";
import React from 'react';
import moment from 'moment'
import styles from "../style/ArticleItem.module.css"



export default function ArticleItem({ article }) {


    return (
        <Box position="relative"
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            maxH="50rem"
        >
            <AspectRatio ratio={5 / 3}>
                <Image
                    p={2}
                    src={article.urlToImage ? article.urlToImage : "/cyberSecurity.png"}
                    alt={article.urlToImage} />
            </AspectRatio>

            <Box p={5} >

                <Heading fontSize={["sm", "md", "lg", "xl"]}>
                    <Link color="teal.500" href={article.url} isExternal>
                        {article.title}
                    </Link>
                </Heading>

                <HStack
                    alignItems="center"
                    justifyContent="flex-start"
                    textAlign="left"
                    verticalAlign="center"
                    spacing={[1, 4, 3]}
                    mt={2}>

                    <Tag mt={0} size="sm" fontSize="sm" variant="solid" colorScheme="teal">
                        {article.source.name}
                    </Tag>

                    <Text fontSize="sm">
                        {article.author}
                    </Text>
                    <Spacer />
                    <Text  className={styles.time}>
                        {moment(article.publishedAt).fromNow()}
                    </Text>
                </HStack>

                <Text fontSize="sm" mt={4}>
                    {article.description}
                </Text>

            </Box>
        </Box>

    )
}