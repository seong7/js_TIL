const orderTotal = require("./order-total-async");

// 비동기 코드 (api 통신) 를 포함하는 Unit 을 테스트하기 위해 
// Mock Function (fakeFetch()) 를 만든다. (test 때 매다 매번 API 통신을 할 순 없으니.. )

// .only() : 하나만 테스트 할때
it("calls recipe.app correctly", (done) => { // done 사용 : 비동기 함수의 callback function 까지 정확히 테스트하는 법

	// let isFakeFetchCalled = false; // fakeFetch 함수가 제대로 작동하는 것을 확인했으므로 필요 없어짐

	// Mock function 을 수동으로 만드는 방법 : 
	const fakeFetch = (url) => {
		// Mock fn test 부분
		expect(url).toBe("https://forkify-api.herokuapp.com/api/search?q=pizza"); // url 값 test
		
		// isFakeFetchCalled = true; // isFakeFetchCalled 를 true 로 바꿔주는 function 을
								  // 매개변수로 넣어주고, orderTotal 에서 실행한다.
		return Promise.resolve({ 
			json: () => Promise.resolve({		// 본 함수의 json() 을 mock 으로 만들어줌
				count : 28
			})
		})
	} 
	return orderTotal(fakeFetch, {
		query : "pizza",
		items: [{
			"name" : "Dragon waffles", price: 20, quantity: 2
		}]
	}).then(result => {
		// 본 함수에 대한 TEST 부분
		expect(result).toBe(68);
		// expect(isFakeFetchCalled).toBe(true);
		done(); // 비동기 함수의 callback function 까지 정확히 테스트하는 법
	})
})

// todo() 사용 : pending test 만드는 방법 (나중에 사용하겠단 의미 _ Jest 가 skip 함)
it.todo("if search query specified") 

// 아래로 수정

it('Quantity', () =>
  orderTotal(null, {
    items: [
      { 'name': 'Dragon candy', price: 2, quantity: 3 }
    ]
  }).then(result => expect(result).toBe(6)))

it('No quantity specified', () =>
  orderTotal(null, {
    items: [
      { 'name': 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3)))

it('Happy path (Example 1)', () =>
  orderTotal(null,{
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(808)))

it('Happy path (Example 2)', () =>
  orderTotal(null, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy',  price: 40, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(60)))