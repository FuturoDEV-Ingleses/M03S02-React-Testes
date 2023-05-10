import '@testing-library/jest-dom';
import { MOCKED_JOKE } from './mocks';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKED_JOKE),
  })
);
