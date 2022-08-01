import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { createType } from '../../../http/productAPI'

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value }).then(data => setValue(''))
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addType} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType
