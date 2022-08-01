import React, { useContext, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Container, Button } from 'react-bootstrap'
import { Context } from '../../index'
import CreateStaff from './modals/CreateStaff'
import StaffItem from './StaffItem'

const StaffList = () => {
    const { user } = useContext(Context)
    const { info } = useContext(Context)

    const [staffCreateVisible, setStaffCreateVisible] = useState(false)

    return (
        <Container>
            <Row className="ms-5">
                {info.staff.lenght !== null
                    ?
                    info.staff.map(staffItem =>
                        <StaffItem key={staffItem.id} staffItem={staffItem} />
                    )
                    : console.log()
                }
            </Row>
            {user.isAdmin === "ADMIN"
                ?
                <Button
                    onClick={() => setStaffCreateVisible(true)}
                    style={{ float: "right" }}
                    className="m-5"
                    variant="outline-success"
                >
                    Добавить сотрудника
                </Button>
                :
                <div></div>
            }
            <CreateStaff show={staffCreateVisible} onHide={() => setStaffCreateVisible(false)} />
        </Container>
    )
}

export default StaffList
