import React from 'react'

import CVBody from './CVBody'
import CVHeader from './CVHeader'

const CV: React.FC = () => {
	return (
		<div className="container relative bg-gray-100 p-6 xl:my-6">
			<CVHeader />
			<CVBody />
			<div className="fixed right-10 top-1/2 bg-sky-500 p-4 text-white">
				<a href="main_cv.pdf" download="Minh Y Le - Web Developer.pdf">
					Download CV
				</a>
			</div>
		</div>
	)
}

export default CV
