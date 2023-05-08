import React, {useContext} from 'react'

import {StateContext} from '@/context/globalState'

export const AdvancedCV: React.FC = () => {
	const {isAdvanced, isAdvancedToggle} = useContext(StateContext)
	console.log(isAdvanced)
	return isAdvanced ? (
		<div>
			AdvancedCV
			<button onClick={() => isAdvancedToggle()}>Click here</button>
		</div>
	) : null
}
