import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.cdnlogo.com/logos/s/40/slack-new.svg" />
                <h1>Sign in to the Code family</h1>
                <p>code.slack.com</p>
                <Button
                    onClick={signIn}
                >
                    Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;
const LoginContainer = styled.div`
background-color: #f8f8f8;
display: grid;
height: 100vh;
place-items: center;
`;
const LoginInnerContainer = styled.div`
padding:100px;
text-align: center;
background-color: #fff;
border-radius:10px;
box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

>img{
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}
>Button{
    margin-top: 50px;
    text-transform: inherit ;
    background-color:#0a8d48;
    color: #FFF;
    :hover{
    background-color:rgba(10,141,72,0.8);
    }
}
`;