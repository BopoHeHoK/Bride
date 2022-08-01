import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Container } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import HistoryList from './HistoryList'
import Pages from './PagesHistory'
import { fetchHistory } from '../../http/infoAPI'

const History = observer(() => {
    const { info } = useContext(Context)

    let token
    try {
        token = jwt_decode(localStorage.getItem('token'))
    } catch (err) {
        console.log('Error: ')
    }

    useEffect(() => {
        fetchHistory(token.id, null, info.limitHistory, info.pageHistory).then(data => {
            info.setHistory(data.rows)
            info.setHistoryCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchHistory(token.id, info.historySort, info.limitHistory, info.pageHistory).then(data => {
            info.setHistory(data.rows)
            info.setHistoryCount(data.count)
        })
    }, [token.id, info.historySort, info.limitHistory, info.pageHistory])

    return (
        <Container className="mt-4">
            <HistoryList />
            <div className="d-flex justify-content-center">
                <Pages />
            </div>
        </Container>
    )
})

export default History


