import { addresses } from './data/ubigeo.js';
import { firstNames, lastNames } from './data/names.js';

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomDigits(length) {
  let result = '';

  for (let index = 0; index < length; index += 1) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}

/**
 * Returns a random Peruvian-style person with contact and address data.
 *
 * @returns {{
 *   name: string,
 *   dni: string,
 *   phone: string,
 *   address: { department: string, province: string, district: string }
 * }}
 */
export function randomPerson() {
  const name = `${randomItem(firstNames)} ${randomItem(lastNames)}`;

  return {
    name,
    dni: randomDigits(8),
    phone: randomPhone(),
    address: randomAddress()
  };
}

/**
 * Returns a random Peruvian mobile phone number in international format.
 *
 * @returns {string}
 */
export function randomPhone() {
  const digits = `9${randomDigits(8)}`;

  return `+51 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

/**
 * Returns a coherent Peruvian department, province and district combination.
 *
 * @returns {{ department: string, province: string, district: string }}
 */
export function randomAddress() {
  const [department, province, district] = randomItem(addresses);

  return { department, province, district };
}
