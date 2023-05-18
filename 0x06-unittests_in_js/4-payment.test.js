/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { spy, stub } from 'sinon';
import { expect } from 'chai';
import Utils from './utils';
import sendPaymentRequestToApi from './4-payment';

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrother = spy(console);
    const dummy = stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    dummy.restore();
    bigBrother.log.restore();
  });
});
