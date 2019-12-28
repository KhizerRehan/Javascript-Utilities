// INFO:
// Each invocation of iterator, the function, is called with three arguments: (element, index, list).
// If list is a JavaScript object, iterator's arguments will be (value, key, list).
// -------------------------------------------
// forEach: Iteration in Arrays:
(function() {
	// IIFE function:
	["observatory", "ballroom", "library"].forEach(function(
		element,
		index,
		list
	) {
		console.log("Element", element);
		console.log("Index", index);
		console.log("List", list);
	});
})();

// forEach: Iteration in Objects:
(function() {
	// IIFE function:
	const data = [
		{ webservice: "a" },
		{ webservice: "b" },
		{ webservice: "c" },
		{ webservice: "d" }
	];

	data.forEach(function(value, index, list) {
		console.log("Value", value);
		console.log("Index", index);
		console.log("List", list);
	});
})();
