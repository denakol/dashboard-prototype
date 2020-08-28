import { IUser } from '../../interfaces/Model/IUser'
import { IStatus } from '../../interfaces/IStatus'

import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { fetchUsers } from './UserActions'

export interface IUserState {
  users: IUser[] | null
  usersStatus: IStatus
}

const initialState: IUserState = {
  users: null,
  usersStatus: {
    isPending: false,
    isDone: false,
    error: null,
  },
}
const getUsersStartHandler = (state: IUserState, action: PayloadAction<IUser[]>) => {
  return {
    ...state,
    users: [],
    usersStatus: {
      isPending: true,
      isDone: false,
      error: null,
    },
  }
}

const getUsersDoneHandler = (state: IUserState, action: PayloadAction<IUser[]>) => {
  return {
    ...state,
    users: action.payload,
    usersStatus: {
      isPending: false,
      isDone: true,
      error: null,
    },
  }
}
const getUsersFailureHandler = (
  state: IUserState,
  action: PayloadAction<
    any,
    string,
    { arg: void; requestId: string; aborted: boolean; condition: boolean },
    SerializedError
  >,
) => {
  return {
    ...state,
    usersStatus: {
      isPending: false,
      isDone: true,
      error: action.payload,
    },
  }
}

const repoDetails = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, getUsersStartHandler)
    builder.addCase(fetchUsers.fulfilled, getUsersDoneHandler)
    builder.addCase(fetchUsers.rejected, getUsersFailureHandler)
  },
})
