export const locationMock = {
  hash: '/',
  // key: PropTypes.string,
  pathname: '/', // .isRequired
  search: '/', // .isRequired,
  // state: PropTypes.oneOfType([
  //     PropTypes.array,
  //     PropTypes.bool,
  //     PropTypes.number,
  //     PropTypes.object,
  //     PropTypes.string,
  // ]),
};

export const historyMock = {
  action: 'PUSH', // oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: jest.fn(), // .isRequired
  // canGo: jest.fn(),
  createHref: jest.fn(), // .isRequired
  // entries: jest.fn() arrayOf(exports.location),
  go: jest.fn(), // .isRequired
  goBack: jest.fn(), // .isRequired
  goForward: jest.fn(), // .isRequired
  // index: jest.fn() number,
  // length: jest.fn() number,
  listen: jest.fn(), // .isRequired
  location: locationMock, // .isRequired,
  push: jest.fn(), // .isRequired
  replace: jest.fn(), // .isRequired
};
