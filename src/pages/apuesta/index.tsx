import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { SessionDto } from '../../interfaces/store';
import { getService } from '../../service/index.service';
import { getAuth } from '../../store/login';

import FormCreate from "./FormCreate"
import Filter from "./Filter"
import { IGrupo } from '../../interfaces/grupo';
import { getFecha, getStrFecha } from '../../config/General';
import { useParams } from 'react-router-dom';

function Home() {
  let { idGrupo } = useParams();
  const [dataList, setDataList] = React.useState<IGrupo[]>([]);


  React.useEffect(() => {
    
    console.log("grupo",idGrupo)
    getList()
  }, []);

  const getList = () => {
    const user = getAuth();
    getService(`/grupo/list/${user.username}`, {}).then((result) => {
      if (result.success) {
        const userList = result.data as IGrupo[];
        console.log("grupoList",userList)
        setDataList(userList);
      }
    }).catch(() => {
      console.error("error de carga de usuario")
    });
  };

  return (
    <>
      
      <Grid container component="main" justifyContent={'space-between'} >
        <Typography variant="h4" component="h4">
          APUESTAS
        </Typography>
        <FormCreate />
      </Grid>
      <hr />
      <Filter />
      
      <Box sx={{ width: '100%' }} style={{ display: dataList.length == 0 ? 'block' : 'none' }}>
        <LinearProgress />
      </Box>
      <Grid container spacing={3}>
        {
          dataList.map((grupo, i) => (
            <Grid item xs={3} key={"grid-" + i}>
              <Card sx={{ minWidth: 100 }} key={"card-" + i}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      {grupo.nombre.substring(0,1)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                    </IconButton>
                  }
                  title={grupo.nombre}
                  subheader={getStrFecha({date:grupo.fechaRegistro}) }
                />
                <CardContent key={"card-content" + i}>
                  <Typography variant="body2" key={"card-content-contenido" + i}>
                    <strong>Privacidad: </strong>{grupo.privacidad}
                    <br />
                    <strong>Tipo: </strong>{grupo.tipo}
                  </Typography>
                </CardContent>
                <CardActions key={"card-content-action" + i}>
                  <Button size="small" key={"card-content-button" + i}>Ingresar</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>

  );
}

export default Home;
