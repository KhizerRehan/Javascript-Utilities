// using split and join
(function() {
	function replaceAll(string, search, replace) {
		return string.split(search).join(replace);
	}

	const search = "duck";
	const replaceWith = "goose";
	const strToReplace = "duck duck go";
	replaceAll(strToReplace, search, replaceWith);
})();

(function() {
	const search = "duck";
	const replaceWith = "goose";
	const strToReplace = "duck duck go";
	const result = strToReplace.replaceAll(search, replaceWith);
	console.log(result); // => 'goose goose go'
})();

/*
 The difference between replaceAll() and replace()
 The string methods replaceAll(search, replaceWith) and replace(search, replaceWith) behave the same way, expect 2 things:

- If search argument is a string, replaceAll() replaces all occurrences of search with replaceWith, 
  while replace() only the first occurence.
- If search argument is a non-global regular expression, then replaceAll() throws a TypeError exception.
*/
