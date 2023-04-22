import {FC, Fragment, ReactNode} from 'react'

export interface ButtonProps {
	/**
	 * Content inside the button
	 */
	children: ReactNode
	/**
	 * Action when clicking
	 */
	onClick?: () => void
}

export const Button: FC<ButtonProps> = ({children, onClick, ...props}) => {
	return (
		<Fragment>
			<button
				className="inline-block rounded border border-indigo-600 bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
				onClick={onClick}
				{...props}
			>
				{children}
			</button>
		</Fragment>
	)
}
