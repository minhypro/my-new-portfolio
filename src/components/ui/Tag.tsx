import React from 'react'

type Props = {
	children: React.ReactNode
}

export const Tag: React.FC<Props> = ({children}) => {
	return (
		<span className="w-fit rounded-2xl bg-slate-700 px-2 py-1">
			{children}
		</span>
	)
}
