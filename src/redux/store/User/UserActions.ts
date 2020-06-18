
import axios from "axios";


import {createAsyncThunk} from '@reduxjs/toolkit'
import {IUser} from "../../interfaces/Model/IUser";


export const fetchUsers = createAsyncThunk(
    'users/getUsers',
    async (userId, thunkAPI) => {
        const res = await axios
            .get(`https://gorest.co.in/public-api/users`, {
                params: {
                    _format: "json",
                    "access-token": "up30apOaxQ90ObhTUpNN269UIpXu63KmxUTP"
                }
            })
        return res.data.result as IUser[]
    }
)

