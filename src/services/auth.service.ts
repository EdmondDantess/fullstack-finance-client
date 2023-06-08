import { IResponseUserData, IUser, IUserData } from '../types/types'
import { instance } from '../api/axios.api'

export const AuthService = {
	async registration(userData: IUserData): IResponseUserData | undefined {
		const { data } = await instance.post<IResponseUserData | undefined>(
			'user',
			userData
		)
		return data
	},
	async login(userData: IUserData): IUser | undefined {
		const { data } = await instance.post<IUser | undefined>(
			'auth/login',
			userData
		)
		return data
	},
	async getProfile(): IUser | undefined {
		const { data } = await instance.get('auth/profile')
		if (data) return data
	},
}
