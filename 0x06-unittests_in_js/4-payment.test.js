const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

const { expect } = chai;

describe('PaymentApi', () => {
  it('uses calculateNumber', () => {
    const callback = sinon.stub(Utils, 'calculateNumber').returns(10);
    const csl = sinon.spy(console, 'log');
    sendPaymentRequestToApi(200, 400);
    expect(callback.calledWith('SUM', 200, 400)).to.be.true;
    expect(csl.calledOnceWithExactly('The total is: 10'));
    callback.restore();
    csl.restore();
  });
});
