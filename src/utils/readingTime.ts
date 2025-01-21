import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
	return function (tree: any, { data }: any) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);

		// Локализация текста времени чтения
		const minutes = Math.ceil(readingTime.minutes);
		let localizedText;

		if (minutes === 1) {
			localizedText = 'читать 1 минуту';
		} else if (minutes >= 2 && minutes <= 4) {
			localizedText = `читать ${minutes} минуты`;
		} else {
			localizedText = читать `${minutes} минут`;
		}

		data.astro.frontmatter.minutesRead = localizedText;
	};
}