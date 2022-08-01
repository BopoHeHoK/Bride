import React, { useContext, useState } from 'react'
import '../../styles/App.css'
import { Image, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import EditStaff from './modals/EditStaff'
import RemoveStaff from './modals/RemoveStaff'

const StaffItem = ({ staffItem }) => {
    const { user } = useContext(Context);

    const [staffEditVisible, setStaffEditVisible] = useState(false)
    const [staffRemoveVisible, setStaffRemoveVisible] = useState(false)

    const navigate = useNavigate();
    return (
        <Card style={{ width: 420, cursor: "pointer", borderRadius: 10 }} className="d-flex justify-content-center mt-3" border="dimgray">
            <Image
                className="image staff"
                src={process.env.REACT_APP_API_URL + staffItem.img}
                style={{ borderRadius: 10 }}
            />
            <div className="mt-2">
                <div className="d-flex justify-content-center">
                    <h3 className="me-2">{staffItem.name}</h3>
                    <h3 className="ms-2">{staffItem.surname}</h3>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    <h4>Должность</h4>
                    <h5>{staffItem.post}</h5>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <h6>{staffItem.description}</h6>
                </div>
                {user.isAdmin === "ADMIN"
                    ?
                    <div className="d-flex justify-content-center mt-3">
                        <Button
                            onClick={() => setStaffEditVisible(true)}
                            className="m-3"
                            variant="outline-dark"
                        >
                            Редактировать
                        </Button>
                        <Button
                            onClick={() => setStaffRemoveVisible(true)}
                            className="m-3"
                            variant="outline-danger"
                        >
                            Удалить
                        </Button>
                    </div>
                    :
                    <div></div>
                }
            </div >
            <EditStaff show={staffEditVisible} onHide={() => setStaffEditVisible(false)} id={staffItem.id} />
            <RemoveStaff show={staffRemoveVisible} onHide={() => setStaffRemoveVisible(false)} id={staffItem.id} />
        </Card >
    )
}

export default StaffItem