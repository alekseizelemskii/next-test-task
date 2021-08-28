import { GetStaticProps } from 'next';
import { apiService } from './api/hello';
import MainContainer from '../components/MainContainer';
import PostsComponent from '../components/PostsComponent';

export default function Home({ posts }){

  return (
    <MainContainer>
      <PostsComponent posts={posts}/>
    </MainContainer>
  )}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const posts = await apiService.getAllPosts(); 
  return {
    props: { posts }

  }
}