// Helpful-Link: https://dev.to/razgandeanu/9-extremely-powerful-javascript-hacks-4g3p

// Replace All
(function() {
	// You can replace all the occurrences by adding /g at the end of the regex.

	var fullName =
		"My name is khizer rehan and my name is not completed still i am called by this name";
	console.log(fullName.replace(/name/, "Shiekh"));
	// "tomato potato"
	console.log(fullName.replace(/name/g, "Shiekh"));
	// "tomato tomato"
})();

// Use length to resize/empty an array
(function() {
	var entries = [1, 2, 3, 4, 5, 6, 7];
	console.log(entries.length);
	// 7
	entries.length = 4;
	console.log(entries.length);
	// 4
	console.log(entries);
	// [1, 2, 3, 4]

	// Empty Array:var entries = [1, 2, 3, 4, 5, 6, 7];
	console.log(entries.length);
	// 7
	entries.length = 0;
	console.log(entries.length);
	// 0
	console.log(entries);
	// []
})();
