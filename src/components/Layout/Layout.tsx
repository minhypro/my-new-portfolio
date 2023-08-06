import {FC, ReactNode, useContext} from 'react'

import {StateContext} from '@/context/globalState'

import Header from './Header'
import Sidebar from './Sidebar'

type Layout = {
	children: ReactNode
}

const Homepage: FC<Layout> = ({children}) => {
	const {isAdvanced} = useContext(StateContext)
	return (
		<div className={`grid grid-cols-1 dark:grid-cols-[60px_1fr]`}>
			{isAdvanced && <Sidebar />}
			<div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 transition-all duration-700 dark:from-slate-900  dark:to-slate-900">
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Homepage
