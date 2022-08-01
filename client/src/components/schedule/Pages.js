import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const Pages = observer(() => {
    const { info } = useContext(Context)

    const prev = () => {
        if (info.pageBooking > 1)
            info.setPageBooking(info.pageBooking - 1)
    }

    const next = () => {
        info.setPageBooking(info.pageBooking + 1)
    }

    return (
        <Pagination className="mt-5">
            <Pagination.Prev onClick={() => prev()} />
            <Pagination.Next onClick={() => next()} />
        </Pagination>
    )
})

export default Pages
