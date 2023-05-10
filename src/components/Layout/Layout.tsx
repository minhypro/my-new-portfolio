import {FC, ReactNode} from 'react'

import Header from './Header'

type Layout = {
	children: ReactNode
}

const Homepage: FC<Layout> = ({children}) => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 transition-all duration-700 dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-indigo-300 dark:via-slate-900 dark:to-emerald-700">
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Homepage

// dark:bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] dark:from-orange-900 dark:via-fuchsia-400 dark:to-teal-600
// dark:bg-gradient-to-t dark:from-yellow-100 dark:via-black dark:to-gray-700
// dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-600
// dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black
// dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] dark:from-cyan-800 dark:via-stone-700 dark:to-slate-900
