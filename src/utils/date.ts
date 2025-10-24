import { differenceInYears } from 'date-fns';

/**
 * @param {string} dateString format must be yyyy-mm-dd
 */
export function getAge(dateString: string): number {
  return differenceInYears(new Date(), new Date(dateString));
}