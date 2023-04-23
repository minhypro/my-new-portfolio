import {Analytics} from '@vercel/analytics/react'
import {FC} from 'react'

import Layout from '@/components/Layout'
import CV from '@/pages/NormalCV'

const App: FC = () => {
	return (
		<>
			<Layout>
				<CV />
			</Layout>
			<Analytics mode={'production'} />
		</>
	)
}

export default App
