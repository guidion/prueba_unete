import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const API_URL = "https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899"

export default function Home () {
    const [apiData, setApiData] = useState(null)
    useEffect(() => {
        loadData()
    }, [])
    const loadData = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()
        setApiData(data)
        console.log(data)
    }
    return (
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            SERIES
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        PELICULAS
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

/*const Home = () => {
    return()
}
export default Home
*/
