import React from 'react'

import CVBody from './CVBody'
import CVHeader from './CVHeader'

const CV: React.FC = () => {
	return (
		<div className="container bg-gray-100 p-6 xl:my-6">
			<CVHeader />
			<CVBody />
		</div>
	)
}

export default CV
