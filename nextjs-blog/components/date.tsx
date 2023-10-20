import { parseISO, format } from 'date-fns';

export default function DateUtil({ dateString }: {
	dateString?: string;
}) {
	let date = new Date();
	if (dateString) {
		date = parseISO(dateString);
	}
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}