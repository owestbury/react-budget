import React from "react";
import {Button, Modal} from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

function ModalEdit({
                       isOpen,
                       setIsOpen,
                       isExpense,
                       description,
                       value,
                       setDescription,
                       setValue,
                       setIsExpense
}) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <NewEntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit;