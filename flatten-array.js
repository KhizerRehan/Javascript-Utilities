(function() {
	function flatten(ary) {
		var ret = [];
		for (var i = 0; i < ary.length; i++) {
			if (Array.isArray(ary[i])) {
				ret = ret.concat(flatten(ary[i]));
			} else {
				ret.push(ary[i]);
			}
		}
		return ret;
	}
	const animals = [
		["🐕", "🐶"],
		["😺", "🐈"]
	];
	const flatAnimals = animals.flat();
	const flatArray = flatten(animals);
	console.log(flatAnimals);
	console.log(flatArray);
})();

(function() {
	function flattenReduce(array) {
		return array.reduce(function(a, b) {
			if (Array.isArray(b)) {
				return a.concat(flattenReduce(b));
			}
			return a.concat(b);
		}, []);
	}
	const animals = [
		["🐕", "🐶"],
		["😺", "🐈", ["🐕", "🐶"]]
	];
	const flatArray = flattenReduce(animals);
	console.log(flatArray);
})();

// Link_To_Read:https://alligator.io/js/flat-flatmap/
