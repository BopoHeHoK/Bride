import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Col, Row } from 'react-bootstrap'
import TypeBar from '../components/profile/TypeBar'
import Info from '../components/profile/Info'
import Notifications from '../components/profile/Notifications'
import History from '../components/profile/History'
import { Context } from '../index'

const ProductPage = observer(() => {
    const { user } = useContext(Context)

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    {
                        {
                            0: <Info />,
                            1: <Notifications />,
                            2: <History />
                        }[user.profileTypeBar]
                    }
                </Col>
            </Row>
        </Container >
    )
})

export default ProductPage

