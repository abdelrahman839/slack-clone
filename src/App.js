import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from "react-spinkit"
function App() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.cdnlogo.com/logos/s/40/slack-new.svg" alt="slack-logo"/>
          <Spinner name='ball-spin-fade-loader' color="purple" fadeIn="none" />
        </AppLoadingContents>
      
    </AppLoading>
    )
  }
  return (
    <div className="app">
      <Router>
        {!user
          ? <Login />
          : <>
            <Header />

            <AppBody>
              <Sidebar />
              <Routes>

                <Route path="/" element={<Chat />} />


              </Routes>
            </AppBody>

          </>

        }

      </Router>

    </div>
  );
}

export default App;


const AppBody = styled.div`
height:100vh;
display: flex;
`;
const AppLoading = styled.div`
height: 100vh;
display:grid;
place-items: center;
`;
const AppLoadingContents = styled.div`
padding:100px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
>img{
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
    padding:20px;
}
`;