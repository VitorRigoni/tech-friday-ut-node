/* eslint-disable no-undef */
const { stub } = require('sinon');
const { expect } = require('chai');
const customerRepository = require('../domains/customer/repository');
const { getAllCustomers } = require('../domains/customer/customer');

describe('Customer domain', () => {
  describe('#getAllCustomers', () => {

    it('should return a list of all customers with first name and last name', async () => {
      // Arrange
      const input = [
        {
          firstName: 'Vitor',
          lastName: 'Rigoni',
          isMarried: true,
          created: new Date(),
          modified: new Date()
        }
      ];

      const expectation = [
        {
          firstName: 'Vitor',
          lastName: 'Rigoni'
        }
      ];

      stub(customerRepository, 'getAllCustomers')
        .returns(Promise.resolve(input));

      // Act
      const result = await getAllCustomers();

      // Assert
      expect(result).to
        .have.lengthOf(1)
        .and.deep.equal(expectation);
    });

  });
});