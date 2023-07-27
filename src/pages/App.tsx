import {Analytics} from '@vercel/analytics/react'
import {FC} from 'react'

import Layout from '@/components/Layout/Layout'
import {StateProvider} from '@/context/globalState'
import {NormalCV} from '@/pages/NormalCV/NormalCV'

// import {AdvancedCV} from './AdvancedCV/AdvancedCV'

const App: FC = () => {
	return (
		<>
			<StateProvider>
				<Layout>
					<NormalCV />
					{/* <AdvancedCV /> */}
				</Layout>
			</StateProvider>
			<Analytics mode={'production'} />
		</>
	)
}

export default App
