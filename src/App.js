import './App.css';
import {Container, Grid, Header, Statistic, Segment, Icon, Form, Button} from "semantic-ui-react";

function App() {
    return (
        // <div className="App">Hello from budget</div>
        <Container>
            <Header as="h1">Budget</Header>
            <Statistic size='small'>
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>2,5500.53</Statistic.Value>
            </Statistic>
            <Segment textAlign='center'>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Statistic size='tiny' color='green'>
                                <Statistic.Label style={{textAlign: 'left'}}>
                                    Incoming:
                                </Statistic.Label>
                                <Statistic.Value>1.045.50</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic size='tiny' color='green'>
                                <Statistic.Label style={{textAlign: 'left'}}>
                                    Incoming:
                                </Statistic.Label>
                                <Statistic.Value>65.50</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Header as ='h3'>History</Header>
            <Segment color='red'>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" bordered/>
                            <Icon name="trash" bordered/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color='green'>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" bordered/>
                            <Icon name="trash" bordered/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Header as ='h3'>Add new transaction</Header>
            <Form unstackable>
                <Form.Group>
                    <Form.Input
                        icon='tags'
                        width={12}
                        label='Description'
                        placeholder="New Shinny thing"
                    />

                    <Form.Input
                        width={4}
                        label='Value'
                        placeholder='100.00'
                        icon='dollar'
                        iconPosition='left'
                    >
                    </Form.Input>
                    <Button.Group style={{marginTop: 20}}>
                        <Button>Cancel</Button>
                        <Button.Or/>
                        <Button>Ok</Button>
                    </Button.Group>
                </Form.Group>
            </Form>
        </Container>
);
}

export default App;
