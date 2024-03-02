import { IoHomeOutline } from "react-icons/io5";
import { BsStars, BsGrid1X2 } from "react-icons/bs";
import { LuFolders } from "react-icons/lu";
import { Link } from "react-router-dom";

import { ContainerLinks } from './style';

const LinksHome = () => {
    return (
        <ContainerLinks>
            <Link to="/">
                <IoHomeOutline size={25} />
                <span>Home</span>
            </Link>
            <Link to="/about">
                <BsStars size={25} />
                <span className="text-gradient">Estúdio Mágico</span>
                <span>Novo</span>
            </Link>
            <Link to="/contact">
                <LuFolders size={25} />
                <span>Projetos</span>
            </Link>
            <Link to="/contact">
                <BsGrid1X2 size={25} />
                <span>Modelos</span>
            </Link>
        </ContainerLinks>
    );
}

export default LinksHome;