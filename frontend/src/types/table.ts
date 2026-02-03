export interface MonthData {
	income: number
	activePartners: number
	plan: {
		income: number
		activePartners: number
	}
	fact: {
		income: number
		activePartners: number
	}
}

export interface TotalItem {
	fact: {
		income: number
		activePartners: number
	}
	plan: {
		income: number
		activePartners: number
	}
}

export interface TableRow {
	id: number
	adminId: number
	adminName: string
	months: readonly (MonthData | null)[]
	year: number
}

export interface TableData {
	total: TotalItem[]
	table: TableRow[]
}

export interface ApiResponse {
	success: boolean
	data: TableData
}
