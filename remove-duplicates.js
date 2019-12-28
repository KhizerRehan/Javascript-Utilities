// Remove Duplicates: Use Set operator
(function() {
	// IIFE function:
	const data = [
		{ webservice: "a" },
		{ webservice: "b" },
		{ webservice: "c" },
		{ webservice: "b" },
		{ webservice: "d" }
	];

	// ES6 Way:

	const unique = new Set(data.map(item => item.webservice));
	console.log("Unique:", unique);
})();

// Remove Duplicates: Using Key/Value of Objects and Overriding key/value that appears later in object iteration:
(function() {
	var arrayWithDuplicates = [
		{ type: "LICENSE", licenseNum: "12345", state: "NV" },
		{ type: "LICENSE", licenseNum: "A7846", state: "CA" },
		{ type: "LICENSE", licenseNum: "12345", state: "OR" },
		{ type: "LICENSE", licenseNum: "10849", state: "CA" },
		{ type: "LICENSE", licenseNum: "B7037", state: "WA" },
		{ type: "LICENSE", licenseNum: "12345", state: "NM" }
	];

	function removeDuplicates(originalArray, prop) {
		var lookupObject = {};
		for (var i in originalArray) {
			lookupObject[originalArray[i][prop]] = originalArray[i];
		}
		return lookupObject;
	}

	var uniqueArray = removeDuplicates(arrayWithDuplicates, "licenseNum");
	console.table("Unique Array:", uniqueArray);
})();

//  Remove Duplicates: Using Map Operator:
(function() {
	const arr = [
		{ place: "here", name: "stuff" },
		{ place: "there", name: "morestuff" },
		{ place: "a", name: "morestuff" },
		{ place: "b", name: "morestuff" },
		{ place: "c", name: "morestuff" },
		{ place: "here", name: "lol" },
		{ place: "there", name: "test" }
	];

	function getUniqueListBy(arr, key) {
		var uniqueResult = new Map(
			arr.map(item => {
				console.log("Key, Object", [item[key], item]);
				return [item[key], item];
			})
		);

		console.log("Unique Map Result", uniqueResult.values());
		return uniqueResult.values();
	}

	const uniqueArr = getUniqueListBy(arr, "place");

	console.table("uniqueArr", uniqueArr);
})();
