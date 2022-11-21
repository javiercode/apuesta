import { Button, Card, CardActions, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { SessionDto } from '../interfaces/store';
import { getService } from '../service/index.service';
import { getAuth } from '../store/login';

function Home() {
  const [dataList, setDataList] = React.useState<SessionDto[]>([]);
  
  
  React.useEffect(() => {
    getList()
  }, []);

  const getList = () => {
    const user = getAuth();
    getService(`/roluser/list/${user.username}`, {}).then((result) => {
      if (result.success) {
        const userList = result.data as SessionDto[];
        setDataList(userList);
      }
    }).catch(()=>{
      console.error("error de carga de usuario")
    });
  };

  return (
    <>
    <Typography variant="h4" component="h4">
        ADMINISTRACIÓN DE USUARIOS
      </Typography>
      
      <Grid container component="main" justifyContent={'flex-end'} >
        {/* <FormCreate sucursalList={sucursalList} rolList={rolList} getList={getList} /> */}
      </Grid>
      <Box sx={{ width: '100%' }} style={{display:dataList.length==0?'block':'none'}}>
        <LinearProgress />
      </Box>
    {
      dataList.map((rol,i)=>(
        <Card sx={{ minWidth: 100,width:'50vh', display:'flex' }} key={"card-"+i}>
          <CardContent key={"card-content"+i}>
            <Typography variant="h5" component="div" key={"card-content-titulo"+i}>
              {rol.grupo}
            </Typography>
            
            <Typography variant="body2"  key={"card-content-contenido"+i}>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions  key={"card-content-action"+i}>
            <Button size="small"  key={"card-content-button"+i}>Learn More</Button>
          </CardActions>
        </Card>
      ))
    }
    </>
    
  );
}

export default Home;
