import { ContainerTopo, ContentLeft, ContentLogo, ContentRight, Links } from "./style";
import Dropdown from "./Dropdown";
import LinksLeft from "./LinksLeft";

const Topo = () => {
    return (
       <ContainerTopo>
        <ContentLeft>
            <ContentLogo>
                <button>
                    <span></span>
                </button>
                <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" role="presentation" />
            </ContentLogo>
            <LinksLeft />
        </ContentLeft>
        <ContentRight>

        </ContentRight>
       </ContainerTopo>
    );
}

export default Topo;