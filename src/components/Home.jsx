import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function Home () {
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
