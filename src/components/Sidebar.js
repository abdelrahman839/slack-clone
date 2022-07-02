import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from "react-firebase-hooks/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import { db ,auth} from "../firebase"

function Sidebar() {
    const [channels] = useCollection(db.collection("rooms")) 
const [user] = useAuthState(auth);
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.email}
                    </h3>

                </SidebarInfo>
                <EditIcon />
            </SidebarHeader>
            <SidebarOptions Icon={InsertCommentIcon} title={"Threads"} />
            <SidebarOptions Icon={InboxIcon} title={"Mentions & reactions"} />
            <SidebarOptions Icon={BookmarkBorderIcon} title={"Channel browser"} />
            <SidebarOptions Icon={PeopleAltIcon} title={"People & user groups"} />
            <SidebarOptions Icon={AppsIcon} title={"Apps"} />
            <SidebarOptions Icon={FileCopyIcon} title={"File browser"} />
            <SidebarOptions Icon={ExpandLessIcon} title={"Show less"} />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title={"Add Channel"} />
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption title={"Add Channel"} />
            {channels?.docs.map((doc)=>(
               <SidebarOptions 
               key={doc.id} 
               id={doc.id} 
               title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
flex:0.3;
color: #FFF;
max-width: 250px;
margin-top: 60px;
background-color: var(--slack-color);

>hr{
    margin: 10px 0px;
    border:0.5px solid #49274b;
}
`;
const SidebarHeader = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
border-top:1px solid #49274b;
border-bottom: 1px solid #49274b;
padding: 13px;

>.MuiSvgIcon-root{
    padding: 8px;
    border-radius: 100%;
    color:#49274b;
    background-color:#FFF;
    font-size: 18px;
}

`;
const SidebarInfo = styled.div`
>h2{
    font-size:15px;
    font-weight: 900;
    margin-bottom:5px;
}
>h3{
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
}
>h3>.MuiSvgIcon-root{
    font-size: 14px;
    margin-top:1px;
    margin-right: 2px;
    color: green;
}
`;
