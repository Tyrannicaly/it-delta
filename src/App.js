import './App.css';
import { useState, useEffect} from 'react';
import { Photos } from './components/Photos'
import styled from 'styled-components';
import {api} from './API/api'


const Container = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
`

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      api.getAllImgs()
      .then(setPosts)
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      {
        posts.map(elem=> <Photos  key={elem.id} {...elem}  />)
      }
    </Container>

  );
};

export default App;