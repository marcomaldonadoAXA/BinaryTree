var assert = chai.assert

describe('Binary tree test', function () {
    var tests = [
        { input: '6  (5(4(11(7()())(2()()))()) (8(13()())(4()(1()()))))', expected: 'yes' },
        { input: '20 (5(4(11(7()())(2()()))()) (8(13()())(4()(1()()))))', expected: 'no' },
        { input: `1  (3
            (2 (4 () () )
            (8 () () ) )
            (1 (6 () () )
            (4 () () ) ) )`, expected: 'yes' },
        { input: '5 ()', expected: 'no' }
    ]
    tests.forEach(function (testCase) {
        it(`should return '${testCase.expected}' with '${testCase.input}'`, function () {
            assert.equal(test(testCase.input), testCase.expected)
        })
    })
})
