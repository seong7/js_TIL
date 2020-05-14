const orderTotal = require("./order-total-async-jest");

it.only("calls recipe.app correctly", (done) => {
	// done 사용 : 비동기 함수의 callback function 까지 정확히 테스트하는 법

	// let isFakeFetchCalled = false; // fakeFetch 함수가 제대로 작동하는 것을 확인했으므로 필요 없어짐

	// Jest fn 으로 Mock fn 만드는 방법 :  mock fn 으로 테스트하는 표준방법임
	const fakeFetch_jest = jest.fn().mockReturnValue(
		Promise.resolve({
			json: () =>
				Promise.resolve({
					// 본 함수의 json() 을 mock 으로 만들어줌
					count: 28,
				}),
		})
	);

	return orderTotal(fakeFetch_jest, {
		query: "pizza",
		items: [
			{
				name: "Dragon waffles",
				price: 20,
				quantity: 2,
			},
		],
	}).then((result) => {
		// 본 함수에 대한 TEST 부분
		expect(result).toBe(68);
		// expect(isFakeFetchCalled).toBe(true);

		// jest.fn() 사용할 때 Mock fn 에 대한 test 기입
			// 매개변수가 잘 들어갔는지 확인
		expect(fakeFetch_jest).toBeCalledWith("https://forkify-api.herokuapp.com/api/search?q=pizza");

		done(); // 비동기 함수의 callback function 까지 정확히 테스트하는 법
	});
});

// todo() 사용 : pending test 만드는 방법 (나중에 사용하겠단 의미 _ Jest 가 skip 함)
it.todo("if search query specified");

// 아래로 수정

it("Quantity", () =>
	orderTotal(null, {
		items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
	}).then((result) => expect(result).toBe(6)));

it("No quantity specified", () =>
	orderTotal(null, {
		items: [{ name: "Dragon candy", price: 3 }],
	}).then((result) => expect(result).toBe(3)));

it("Happy path (Example 1)", () =>
	orderTotal(null, {
		items: [
			{ name: "Dragon food", price: 8, quantity: 1 },
			{ name: "Dragon cage (small)", price: 800, quantity: 1 },
		],
	}).then((result) => expect(result).toBe(808)));

it("Happy path (Example 2)", () =>
	orderTotal(null, {
		items: [
			{ name: "Dragon collar", price: 20, quantity: 1 },
			{ name: "Dragon chew toy", price: 40, quantity: 1 },
		],
	}).then((result) => expect(result).toBe(60)));
