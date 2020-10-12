import React, { useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const API_URL = "https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899"

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}))

const WatchList = ({programType}) => {
    const classes = useStyles();
    const [watchListData, setWatchListData] = useState([]);
  
    const loadData = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setWatchListData(data.entries.filter(e => e.programType === programType))
    };
  
    useEffect(() => {
      loadData()
    }, [])
  
    return (
        <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={2}>
          {watchListData.map((e) => (
            <Grid item key={e.title} xs={2} sm={2} md={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={e['images']['Poster Art']['url']}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h4">
                    {e.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
  
  export default WatchList