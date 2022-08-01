import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { createStaff } from '../../../http/infoAPI'

const CreateStaff = ({ show, onHide }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [description, setDescription] = useState('')
    const [post, setPost] = useState('')
    const [file, setFile] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addStaff = () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("surname", surname)
        formData.append("description", description)
        formData.append("post", post)
        formData.append("img", file)
        createStaff(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Добавить сотрудника
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mb-2"
                        placeholder="Введите имя"
                    />
                    <Form.Control
                        onChange={e => setSurname(e.target.value)}
                        className="mb-2"
                        placeholder="Введите фамилию"
                    />
                    <Form.Control
                        onChange={e => setDescription(e.target.value)}
                        className="mb-2"
                        placeholder="Введите описание"
                    />
                    <Form.Control
                        onChange={e => setPost(e.target.value)}
                        className="mb-2"
                        placeholder="Введите должность"
                    />
                    <Form.Control
                        onChange={selectFile}
                        className="mt-3"
                        type="file"
                        placeholder="Выберите файл"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addStaff} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateStaff
