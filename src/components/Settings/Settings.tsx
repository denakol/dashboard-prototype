import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/interfaces/interfaces'
import { Card, Spin } from 'antd'
import { getPosts } from '../../redux/store/Post/PostActions'
import { selectPostsIsDone, selectPostsIsLoading } from '../../redux/store/Post/selectors'

export const Settings: React.FC = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector<IStore, boolean>(selectPostsIsLoading)
  const isDone = useSelector<IStore, boolean>(selectPostsIsDone)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <Card title="Settings">
      {isLoading && <Spin />}
      {isDone && <div>Loaded</div>}
    </Card>
  )
}
