
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VisitorFrequenciesLucerneChSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = VisitorFrequenciesLucerneChSDK.test()
    equal(testsdk instanceof VisitorFrequenciesLucerneChSDK, true,
      'VisitorFrequenciesLucerneChSDK.test() must return a client synchronously')
  })

})
