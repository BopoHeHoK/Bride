import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Row, Button } from 'react-bootstrap'
import { Context } from '../../index'
import FeedbackItem from './FeedbackItem'
import CreateFeedback from './modals/CreateFeedback'


const FeedbacksList = observer(() => {
    const { info } = useContext(Context)
    const [createFeedbackVisible, setCreateFeedbackVisible] = useState(false)

    return (
        <Container style={{ width: "80%" }} align="center">
            <Button onClick={() => setCreateFeedbackVisible(true)}
                className="m-4"
                variant="outline-warning"
            >
                Написать отзыв
            </Button>
            <Row className="d-flex">
                {info.feedback != null
                    ?
                    info.feedback.map(feedbackItem =>
                        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />)
                    :
                    <div></div>
                }
            </Row>
            <CreateFeedback show={createFeedbackVisible} onHide={() => setCreateFeedbackVisible(false)} />
        </Container>
    );
});

export default FeedbacksList;
