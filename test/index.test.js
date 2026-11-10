import test from 'node:test';
import assert from 'node:assert/strict';

import { randomAddress, randomPerson, randomPhone } from 'peru-mock';
import { firstNames, lastNames } from '../src/data/names.js';
import { addresses, addressHierarchy } from '../src/data/ubigeo.js';

test('the name catalogs contain 100 unique Peruvian names and surnames', () => {
  assert.equal(firstNames.length, 100);
  assert.equal(lastNames.length, 100);
  assert.equal(new Set(firstNames).size, 100);
  assert.equal(new Set(lastNames).size, 100);
});

test('randomPerson returns identity, phone and nested address data', () => {
  const person = randomPerson();

  assert.match(person.name, /^\S+(?:\s\S+)+$/u);
  assert.match(person.dni, /^\d{8}$/u);
  assert.match(person.phone, /^\+51 9\d{2} \d{3} \d{3}$/u);
  assert.deepEqual(Object.keys(person.address), [
    'department',
    'province',
    'district'
  ]);
  assert.ok(person.address.department.length > 0);
  assert.ok(person.address.province.length > 0);
  assert.ok(person.address.district.length > 0);
});

test('randomPhone returns a Peruvian mobile number', () => {
  assert.match(randomPhone(), /^\+51 9\d{2} \d{3} \d{3}$/u);
});

test('randomAddress returns all three administrative levels', () => {
  const address = randomAddress();

  assert.deepEqual(Object.keys(address), ['department', 'province', 'district']);
  assert.ok(address.department.length > 0);
  assert.ok(address.province.length > 0);
  assert.ok(address.district.length > 0);
});

test('the address catalog reaches district level across Peru', () => {
  const provinces = addressHierarchy.flatMap(([, items]) => items);
  const uniqueAddresses = new Set(addresses.map((address) => address.join('/')));

  assert.equal(addressHierarchy.length, 25);
  assert.equal(provinces.length, 196);
  assert.equal(addresses.length, 1893);
  assert.equal(uniqueAddresses.size, addresses.length);
});

test('the address catalog contains all 43 districts of Metropolitan Lima', () => {
  const metropolitanLima = addresses.filter(
    ([department, province]) => department === 'Lima' && province === 'Lima'
  );

  assert.equal(metropolitanLima.length, 43);
  assert.ok(metropolitanLima.some(([, , district]) => district === 'Miraflores'));
  assert.ok(
    metropolitanLima.some(([, , district]) => district === 'San Juan de Lurigancho')
  );
});
