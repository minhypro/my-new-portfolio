import {FC, ReactNode} from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
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
		<button
			className="inline-block rounded border border-primary bg-primary px-8 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}
