import {FC, ReactNode} from 'react'

import Header from './Header'

type Layout = {
	children: ReactNode
}

const Homepage: FC<Layout> = ({children}) => {
	return (
		<div className="min-h-screen">
			<Header />
			<div className="container">{children}</div>
		</div>
	)
}

export default Homepage
