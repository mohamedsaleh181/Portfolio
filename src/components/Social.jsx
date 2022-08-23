import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { info } from './myData';

const actions = [
  { icon: <GitHubIcon />, name: 'Github', link: info.github },
  { icon: <LinkedInIcon />, name: 'LinkedIn', link: info.linkedin },
];

export default function Social() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 16, right: 16 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16}}
        icon={<TravelExploreIcon  sx={{}}/>}
        FabProps={{
            sx: {
              bgcolor: '#438681',
              '&:hover': {
                bgcolor: '#27413f',
              }
            }
          }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link}
            target='-blank'
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
