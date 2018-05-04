exports.assert = function (res)
{
	if (res==false)
		throw 'Assertion failed';
}

exports.print = function(msg)
{
	console.log(msg);
}