import { ContainerTopo, ContentLeft, ContentLogo, ContentRight, Links } from "./style";
import Dropdown from "./Dropdown";

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
            <Links>
                <Dropdown
                    nameDropDown="Destaques"
                    linksDropDown={[
                        { name: "Option 1", path: "/option1" },
                        { name: "Option 2", path: "/option2" },
                        { name: "Option 3", path: "/option3" },
                    ]}
                />
                <Dropdown
                    nameDropDown="Empresarial"
                    linksDropDown={[
                        { name: "Option 1", path: "/option1" },
                        { name: "Option 2", path: "/option2" },
                        { name: "Option 3", path: "/option3" },
                    ]}
                />
                <Dropdown
                    nameDropDown="Educação"
                    linksDropDown={[
                        { name: "Option 1", path: "/option1" },
                        { name: "Option 2", path: "/option2" },
                        { name: "Option 3", path: "/option3" },
                    ]}
                />
                <Dropdown
                    nameDropDown="Planos e preços"
                    linksDropDown={[
                        { name: "Option 1", path: "/option1" },
                        { name: "Option 2", path: "/option2" },
                        { name: "Option 3", path: "/option3" },
                    ]}
                />
                <Dropdown
                    nameDropDown="Aprenda"
                    linksDropDown={[
                        { name: "Option 1", path: "/option1" },
                        { name: "Option 2", path: "/option2" },
                        { name: "Option 3", path: "/option3" },
                    ]}
                />
            </Links>
        </ContentLeft>
        <ContentRight>

        </ContentRight>
       </ContainerTopo>
    );
}

export default Topo;