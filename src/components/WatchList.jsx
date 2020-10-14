import React, { useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  }
}));


const sortWatchList = (watchList, sortOption) => {
  if (sortOption === "ASC") {
    return watchList.sort((a, b) => a.title.localeCompare(b.title))
  }
  if (sortOption === "DESC") {
    return watchList.sort((a, b) => b.title.localeCompare(a.title))
  }
}

const WatchList = ({programType}) => {
  const classes = useStyles();
  const [watchListData, setWatchListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchVal, setSearchVal] = useState("")
  const [sortBy, setSortBy] = useState('ASC');

  const loadData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setWatchListData(data.entries.filter(e => e.programType === programType))
    let tempData = data.entries.filter(e => (e.programType === programType) && (e.releaseYear >= 2010))
    setFilteredData(sortWatchList(tempData, sortBy).splice(0, 21))
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (event) => {
    setSortBy(event.target.value)
    setFilteredData(sortWatchList(filteredData, event.target.value))
  }

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
    <Grid container spacing={4}>
      <Grid item xs={6} sm={6} md={6}>
        <SearchBar
            value={searchVal}
            onChange={(val) => {
              setSearchVal(val)
              if (val.length >= 3) {
                let tempData = watchListData.filter(e => e.title.toLowerCase().includes(val.toLowerCase()))
                setFilteredData(sortWatchList(tempData, sortBy))
              }
              if (val.length === 0) {
                let tempData = watchListData.filter(e => (e.programType === programType) && (e.releaseYear >= 2010))
                setFilteredData(sortWatchList(tempData, sortBy).splice(0, 21))
              }
            }}
            onCancelSearch={() => {
              let tempData = watchListData.filter(e => (e.programType === programType) && (e.releaseYear >= 2010))
              setFilteredData(sortWatchList(tempData, sortBy).splice(0, 21))
            }}
        />
      </Grid>
      <Grid item xs={4} sm={4} md={4}></Grid>
      <Grid item xs={2} sm={2} md={2}>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            onChange={handleChange}
        >
          <MenuItem value={'ASC'}>Ascendente</MenuItem>
          <MenuItem value={'DESC'}>Descendente</MenuItem>
        </Select>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      {filteredData.map((e) => (
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

export default WatchList;