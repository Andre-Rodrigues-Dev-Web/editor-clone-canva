import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90vw;
`;

const ContainerSearch = styled.div`
  background-image: linear-gradient(180deg, #2196F3 0%, #9C27B0 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0.5em 2em;
  width: 100%;
`;

const ContainerTopoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  padding: 1em 0;
  text-align: center;
  width: 97%;
  h2 {
    color: #fff;
    font-size: 2rem;
  }
`;

const Actions = styled.div`
    button {
        background: #ffffff21;
        border: none;
        color: #fff;
        cursor: pointer;
        align-items: center;
        display: flex;
        flex-shrink: 0;
        height: 40px;
        justify-content: center;
        outline: none;
        width: 40px;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3em;
    .container-search {
        background: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0.8em 1em;
        width: 50%;
        button{
            background: none;
            border: none;
            cursor: pointer;
            outline: none;
        }
        input {
            border: none;
            margin-left: 1em;
            outline: none;
            padding: 0.5em;
            width: 100%;
        }
    }

    .container-tabs{
        display: flex;
        align-items: center;
        gap: 3em;
        .tab{
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 5px;
            p{
                color: #fff;
                font-size: 1rem;
                font-weight: 600;
            }
            .icon{
                background: #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                width: 50px;
            }
            &:nth-child(1){
                .icon{
                    color: #ad7af9;
                }
            }
            &:nth-child(2){
                .icon{
                    color: #2196F3;
                }
            }
            &:nth-child(3){
                .icon{
                    color: green;
                }
            }
            &:nth-child(4){
                .icon{
                    color: #ffc107;
                }
            }
        }
    }
`;

export {
  Content,
  ContainerSearch,
  ContainerTopoSearch,
  Search,
  Title,
  Actions
};
