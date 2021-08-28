import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postToClient } from "../redux/actions-creators";
import styled from "styled-components";


const PostComponent: React.FC = ({post}) =>  {
        
    useEffect(() => {
        dispatch(postToClient(post));
    }, [])

    const dispatch = useDispatch();
    

    const Wrapper = styled.div`
    
        justify-content: center
        margin-top: 20px;
        text-align: center;
        border: 1px solid black;
       
    `

    return (
        <Wrapper>
            <h1>{post.title}</h1> 
            <h3>{post.body}</h3>
        </Wrapper>
    )    
  };

  export default PostComponent;