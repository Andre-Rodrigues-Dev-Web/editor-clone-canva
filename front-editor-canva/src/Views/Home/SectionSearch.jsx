import { ContainerSearch, ContainerTopoSearch, Search, Title, Actions } from "./style";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FaRegFileImage } from "react-icons/fa";
import { PiFrameCorners } from "react-icons/pi";
import { RiSlideshowLine } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";

const SectionSearch = () => {
    return (
       <ContainerSearch>
        <ContainerTopoSearch>
            <Title>
                <h2>O que você vai criar hoje?</h2>
            </Title>
            <Actions>
                <button>
                    <IoCloudUploadOutline size={20} />
                </button>
            </Actions>
        </ContainerTopoSearch>
        <Search>
            <div className="container-search">
                <button>
                    <BiSearchAlt2 size={20} />
                </button>
                <input type="text" placeholder="Use cinco ou mais palavras para descrever seu design" />
            </div>
            <div className="container-tabs">
                <div className="tab">
                    <div className="icon">
                        <BsStars size={25} />
                    </div>
                    <p>Para você</p>
                </div>
                <div className="tab">
                    <div className="icon">
                        <FaRegFileImage size={20} />
                    </div>
                    <p>Docs</p>
                </div>
                <div className="tab">
                    <div className="icon">
                        <PiFrameCorners size={25} />
                    </div>
                    <p>Quadros</p>
                </div>
                <div className="tab">
                    <div className="icon">
                        <RiSlideshowLine size={23} />
                    </div>
                    <p>Apresentações</p>
                </div>
            </div>
        </Search>
       </ContainerSearch>
    );
}

export default SectionSearch;