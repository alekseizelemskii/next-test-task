import { useState } from "react"
import { useDispatch} from "react-redux";
import { apiService } from "../pages/api/hello";
import { publicPost } from '../redux/actions-creators';
import { Form, Input, Button } from "../styled-components";


const CreateNewPost: React.FC = () => {
    
    const dispatch = useDispatch();
    const random = Math.round(Math.random() * 100);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const handleSubmit = async (e) => {
            e.preventDefault();
            const newPost = { title, body, id: random };
            dispatch(publicPost(newPost));
            await apiService.createPost(JSON.stringify(newPost))
            setTitle('');
            setBody('')
        }

    return (
        <>            
            <Form onSubmit={handleSubmit}>
                <Input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='title' />
                <Input onChange={(e) => setBody(e.target.value)} value={body} type='text' placeholder='body' />
                <Button>Post It</Button>
            </Form>
        </>
    )
}

export default CreateNewPost;




