const { expect } = require('chai');

const { stockService } = require('../../../../modules/stocks/services');

describe('#test read stocks', () => {
  test('#Tests if is returning right data', async () => {
    const symbol = 'A.US';

    const stock = await stockService.getStock(symbol);

    expect(stock).to.be.a('object');
  });
});
