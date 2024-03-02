import styled from 'styled-components';

const SidebarContainer = styled.div`
    background-color: #fff;
    box-shadow: 2px 0 5px rgb(0 0 0 / 17%);
    display: flex;
    flex-direction: column;
    height: calc(-72px + 100vh);
    width: 250px;
`;

const ContainerPhoto = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    img{
        border-radius: 50%;
        border: 1px solid #ddd;
        height: 50px;
        width: 50px;
    }
`;

const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    h2{
        font-size: 1.2rem;
        margin: 0;
    }
    span{
        font-size: 0.8rem;
        color: #555;
    }
`;

const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
    padding: 0.5em;
    a{
        color: #333;
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 500;
        text-decoration: none;
        span{
            font-size: 0.85em;
        }
        &:nth-child(2){
            span{
                &.text-gradient{
                    background: linear-gradient(to bottom right, #03a5ab, #8b3dff);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    display: block;
                }
                &:last-child{
                    background-color: #8b3dff;
                    border-radius: 3em;
                    color: #fff;
                    font-size: 0.7rem;
                    padding: 5px 1em;
                }
            }
        }
    }
`;

export {
    SidebarContainer,
    ContainerPhoto,
    ContainerName,
    ContainerLinks
}