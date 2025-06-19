import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"


export default function InfoBox({info}){
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">

          <div className='cardConatiner'>
            <Card sx={{ width:400,height:450,margin:2 }}>
      <CardMedia
        sx={{ height: 150 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          <i>{info.city}</i>&nbsp; {
          info.humidity > 80 ? 
          <ThunderstormIcon fontSize='large' color='secondary'/> 
          : info.temp>15
          ?<SunnyIcon fontSize='large' color='error'/>
          :<AcUnitIcon fontSize='large' color='primary'/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p><b>Temperature : {info.temp}&deg;C</b></p>
         <p><b>Humidity : {info.humidity}</b></p>
         <p><b>Feels-Like : {info.feelsLike}</b></p>
         <p><b>Temp-Max : {info.tempMax}&deg;C</b></p>
         <p><b>Temp-Min : {info.tempMin}</b></p>
         <p><b>Weather : {info.weather}</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}