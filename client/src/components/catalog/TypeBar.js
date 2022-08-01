import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../../index'
import CreateType from './modals/CreateType'
import RemoveType from './modals/RemoveType'

const TypeBar = observer(() => {
    const { product } = useContext(Context)
    const { user } = useContext(Context)

    const [createTypeVisible, setCreateTypeVisible] = useState(false)
    const [removeTypeVisible, setRemoveTypeVisible] = useState(false)

    return (
        <ListGroup className="mt-3">
            {user.isAdmin === "ADMIN"
                ?
                <div>
                    <ListGroup.Item
                        onClick={() => setCreateTypeVisible(true)}
                        style={{ cursor: "pointer" }}
                        variant="success"
                    >
                        Добавить тип
                    </ListGroup.Item>
                    <ListGroup.Item
                        onClick={() => setRemoveTypeVisible(true)}
                        style={{ cursor: "pointer" }}
                        variant="danger"
                    >
                        Удалить тип
                    </ListGroup.Item>
                </div>
                :
                <div />
            }
            {
                product.productType.map(type =>
                    <ListGroup.Item
                        key={type.id}
                        onClick={() => product.setSelectedType(type.id)}
                        active={type.id === product.selectedType}
                        style={{ cursor: "pointer" }}
                    >
                        {type.name}
                    </ListGroup.Item>
                )
            }
            <CreateType show={createTypeVisible} onHide={() => setCreateTypeVisible(false)} />
            <RemoveType show={removeTypeVisible} onHide={() => setRemoveTypeVisible(false)} />
        </ListGroup >
    );
});

export default TypeBar;
