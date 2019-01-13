const Dimensions = {
  get: jest.fn().mockReturnValue({ width: 110, height:100 }),
  addEventListener: jest.fn((event, cb) => cb())
}

module.exports = Dimensions