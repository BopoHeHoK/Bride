import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Col, Form, Row, Dropdown, Button, Modal } from 'react-bootstrap'
import { Context } from '../../../index'
import { createProduct, fetchProduct, fetchTypes } from '../../../http/productAPI'

const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [priceError, setPriceError] = useState("")
    const [title, setTitle] = useState("Выберите тип")

    useEffect(() => {
        fetchTypes().then(data => product.setProductType(data))
        fetchProduct().then(data => product.setProducts(data.rows))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        if (price >= 0) {
            setPriceError("")
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", `${price}`)
            formData.append("img", file)
            formData.append("productTypeId", product.selectedType)
            formData.append("info", JSON.stringify(info))
            createProduct(formData).then(data => onHide())
        } else {
            setPriceError("Цена не должна быть отрицательной")
        }
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark">{title || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.productType.map(type =>
                                <Dropdown.Item
                                    onClick={() => (product.setSelectedType(type.id), setTitle(type.name))}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название товара"
                    />
                    <Form.Control
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите краткое описание товара"
                    />
                    <Form.Control
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        type="number"
                        placeholder="Введите стоимость товара"
                    />
                    <p style={{ color: "red" }} className="m-1">{priceError}</p>
                    <Form.Control
                        onChange={selectFile}
                        className="mt-3"
                        type="file"
                        placeholder="Выберите файл"
                    />
                    <hr />
                    <Button onClick={addInfo} variant="outline-dark">Добавить подробное описание</Button>
                    {info.map(i =>
                        <Row key={i.number} className="mt-3">
                            <Col
                                value={i.title}
                                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                                md={4}
                            >
                                <Form.Control placeholder="Введите название" />
                            </Col>
                            <Col
                                value={i.description}
                                onChange={(e) => changeInfo("description", e.target.value, i.number)}
                                md={4}
                            >
                                <Form.Control placeholder="Введите описание" />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant="outline-danger">Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addProduct} variant="outline-success">Добавить</Button>
                <Button onClick={onHide} variant="outline-danger">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateProduct
