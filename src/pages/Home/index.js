import React from 'react';
import HeadBar from "../../components/HeadBar";
import Grid from "../../components/Grid";
import TextFields from "../../components/TextFields";

class Home extends React.Component {
    render () {
        return (
            <div>
                <div><HeadBar /></div>
                <Grid>
                    <TextFields />
                </Grid>
            </div>
        );
    }
}

export default Home;