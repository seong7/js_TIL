// test 할 function (unit)

function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);
}

// 아래는 위 function 에 대한 UNIT TEST 
  
if (orderTotal({
items: [
    { 'name': 'Dragon candy', price: 2, quantity: 3 }    // test case
]
}) !== 6 /* 예상 return 값 */) {
throw new Error('Check fail: Quantity') // test description
}

if (orderTotal({
items: [
    { 'name': 'Dragon candy', price: 3 }
]
}) !== 3) {
throw new Error('Check fail: No quantity specified')
}

if (orderTotal({
items: [
    { name: 'Dragon food', price: 8, quantity: 1 },
    { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
]
}) !== 808) {
throw new Error('Check fail: Happy path (Example 1)')
}

if (orderTotal({
items: [
    { name: 'Dragon collar', price: 20, quantity: 1 },
    { name: 'Dragon chew toy',  price: 40, quantity: 1 }
]
}) !== 60) {
throw new Error('Check fail: Happy path (Example 2)')
}