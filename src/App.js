import './App.css';
import {Container, Grid, Header, Statistic, Segment, Icon, Form, Button} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
    return (
        <Container>
            <MainHeader title='Budget'/>
            <Statistic size='small'>
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>2,5500.53</Statistic.Value>
            </Statistic>

            <DisplayBalances />

            <MainHeader title='History' type='h3'/>

            <EntryLine description='income' value='$10,00' isExpense='red'/>
            <EntryLine description='expense' value='$20,00' isExpense='green'/>

            <MainHeader title='Add new transaction' type='h3'/>
            <NewEntryForm />
        </Container>
);
}

export default App;
