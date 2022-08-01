import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const Sorting = observer(() => {
    const { product } = useContext(Context)

    return (
        <Container className="d-flex justify-content-start mt-3">
            <Dropdown>
                <Dropdown.Toggle variant="outline-dark">{product.productSort || "Сортировать"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => product.setProductSort("По названию")}>
                        По названию
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => product.setProductSort("По популярности")}>
                        По популярности
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => product.setProductSort("По цене (возрастание)")}>
                        По цене (возрастание)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => product.setProductSort("По цене (убывание)")}>
                        По цене (убывание)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => product.setProductSort("Сортировать")}>
                        Без сортировки
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown >
        </Container>
    );
});

export default Sorting;
