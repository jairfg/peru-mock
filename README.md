# peru-mock

Genera datos peruanos ficticios para pruebas. Es pequeño,
no tiene dependencias y funciona con módulos ES.

## Instalación

```bash
npm install peru-mock
```

## Uso

```js
import { randomPerson, randomPhone, randomAddress } from 'peru-mock';

const person = randomPerson();
// {
//   name: 'Lucía Torres',
//   dni: '12345678',
//   phone: '+51 987 654 321',
//   address: {
//     department: 'Lima',
//     province: 'Lima',
//     district: 'Miraflores'
//   }
// }

person.phone;
person.address.district;

randomPhone();
// '+51 987 654 321'

randomAddress();
// { department: 'Lima', province: 'Lima', district: 'Miraflores' }
```

## API

### `randomPerson()`

Devuelve una persona ficticia con nombre, DNI, teléfono y dirección completa.
La dirección es un objeto anidado accesible mediante propiedades como
`person.address.department`, `person.address.province` y
`person.address.district`. Los nombres y apellidos se eligen entre los 100 más
frecuentes de Perú según los rankings de incidencia nacional de
[Forebears](https://forebears.io/peru/forenames).

### `randomPhone()`

Devuelve un celular peruano ficticio con el formato `+51 9XX XXX XXX`.

### `randomAddress()`

Devuelve un objeto con una combinación coherente de departamento, provincia y
distrito del Perú. El catálogo incluye las 25 regiones/departamentos, 196
provincias y 1,893 distritos, incluidos los 43 distritos de Lima Metropolitana.

## Requisitos

Node.js 18 o una versión posterior.

## Licencia

MIT
