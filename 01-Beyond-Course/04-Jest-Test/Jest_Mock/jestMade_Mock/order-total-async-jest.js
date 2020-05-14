// fetch 함수를 직접 require 해서 쓰지 않고 매개변수로 받아서 씀
// => dependency injection 이라고 불리는 기술 (unit tested app 에서 많이 쓰임)
function orderTotal(fetch, order) {
    // Refactoring
    const sumOrderItems = (order) => order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);

    if(order.query) {
        // fetch 함수 (Mock 함수) 콜 :
        // url 을 테스트해주고 isFakeFetchCalled 를 true 로 바꿔줌
        return fetch("https://forkify-api.herokuapp.com/api/search?q=" + order.query)
            .then((response) => response.json())
            .then((result) => result.count)
            .then(
                (count) =>  {// api 로 부터 받은 값 count 를 사용해 order 와 조합

                    // const result = order.items.reduce(
                    //     (prev, cur) => cur.price * (cur.quantity || 1) + prev,
                    //     0
                    // ) + count
                    
                    const result = sumOrderItems(order) + count; // Refactoring
                    console.log(result);
                    return result;
                }
            );
    }
	return Promise.resolve(
        // order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
        sumOrderItems(order) // Refactoring
	);
}

module.exports = orderTotal;
