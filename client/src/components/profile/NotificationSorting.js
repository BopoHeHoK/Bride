import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const Sorting = observer(() => {
    const { info } = useContext(Context)

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-dark">{info.notificationSort || "Сортировать"}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => info.setNotificationSort("По дате (сначала новые)")}>
                    По дате (сначала новые)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setNotificationSort("По дате (сначала давние)")}>
                    По дате (сначала давние)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => info.setNotificationSort("Сортировать")}>
                    Без сортировки
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >

    );
});

export default Sorting;
