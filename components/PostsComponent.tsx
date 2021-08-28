import Link from 'next/link';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsToClient } from '../redux/actions-creators';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { Collection, Card} from '../styled-components';

const PostsComponent: React.FC = ({ posts }) => {
  const state = useTypesSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsToClient(posts));
  }, [state]);

  return (
    <>
      <Collection>
        {
          posts.map(i => {
            return (
              <Card key={i.id}>
                <Link href={`/posts/${i.id}`}>
                  <a>{i.title}</a>
                </Link>
              </Card>
            )
          })
        }
      </Collection>
    </>
  )
}

export default PostsComponent;

