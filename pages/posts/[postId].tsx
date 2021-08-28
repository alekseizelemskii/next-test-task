import { GetServerSideProps } from 'next'
import MainContainer from '../../components/MainContainer';
import PostComponent from '../../components/PostComponent';
import { apiService } from '../api/hello';

export default function ({post}) {

    return (
        <MainContainer>
            <PostComponent post={post}/>
        </MainContainer>
    )    
  }

  export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
    const post = await apiService.getPostById(params.postId);
    return {
      props: {post}
    }
  }
