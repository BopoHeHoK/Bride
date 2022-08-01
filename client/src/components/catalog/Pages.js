import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const Pages = observer(() => {
    const { product } = useContext(Context)

    const prev = () => {
        if (product.pageProduct > 1)
            product.setPageProduct(product.pageProduct - 1)
    }

    const next = () => {
        product.setPageProduct(product.pageProduct + 1)
    }

    return (
        <Pagination className="mt-5">
            <Pagination.Prev onClick={() => prev()} />
            <Pagination.Next onClick={() => next()} />
        </Pagination>
    )
})

export default Pages
