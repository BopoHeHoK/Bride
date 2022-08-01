import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const Pages = observer(() => {
    const { info } = useContext(Context)

    return (
        <Pagination className="mt-5">
            <Pagination.Prev onClick={() => info.setPageFeedback(info.pageFeedback - 1)} />
            <Pagination.Next onClick={() => info.setPageFeedback(info.pageFeedback + 1)} />
        </Pagination>
    )
})

export default Pages
