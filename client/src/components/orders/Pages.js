import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const Pages = observer(() => {
    const { product } = useContext(Context)

    const prev = () => {
        if (product.pageOrders > 1)
            product.setPageOrders(product.pageOrders - 1)
    }

    const next = () => {
        product.setPageOrders(product.pageOrders + 1)
    }

    return (
        <Pagination className="mt-5">
            <Pagination.Prev onClick={() => prev()} />
            <Pagination.Next onClick={() => next()} />
        </Pagination>
    )
})

export default Pages
