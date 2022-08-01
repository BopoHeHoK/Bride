import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const Pages = observer(() => {
    const { info } = useContext(Context)

    const prev = () => {
        if (info.pageNotification > 1)
            info.setPageNotification(info.pageNotification - 1)
    }

    const next = () => {
        info.setPageNotification(info.pageNotification + 1)
    }

    return (
        <Pagination className="mt-5">
            <Pagination.Prev onClick={() => prev()} />
            <Pagination.Next onClick={() => next()} />
        </Pagination>
    )
})

export default Pages
