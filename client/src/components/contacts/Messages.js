import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container } from 'react-bootstrap'
import { Context } from '../../index'
import MessagesList from './MessagesList'
import Pages from './Pages'
import { fetchMessage } from '../../http/infoAPI'

const Messages = observer(() => {
    const { info } = useContext(Context)
    const { user } = useContext(Context)


    useEffect(() => {
        fetchMessage(null, info.limitMessage, info.pageMessage).then(data => {
            info.setMessage(data.rows)
            info.setMessageCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchMessage(info.messageSort, info.limitMessage, info.pageMessage).then(data => {
            info.setMessage(data.rows)
            info.setMessageCount(data.count)
        })
    }, [info.messageSort, info.limitMessage, info.pageMessage])

    return (

        <Container className="mt-4">
            {
                user.isAdmin === "ADMIN"
                    ?
                    <div>
                        <MessagesList />
                        <div className="d-flex justify-content-center">
                            <Pages />
                        </div>
                    </div>
                    :
                    <div>
                        <h1>Доступ к странице имеют только администраторы!</h1>
                    </div>
            }
        </Container>
    )
})

export default Messages


