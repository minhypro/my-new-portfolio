import {FC, ReactNode} from 'react'

import Header from './Header'

type Layout = {
	children: ReactNode
}

const Homepage: FC<Layout> = ({children}) => {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Homepage
