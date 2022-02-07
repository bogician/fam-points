import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components/macro';

import { Box, CssBaseline, Paper as MuiPaper } from '@mui/material';
import { spacing } from '@mui/system';

const drawerWidth = 258;
const smallDrawerWidth = 100;
const marginTop = '66px';

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    width: ${(props) => props.bigmenu ? `${drawerWidth}px` : `${smallDrawerWidth}px`};
    flex-shrink: 0;
    margin-top: 100px;
    transition: all .2s linear;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Paper = styled(MuiPaper)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Dashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bigMenu, setBigMenu] = useState(true);
  return (
    <Root>
      <CssBaseline />
      {children}
      <Outlet />
    </Root>
  );
};

export default Dashboard;
