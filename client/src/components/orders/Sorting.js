import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const Sorting = observer(() => {
    const { product } = useContext(Context)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-dark">{product.orderSort || "Сортировать"}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => product.setOrderSort("По дате (сначала новые)")}>
                    По дате (сначала новые)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("По дате (сначала давние)")}>
                    По дате (сначала давние)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("По цене (убывание)")}>
                    По цене (убывание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("По цене (возрастание)")}>
                    По цене (возрастание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("По количеству товаров (убывание)")}>
                    По количеству товаров (убывание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("По количеству товаров (возрастание)")}>
                    По количеству товаров (возрастание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => product.setOrderSort("Сортировать")}>
                    Без сортировки
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >

    );
});

export default Sorting;
