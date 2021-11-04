export function ClassNames(...args: any[]): string {
	return args.filter(Boolean).join(' ')
}
