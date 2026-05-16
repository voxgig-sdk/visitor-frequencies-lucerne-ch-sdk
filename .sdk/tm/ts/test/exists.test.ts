
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { VisitorFrequenciesLucerneChSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await VisitorFrequenciesLucerneChSDK.test()
    equal(null !== testsdk, true)
  })

})
