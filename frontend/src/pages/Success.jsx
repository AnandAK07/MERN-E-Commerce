import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Success = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
  }, 5000)
  return (
    <div>Success</div>
  )
}
