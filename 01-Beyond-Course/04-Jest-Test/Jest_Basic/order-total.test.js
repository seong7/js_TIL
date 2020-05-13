const orderTotal = require("./order-total");

// test 할 function 을 require 로 불러옴

// jest 문법의 test code 가 있어야 실행됨

// if (
// 	orderTotal({
// 		items: [
// 			{ name: "Dragon candy", price: 2, quantity: 3 }, // test case
// 		],
// 	}) !== 6 /* 예상 return 값 */
// ) {
// 	throw new Error("Check fail: Quantity"); // test description
// }

// 아래로 수정

it("Quantity", () =>
	expect(
		orderTotal({
			items: [
				{ name: "Dragon candy", price: 2, quantity: 3 }, // test case
			],
		})
	).toBe(6));


it("No quantity specified", () =>
	expect(
		orderTotal({
			items: [{ name: "Dragon candy", price: 3 }],
		})
	).toBe(3));


it("Happy path (Example 1)", () =>
	expect(
		orderTotal({
			items: [
				{ name: "Dragon food", price: 8, quantity: 1 },
				{ name: "Dragon cage (small)", price: 800, quantity: 1 },
			],
		})
	).toBe(808));


it("Happy path (Example2)", () => 
        expect(orderTotal({
            items: [
                { name: "Dragon collar", price: 20, quantity: 1 },
                { name: "Dragon chew toy", price: 40, quantity: 1 },
            ],
        })).toBe(60)
)