import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { Wrapper,Nav, NavbarItem, AddPostBtn, Logo } from '../styled-components';

const MainContainer: React.FC = ({ children }) => {

    return (
        <>
            <Head>
                <title>Blog|NextJs</title>
            </Head>
            <Wrapper>
            <Nav>
                <div className="container">    
                    <NavbarItem>
                        <Link href={`/`}>
                            <Logo>Blog|NextJs</Logo>
                        </Link>
                        <Link href={`/posts/new`}>
                            <AddPostBtn>Add Post</AddPostBtn>
                        </Link>
                        
                    </NavbarItem>
                </div>
            </Nav>
            <main>
                {children}
            </main>
            </Wrapper>
        </>
        
    )
}

export default MainContainer;