const functions = require('./functions');
     
     /* description */
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
                        /* matcher 중 toBe 사용*/
});

test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

/* 
  Truthy 와 Falsy Values 체크하는 matchers
  - toBeNull -> only null
  - toBeUndefined -> only undefined
  - toBedefined -> toBeUndefined 의 반대
  - toBeTruthy -> if 문이 true 로 받는 것 모두 
  - toBeFalsy -> if 문이 false 로 받는 것 모두
*/

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});
