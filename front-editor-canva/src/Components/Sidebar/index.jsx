import React from 'react';
import { SidebarContainer, ContainerPhoto, ContainerName } from './style';
import LinksHome from './LinksHome';


const Sidebar = () => (
    <SidebarContainer>
        <ContainerPhoto>
            <img src="https://avatars.githubusercontent.com/u/61651164?v=4" alt="Foto do perfil"/>
            <ContainerName>
                <h2>André</h2>
                <span>Plano: Grátis</span>
            </ContainerName>
        </ContainerPhoto>
        <LinksHome />
    </SidebarContainer>
);

export default Sidebar;