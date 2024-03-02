import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import Topo from "./Components/Topo";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Template = styled.div`
  display: flex;
  flex-direction: row;
`;

const Layout = () => {
    return (
      <Dashboard>
        <Topo />
        <Template>
          <Sidebar />
          <Outlet />
        </Template>
      </Dashboard>
    );
}
export default Layout;