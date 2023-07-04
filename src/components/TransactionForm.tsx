import { FC, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { ICategory } from '../types/types'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
	const { categories } = useLoaderData() as ICategory[]
	const [visibleModal, setVisibleModal] = useState<boolean>(false)

	return (
		<div className={'rounded-md bg-slate-800 p-4'}>
			<Form className={'grid gap-2'} method={'post'} action={'/transactions'}>
				<label className={'grid'} htmlFor="title">
					<span>Title</span>
					<input
						className={'input border-slate-700'}
						required
						type="text"
						placeholder={'title...'}
						name={'title'}
					/>
				</label>
				<label htmlFor="account" className={'grid'}>
					<span>Account</span>
					<input
						className={'input border-slate-700'}
						required
						type="number"
						placeholder={'account...'}
						name={'account'}
					/>
				</label>

				{categories.length ? (
					<label htmlFor="category" className={'grid'}>
						<span>Category</span>
						<select name="category" className={'input border-slate-700'}>
							{categories.map((ctg, ind) => (
								<option key={ind} value={ctg.id}>
									{ctg.title}
								</option>
							))}
						</select>
					</label>
				) : (
					<h1 className={'mt-1 text-red-300'}>To continue a category first</h1>
				)}
				<button
					className={
						'flex max-w-fit items-center gap-2 text-white/50 hover:text-white'
					}
					onClick={() => setVisibleModal(true)}
				>
					<FaPlus />
					<span>Manage categories</span>
				</button>

				<div className={'flex items-center gap-4'}>
					<label className={'flex cursor-pointer items-center gap-2'}>
						<input
							type="radio"
							name={'type'}
							value={'income'}
							className={'form-radio border-slate-700 text-blue-600'}
						/>
						<span>Income</span>
					</label>
					<label className={'flex cursor-pointer items-center gap-2'}>
						<input
							type="radio"
							name={'type'}
							value={'expense'}
							className={'form-radio border-slate-700 text-blue-600'}
						/>
						<span>Expense</span>
					</label>
				</div>
				<button className={'btn btn-green mt-2 max-w-fit'}>Submit</button>
			</Form>
			{visibleModal && (
				<CategoryModal type="post" setVisibleModal={setVisibleModal} />
			)}
		</div>
	)
}

export default TransactionForm
