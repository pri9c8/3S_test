import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string | null | undefined) => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsloading] = useState(false)
	const [errorMsg, setErrorMsg] = useState<string | null>(null)

	useEffect(() => {
		if (typeof url !== 'string' || url.trim() === '') {
			setData(null)
			setErrorMsg(null)
			setIsloading(false)
			return
		}

		setIsloading(true)

		const fetchData = async () => {
			try {
				const res = await fetch(`${url}`)
				const result: T = await res.json()
				setData(result)
			} catch (error) {
				setErrorMsg((error as Error).message)
			} finally {
				setIsloading(false)
			}
		}

		fetchData()
	}, [])

	return { isLoading, data, errorMsg } as const
}
