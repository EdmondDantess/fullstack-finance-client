import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Props {
	children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
	const isAuth = useAuth()
	return (
		<div>
			{isAuth ? (
				children
			) : (
				<div className={'flex flex-col items-center justify-center gap-10'}>
					<h1 className={'text-2xl'}>
						To view this page you must be logged in.
					</h1>
				</div>
			)}
		</div>
	)
}

export default ProtectedRoute
