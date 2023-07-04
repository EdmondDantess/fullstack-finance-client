import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Transactions, {
	transactionActions,
	transactionLoader,
} from '../pages/Transactions'
import Categories, {
	categoriesAction,
	categoryLoader,
} from '../pages/Categories'
import Auth from '../pages/Auth'
import Error from '../pages/Error'
import ProtectedRoute from '../components/ProtectedRoute'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'transactions',
				loader: transactionLoader,
				action: transactionActions,
				element: (
					<ProtectedRoute>
						<Transactions />
					</ProtectedRoute>
				),
			},
			{
				path: 'categories',
				action: categoriesAction,
				loader: categoryLoader,
				element: (
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				),
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])
