import React, { useContext, useEffect } from 'react'
import FeedbacksList from '../components/feedback/FeedbackList'
import jwt_decode from 'jwt-decode'
import { Context } from '../index'
import { fetchFeedback } from '../http/infoAPI'
import Pages from '../components/feedback/Pages'

const Feedback = () => {

  const { info } = useContext(Context)

  let token
  try {
    token = jwt_decode(localStorage.getItem('token'))
  } catch (err) {
    console.log('Error: ')
  }

  useEffect(() => {
    fetchFeedback().then(data => {
      info.setFeedback(data.rows)
      info.setFeedbackCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchFeedback().then(data => {
      info.setFeedback(data.rows)
      info.setFeedbackCount(data.count)
    })
  }, [])

  return (
    <div>
      <FeedbacksList />
      <div className="d-flex justify-content-center">
        <Pages />
      </div>
    </div>
  )
}

export default Feedback
