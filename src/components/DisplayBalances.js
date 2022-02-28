import React from "react";
import {Grid, Header, Segment, Statistic} from 'semantic-ui-react';
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({title, value, color='black', size='tiny'}) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance size='tiny' color='green'
                                        value='1.045.50' size='small' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance size='tiny' color='green'
                                        value='65.50' size='small' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;