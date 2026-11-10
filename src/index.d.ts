export interface MockPerson {
  name: string;
  dni: string;
  phone: string;
  address: MockAddress;
}

export interface MockAddress {
  department: string;
  province: string;
  district: string;
}

export function randomPerson(): MockPerson;
export function randomPhone(): string;
export function randomAddress(): MockAddress;
