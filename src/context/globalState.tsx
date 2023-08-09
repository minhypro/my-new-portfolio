import React, {createContext, useState} from 'react'

import {darkModeToggle} from '@/utils/utils'

export const StateContext = createContext<{
	isAdvanced: boolean
	isAdvancedToggle: () => void
}>({isAdvanced: true, isAdvancedToggle: () => false})

export const StateProvider: React.FC<{children: React.ReactNode}> = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [isAdvanced, setIsAdvanced] = useState(true)
	const isAdvancedToggle = () => {
		setIsAdvanced(prev => !prev)
		darkModeToggle()
	}
	return (
		<StateContext.Provider value={{isAdvanced, isAdvancedToggle}}>
			{children}
		</StateContext.Provider>
	)
}
