import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const Sorting = observer(() => {
    const { info } = useContext(Context)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-dark">{info.historySort || "Сортировать"}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => info.setHistorySort("По дате (сначала новые)")}>
                    По дате (сначала новые)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("По дате (сначала давние)")}>
                    По дате (сначала давние)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("По цене (убывание)")}>
                    По цене (убывание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("По цене (возрастание)")}>
                    По цене (возрастание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("По количеству товаров (убывание)")}>
                    По количеству товаров (убывание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("По количеству товаров (возрастание)")}>
                    По количеству товаров (возрастание)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setHistorySort("Сортировать")}>
                    Без сортировки
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >

    );
});

export default Sorting;
