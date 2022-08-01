import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const Sorting = observer(() => {
    const { info } = useContext(Context)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-dark">{info.messageSort || "Сортировать"}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => info.setMessageSort("По дате (сначала новые)")}>
                    По дате (сначала новые)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setMessageSort("По дате (сначала давние)")}>
                    По дате (сначала давние)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setMessageSort(null)}>
                    Нет
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >
    );
});

export default Sorting;
