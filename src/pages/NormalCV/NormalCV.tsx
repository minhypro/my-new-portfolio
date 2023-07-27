import React from 'react'

import {FloatingSidebar} from '@/pages/NormalCV/FloatingSidebar'

import {CVBody} from './CVBody'
import CVHeader from './CVHeader'

export const NormalCV: React.FC = () => {
	return (
		<div className="container relative rounded-md bg-gray-100/50 p-6 duration-700 dark:bg-transparent xl:my-6">
			<CVHeader />
			<CVBody />
			<FloatingSidebar />
		</div>
	)
}
