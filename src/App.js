import { useState} from "react";
import './App.css';
import {Container} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
    const [entries, setEntries] = useState(initialEntries);
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    function deleteEntry(id) {
        const result = entries.filter((entry) => entry.id !==id);
        // console.log('entries', entries );
        // console.log('result', result );
        setEntries(result);
    }

    function editEntry(id) {
        console.log(`edit entry with id ${id}`);
        if (id) {
            const index = entries.findIndex(entry => entry.id);
            const entry = entries[index];
            console.log(entry);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    }

    function addEntry(description, value) {
        // entries.push()
        const result = entries.concat({
            id: entries.length+1,
            description,
            value
        });
        console.log('result', result)
        console.log('entries', entries)
        setEntries(result);
    }

    return (
        <Container>
            <MainHeader title='Budget'/>
            <DisplayBalance title='Your Balance:' value='2,5500.53'/>

            <DisplayBalances />
            <MainHeader title='History' type='h3'/>

            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />

            <MainHeader title='Add new transaction' type='h3'/>
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
        </Container>
);
}

export default App;

var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: "$1000,00",
        isExpense:  false
    },
    {
        id: 2,
        description:  "Water bill",
        value:  "$20,00",
        isExpense:  true
    },
    {
        id: 3,
        description:  "Rent",
        value:  "$200,00",
        isExpense:  true
    },
    {
        id: 4,
        description:  "Power bill",
        value:  "$50,00",
        isExpense:  true
    }


    // entries, setEntries
]
