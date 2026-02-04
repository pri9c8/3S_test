import { ReportTable } from '@/features'
import { useFetch } from '@/hooks'
import type { ApiResponse } from '@/types'

const API_3S = import.meta.env.VITE_API_URL

function App() {
	const { data, isLoading, errorMsg } = useFetch<ApiResponse>(API_3S)

	if (isLoading)
		return (
			<div className='flex items-center justify-center min-h-screen text-lg text-gray-600'>
				Loading...
			</div>
		)

	if (errorMsg)
		return (
			<div className='flex items-center justify-center min-h-screen text-lg text-red-600'>
				{errorMsg}
			</div>
		)

	if (!data?.data) {
		return (
			<div className='flex items-center justify-center min-h-screen text-lg text-gray-600'>
				No data
			</div>
		)
	}

	return (
		<div className='px-6 bg-white mx-auto'>
			<ReportTable reportData={data.data} />
		</div>
	)
}

export default App
