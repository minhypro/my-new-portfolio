import React, {useState} from 'react'

import {FloatingSidebar} from '@/components/Layout/FloatingSidebar'

import {CVBody} from './CVBody'
import CVHeader from './CVHeader'

const CV: React.FC = () => {
	const [showAwesome, setShowAwesome] = useState(false)
	return (
		<div className="container relative bg-gray-100 p-6 xl:my-6">
			<CVHeader isDisappear={showAwesome} />
			<CVBody isDisappear={showAwesome} />
			<FloatingSidebar onClick={() => setShowAwesome(prev => !prev)} />
		</div>
	)
}

export default CV
