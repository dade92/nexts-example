import React, {FC} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Button} from "@mui/material";
import styled from "styled-components";

type Data = {
    name: string;
    age: number;
}

type Props = {
    data: Data[];
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;
`

const StyledLink = styled(Link)`
    align-self: center;
`


const Index: FC<Props> = ({data}) => {
    const router = useRouter();

    return (
        <Wrapper>
            <StyledLink
                href={{
                    pathname: '/books',
                }}
                rel="noreferrer"
            >
                Books
            </StyledLink>
            <StyledLink
                href={{
                    pathname: '/movies',
                }}
                rel="noreferrer"
            >
                Movies
            </StyledLink>
            <Button variant={'contained'} onClick={() => router.push('/events')}>Events</Button>
        </Wrapper>
    );
}

export default Index;