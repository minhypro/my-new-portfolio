import {FC, ReactNode} from 'react'

import Header from './Header'

type Layout = {
	children: ReactNode
}

const Homepage: FC<Layout> = ({children}) => {
	return (
		<div className="min-h-screen overflow-x-hidden transition-all duration-700 dark:bg-slate-700">
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Homepage
