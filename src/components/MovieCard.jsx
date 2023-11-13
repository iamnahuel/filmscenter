import React from "react";
import '../styles/movieCard.css';
import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Button, Image, Text, Stack, Heading } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
    const { title, overview, poster_path, vote_average, vote_count, release_date } = movie;
    return (

        <Card maxW='sm' margin={'1rem'}>
            <CardBody>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={`Poster ${title}`}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {overview}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Reproducir
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default MovieCard;