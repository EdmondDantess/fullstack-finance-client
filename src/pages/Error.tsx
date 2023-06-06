import { FC } from 'react'
import { Link } from 'react-router-dom'

const Error: FC = () => {
	return (
		<div
			className={
				'flex flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 font-roboto text-white'
			}
		>
			<div className={'text-6xl'}>404</div>
			<div className={'text-2xl'}>Page not found</div>
			<Link
				to={'/'}
				className={'rounded-md bg-sky-500 px-6 py-2 hover:bg-sky-600'}
			>
				Back to main page
			</Link>
		</div>
	)
}

export default Error
