import React from 'react'

import CVBody from './CVBody'
import CVHeader from './CVHeader'

const CV: React.FC = () => {
	return (
		<div className="container my-6 bg-gray-100 p-6">
			<CVHeader />
			<CVBody />
		</div>
	)
}

export default CV
