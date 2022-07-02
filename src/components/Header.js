import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import styled from "styled-components"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar 
        onClick={()=>{auth.signOut()}}
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <SearchInput placeholder="Search"/>
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
position: fixed;
top: 0;
width: 100%;
padding:10px 0px;
background-color: var(--slack-color);
color:#FFF;

`;
const HeaderLeft = styled.div`
flex:.3;
display:flex;
align-items:center;
margin-left: 20px;
>.MuiSvgIcon-root{
  margin-right: 30px;
  margin-left: auto;
}
`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
  opacity:0.8;
}
`;
const HeaderSearch = styled.div`
flex:.4;
opacity:1;
text-align: center;
background-color:#421f44;
border-radius: 6px;
display :flex;
padding: 0px 50px;
color: gray;
border: 1px solid gray;
`;

const SearchInput = styled.input`
border:none;
background-color: transparent;
text-align: center;
outline: 0;
color: #FFF;
min-width:30vw;
`;
const HeaderRight = styled.div`
flex:.3;
display:flex;
align-items:flex-end;
>.MuiSvgIcon-root {
margin-left:auto;
margin-right: 20px;
}

`;
