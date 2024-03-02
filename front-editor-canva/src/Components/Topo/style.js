import styled from 'styled-components';

const ContainerTopo = styled.div`
    background-color: #fff;
    box-shadow: 0 2px 5px rgb(0 0 0 / 17%);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
`;

const ContentRight = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
`;

const ContentLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    button{
        background-color: #fff;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        span, span:after, span:before{
            background-color: #000;
            height: 2px;
            width: 20px;
        }
        span{
            display: block;
            margin: 5px 0;
            position: relative;
            &:after, &:before{
                content: '';
                display: block;
                position: absolute;
                transition: all 0.3s;
            }
            &:after{
                top: 7px;
            }
            &:before{
                top: -7px;
            }
        }
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: #333;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 120px;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export {
    ContainerTopo,
    ContentLeft,
    ContentRight,
    ContentLogo,
    Links,
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    DropdownItem
}