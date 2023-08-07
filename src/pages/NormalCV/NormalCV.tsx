import React, {useContext} from 'react'

import {FloatingSidebar} from '@/components/Layout/FloatingSidebar'
import {StateContext} from '@/context/globalState'

import {CVBody} from './CVBody'
import CVHeader from './CVHeader'

export const NormalCV: React.FC = () => {
	const {isAdvanced} = useContext(StateContext)
	return (
		<div className="container relative rounded-md bg-gray-100/50 p-6 duration-700 dark:bg-transparent xl:my-6">
			<CVHeader />
			<CVBody />
			{!isAdvanced ? <FloatingSidebar /> : null}
		</div>
	)
}
