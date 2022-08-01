import React, { useContext } from 'react'
import { Dropdown, Button, Modal } from 'react-bootstrap'
import { Context } from '../../../index'
import { removeType } from '../../../http/productAPI'

const RemoveType = ({ show, onHide }) => {

    const { product } = useContext(Context)
    const remove = () => {
        removeType(product.selectedType)
        onHide()
        setTimeout(() => document.location.reload(), 1000)
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title>
                    Вы точно хотите удалить тип?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark">{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.productType.map(type =>
                            <Dropdown.Item
                                onClick={() => product.setSelectedType(type.id)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={remove} variant="outline-danger">Да</Button>
                <Button onClick={onHide} variant="outline-dark">Отмена</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveType
