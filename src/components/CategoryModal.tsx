import { FC } from 'react'
import { Form } from 'react-router-dom'

interface ICategoryModal {
	type: 'post' | 'patch'
	id?: number
	setVisibleModal: (visible: boolean) => void
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibleModal }) => {
	return (
		<div
			className={
				'fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/50'
			}
		>
			<Form
				className={'grid w-[300px] gap-2 rounded-md bg-slate-900 p-5 '}
				action={'/categories'}
				method={type}
				onSubmit={() => setVisibleModal(false)}
			>
				<label htmlFor="title">
					<small>Category Title</small>
					<input
						type="text"
						name={'title'}
						placeholder={'Title...'}
						className={'input w-full'}
					/>
					<input type="hidden" value={id} name={'id'} />
				</label>

				<div className={'flex items-center gap-2'}>
					<button type={'submit'} className={'btn btn-green'}>
						{type === 'patch' ? 'Save' : 'Create'}
					</button>
					<button
						className={'btn btn-red'}
						onClick={() => setVisibleModal(false)}
					>
						Close
					</button>
				</div>
			</Form>
		</div>
	)
}

export default CategoryModal
