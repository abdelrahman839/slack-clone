import { useDispatch } from "react-redux"
import styled from "styled-components"
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase"
function SidebarOptions({ Icon, title, addChannelOption, id }) {
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("Please enter your channel")
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }
    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }

    }
    return (
        <SidebarOptionsContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
            {Icon
                ? <h3>{title}</h3>
                : <SidebarOptionsChannel>
                    <span>#</span> {title}
                </SidebarOptionsChannel>
            }
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
display :flex;
align-items :center;
font-size: 12px;
padding-left:2px ;
cursor :pointer;
:hover{
    opacity:0.9;
    background-color:#340e36;
}
>h3{
    font-weight: 500;
}
`;
const SidebarOptionsChannel = styled.div`
>span{
    padding:15px;
}
`;