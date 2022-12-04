import axios from 'axios'
//
import { User } from '../model/User'

export const findAll = async (): Promise<User[]> => {
    return await axios.get(
        '/api/users'
    )
}

export const findById = async (id: string): Promise<User | null> => {
    return await axios.get(
        `/api/user/${id}`
    )
}
