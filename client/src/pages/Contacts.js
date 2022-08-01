import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Col, Row } from 'react-bootstrap'
import { Context } from '../index'
import ContactForm from '../components/contacts/ContactForm'
import TypeBar from '../components/contacts/TypeBar'
import StaffList from '../components/contacts/StaffList'
import Messages from '../components/contacts/Messages'
import Info from '../components/contacts/Info'
import { fetchStaff } from '../http/infoAPI'

const Contacnts = observer(() => {
  const { user } = useContext(Context)
  const { info } = useContext(Context)

  useEffect(() => {
    fetchStaff().then(data => {
      info.setStaff(data)
    })
  }, [])

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          {user.isAdmin === "ADMIN"
            ?
            {
              0: <Messages />,
              1: <StaffList />,
              2: <Info />
            }[user.contactTypeBar]
            :
            {
              0: <ContactForm />,
              1: <StaffList />,
              2: <Info />
            }[user.contactTypeBar]
          }
        </Col>
      </Row>
    </Container>
  )
})

export default Contacnts


