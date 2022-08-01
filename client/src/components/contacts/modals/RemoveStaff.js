import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { removeStaff } from '../../../http/infoAPI'

const RemoveStaff = ({ show, onHide, id }) => {
    const remove = () => {
        removeStaff(id)
        onHide()
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    Вы точно хотите удалить сотрудника?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={remove} variant="outline-danger">Да</Button>
                <Button onClick={onHide} variant="outline-dark">Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveStaff
