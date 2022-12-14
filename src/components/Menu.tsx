import React from 'react'
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';

import AvatarIcon from '@mui/icons-material/Person';
import UsersIcon from '@mui/icons-material/Group';
import ClientIcon from '@mui/icons-material/AssignmentInd';
import MapIcon from '@mui/icons-material/Explore';
import LocatedMapIcon from '@mui/icons-material/MyLocation';
import TaskIcon from '@mui/icons-material/ListAlt';
import TaskTimeIcon from '@mui/icons-material/HourglassFull';
import TaskAssignmentIcon from '@mui/icons-material/Assignment';
import TaskTimeLineIcon from '@mui/icons-material/Timeline';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { NavLink } from 'react-router-dom';
import { RouterPathEnum, aMenuRol } from '../enums/RouterPathEnum';
import { getAuth } from '../store/login';
import { Typography } from '@mui/material';
import Color from '../utils/styles/Color';
const aMenu = [
  {
    title: 'Administración Usuario',
    code: 'adm_usuario',
    visible: true,
    children: [
      {
        'title': 'Usuarios',
        'code': 1,
        'icon': <UsersIcon style={{color:Color.secondary}} />,
        'parent': 0,
        'url': RouterPathEnum.USUARIOS,
      },
      {
        'title': 'Apuesta',
        'code': 2,
        'icon': <MapIcon style={{color:Color.secondary}} />,
        'parent': 0,
        'url': RouterPathEnum.APUESTA
      },
      {
        'title': 'Segumiento',
        'code': 3,
        'icon': <LocatedMapIcon style={{color:Color.secondary}}  />,
        'parent': 0,
        'url': RouterPathEnum.SEG_EJECUTIVO
      },
    ]
  }, {
    title: 'Administración Cliente',
    code: 'adm_cliente',
    visible: true,
    children: [
      {
        'title': 'Apuesta',
        'code': 5,
        'icon': <ClientIcon style={{color:Color.secondary}} />,
        'parent': 4,
        'url': RouterPathEnum.APUESTA+"/0"
      },
      {
        'title': 'Geo Clientes',
        'code': 6,
        'icon': <MapIcon style={{color:Color.secondary}}/>,
        'parent': 4,
        'url': RouterPathEnum.GEO_CLIENTES
      }
    ]
  }, {
    title: 'Administración Tarea',
    code: 'adm_tarea',
    visible: true,
    children: [
      {
        'title': 'Tarea',
        'code': 5,
        'icon': <TaskIcon style={{color:Color.secondary}}/>,
        'parent': 4,
        'url': RouterPathEnum.TAREA
      },
      {
        'title': 'Resumen tiempo',
        'code': 6,
        'icon': <TaskTimeIcon style={{color:Color.secondary}}/>,
        'parent': 4,
        'url': RouterPathEnum.RESUMEN_TIEMPO
      },
      {
        'title': 'Por Gestiones',
        'code': 6,
        'icon': <TaskTimeLineIcon style={{color:Color.secondary}}/>,
        'parent': 4,
        'url': RouterPathEnum.EVOLUCION_GESTIONES
      },
      {
        'title': 'Tarea por Cliente',
        'code': 6,
        'icon': <TaskAssignmentIcon style={{color:Color.secondary}}/>,
        'parent': 4,
        'url': RouterPathEnum.TAREA_CLIENTE
      }
    ]
  }
];

function controlRoles() {
  aMenu.forEach(function (menu) {
    const pos = aMenuRol.map(function (e) { return e.code; }).indexOf(menu.code);
    menu.visible = aMenuRol[pos].visible;
    if(menu.code==='adm_usuario'){
      menu.visible= false;
    }
  })
  return aMenu;
}

function Menu() {
  let user = getAuth().name
  const listItems = controlRoles().map((section, i) => {
    return (
      <div key={"menu-div-" + i} style={{ display: section.visible ? 'block' : 'none' }}  >
        <ListSubheader key={"menu-listsubheader-" + i} component="div" inset style={{backgroundColor:Color.secondary, color:Color.white}}  >
          {section.title}
        </ListSubheader>
        {subMenu(section.children, i)}
      </div>
    )
  });

  return (
    <div style={{backgroundColor:Color.grayVariant}}>
      <Avatar sx={{ m: 1, bgcolor: Color.secondary, alignContent: 'center' }} style={{ marginLeft: '40%' }}>
        <AvatarIcon />
      </Avatar>
      <Typography variant="body2" color="text.secondary" align="center" fontStyle={{color:Color.secondary}} style={{fontWeight:"normal", fontSize:15}}>
        {user}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <NavLink to={RouterPathEnum.HOME}>
        <ListItemButton style={{backgroundColor:Color.grayVariant}}>
          <ListItemIcon>
            <DashboardIcon style={{color:Color.secondary}}/>
          </ListItemIcon>
          <ListItemText primary="Inicio" style={{color:Color.secondary}}/>
        </ListItemButton>
      </NavLink>
      {listItems}
    </div>
  )
}

function subMenu(aSubmenu: any[], i: number) {
  return (
    aSubmenu.map((submenu, j) =>
      <NavLink key={"menu-navlink-" + i + "-" + j} to={submenu.url} style={{ textDecoration: 'none' }}>
        <ListItemButton style={{backgroundColor:Color.grayVariant}}>
          <ListItemIcon>
            {submenu.icon}
          </ListItemIcon>
          <ListItemText primary={submenu.title} style={{color:Color.secondary}}/>
        </ListItemButton>
      </NavLink>
    )
  )
}

export { Menu }
