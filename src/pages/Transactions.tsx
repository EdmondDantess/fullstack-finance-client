import { FC } from 'react'
import TransactionForm from '../components/TransactionForm'
import { instance } from '../api/axios.api'
import { ICategory, IResponseTransactionLoader } from '../types/types'
import { useLoaderData } from 'react-router-dom'

export const transactionLoader = async () => {
	const categories = await instance.get<ICategory[]>('/categories')
	const data = {
		categories: categories.data,
	}
	return data
}
export const transactionActions = async ({ request }: any) => {
	const data = {}
	return data
}

const Transactions: FC = () => {
	const { categories } = useLoaderData() as IResponseTransactionLoader

	return (
		<>
			<div className={'mt-4 grid grid-cols-2 items-start gap-4'}>
				<div className={'cols-span-2 grid'}>
					<TransactionForm />
				</div>
				<div className={'rounded-md bg-slate-800 p-3'}>
					<div className={'grid grid-cols-2 gap-3'}>
						<div>
							<p className={'text-md text-center font-bold uppercase'}>
								Total income:
							</p>
							<p className={'mt-2 rounded-sm bg-green-600 p-1 text-center'}>
								1000$
							</p>
						</div>
						<div>
							<p className={'text-md text-center font-bold uppercase'}>
								Total expense:
							</p>
							<p className={'mt-2 rounded-sm bg-red-500 p-1 text-center'}>
								1000$
							</p>
						</div>
					</div>
					<>Chart</>
				</div>
			</div>

			<h1 className={'my-5'}>Table</h1>
		</>
	)
}

export default Transactions
