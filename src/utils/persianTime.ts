export default function getRelativeTimePersian(date: Date | string): string {
  let creationDate: Date;

  if (typeof date === 'string') {
    creationDate = new Date(date);

    if (isNaN(creationDate.getTime())) {
      throw new Error('Invalid date string provided');
    }
  } else if (date instanceof Date) {
    creationDate = date;
  } else {
    throw new Error('Input must be a Date object or a valid date string');
  }

  const now = new Date();
  const diff = now.getTime() - creationDate.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 365);

  if (seconds < 60) return `${seconds} ثانیه پیش`;
  if (minutes < 60) return `${minutes} دقیقه پیش`;
  if (hours < 24) return `${hours} ساعت پیش`;
  if (days < 30) return `${days} روز پیش`;
  if (months < 12) return `${months} ماه پیش`;
  return `${years} سال پیش`;
}
