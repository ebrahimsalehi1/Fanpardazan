import React from 'react'
import Grid from '../Base/Grid';

export default function GridSample() {
    return (<Grid row>

        <Grid md={4} sm={6}>
            <div ><label>input 1</label><input type='text' /></div>
        </Grid>

        <Grid md={4} sm={6}>
            <div ><label>input 2</label><input type='text' /></div>
        </Grid>

        <Grid md={4} sm={6}>
            <div ><label>input 3</label><input type='checkbox' /></div>
        </Grid>

        <Grid md={6} sm={6}>
            <div ><label>input 4</label><input type='color' /></div>
        </Grid>

        <Grid md={6} sm={6}>
            <div ><label>input 5</label><input type='date' /></div>
        </Grid>

        <Grid md={12} sm={12}>
            <div ><input type='submit' style={{ width: '100%' }} /></div>
        </Grid>

    </Grid>)
}