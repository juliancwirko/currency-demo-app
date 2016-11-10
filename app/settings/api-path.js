export const apiPath = 'http://api.fixer.io/';
export const calculatePath = (currIn, currOut) =>
	`${apiPath}latest?base=${currIn}&symbols=${currOut}`;
