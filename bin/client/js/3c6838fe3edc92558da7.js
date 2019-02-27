(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{529:function(e,s,a){"use strict";e.exports={name:"erf",category:"Special",syntax:["erf(x)"],description:"Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",examples:["erf(0.2)","erf(-0.5)","erf(4)"],seealso:[]}},530:function(e,s,a){"use strict";e.exports={name:"mad",category:"Statistics",syntax:["mad(a, b, c, ...)","mad(A)"],description:"Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",examples:["mad(10, 20, 30)","mad([1, 2, 3])"],seealso:["mean","median","std","abs"]}},531:function(e,s,a){"use strict";e.exports={name:"max",category:"Statistics",syntax:["max(a, b, c, ...)","max(A)","max(A, dim)"],description:"Compute the maximum value of a list of values.",examples:["max(2, 3, 4, 1)","max([2, 3, 4, 1])","max([2, 5; 4, 3])","max([2, 5; 4, 3], 1)","max([2, 5; 4, 3], 2)","max(2.7, 7.1, -4.5, 2.0, 4.1)","min(2.7, 7.1, -4.5, 2.0, 4.1)"],seealso:["mean","median","min","prod","std","sum","var"]}},532:function(e,s,a){"use strict";e.exports={name:"mean",category:"Statistics",syntax:["mean(a, b, c, ...)","mean(A)","mean(A, dim)"],description:"Compute the arithmetic mean of a list of values.",examples:["mean(2, 3, 4, 1)","mean([2, 3, 4, 1])","mean([2, 5; 4, 3])","mean([2, 5; 4, 3], 1)","mean([2, 5; 4, 3], 2)","mean([1.0, 2.7, 3.2, 4.0])"],seealso:["max","median","min","prod","std","sum","var"]}},533:function(e,s,a){"use strict";e.exports={name:"median",category:"Statistics",syntax:["median(a, b, c, ...)","median(A)"],description:"Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",examples:["median(5, 2, 7)","median([3, -1, 5, 7])"],seealso:["max","mean","min","prod","std","sum","var","quantileSeq"]}},534:function(e,s,a){"use strict";e.exports={name:"min",category:"Statistics",syntax:["min(a, b, c, ...)","min(A)","min(A, dim)"],description:"Compute the minimum value of a list of values.",examples:["min(2, 3, 4, 1)","min([2, 3, 4, 1])","min([2, 5; 4, 3])","min([2, 5; 4, 3], 1)","min([2, 5; 4, 3], 2)","min(2.7, 7.1, -4.5, 2.0, 4.1)","max(2.7, 7.1, -4.5, 2.0, 4.1)"],seealso:["max","mean","median","prod","std","sum","var"]}},535:function(e,s,a){"use strict";e.exports={name:"mode",category:"Statistics",syntax:["mode(a, b, c, ...)","mode(A)","mode(A, a, b, B, c, ...)"],description:"Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",examples:["mode(2, 1, 4, 3, 1)","mode([1, 2.7, 3.2, 4, 2.7])","mode(1, 4, 6, 1, 6)"],seealso:["max","mean","min","median","prod","std","sum","var"]}},536:function(e,s,a){"use strict";e.exports={name:"prod",category:"Statistics",syntax:["prod(a, b, c, ...)","prod(A)"],description:"Compute the product of all values.",examples:["prod(2, 3, 4)","prod([2, 3, 4])","prod([2, 5; 4, 3])"],seealso:["max","mean","min","median","min","std","sum","var"]}},537:function(e,s,a){"use strict";e.exports={name:"quantileSeq",category:"Statistics",syntax:["quantileSeq(A, prob[, sorted])","quantileSeq(A, [prob1, prob2, ...][, sorted])","quantileSeq(A, N[, sorted])"],description:"Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",examples:["quantileSeq([3, -1, 5, 7], 0.5)","quantileSeq([3, -1, 5, 7], [1/3, 2/3])","quantileSeq([3, -1, 5, 7], 2)","quantileSeq([-1, 3, 5, 7], 0.5, true)"],seealso:["mean","median","min","max","prod","std","sum","var"]}},538:function(e,s,a){"use strict";e.exports={name:"std",category:"Statistics",syntax:["std(a, b, c, ...)","std(A)","std(A, normalization)"],description:'Compute the standard deviation of all values, defined as std(A) = sqrt(var(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',examples:["std(2, 4, 6)","std([2, 4, 6, 8])",'std([2, 4, 6, 8], "uncorrected")','std([2, 4, 6, 8], "biased")',"std([1, 2, 3; 4, 5, 6])"],seealso:["max","mean","min","median","min","prod","sum","var"]}},539:function(e,s,a){"use strict";e.exports={name:"sum",category:"Statistics",syntax:["sum(a, b, c, ...)","sum(A)"],description:"Compute the sum of all values.",examples:["sum(2, 3, 4, 1)","sum([2, 3, 4, 1])","sum([2, 5; 4, 3])"],seealso:["max","mean","median","min","prod","std","sum","var"]}},540:function(e,s,a){"use strict";e.exports={name:"var",category:"Statistics",syntax:["var(a, b, c, ...)","var(A)","var(A, normalization)"],description:'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',examples:["var(2, 4, 6)","var([2, 4, 6, 8])",'var([2, 4, 6, 8], "uncorrected")','var([2, 4, 6, 8], "biased")',"var([1, 2, 3; 4, 5, 6])"],seealso:["max","mean","min","median","min","prod","std","sum"]}},541:function(e,s,a){"use strict";e.exports={name:"acos",category:"Trigonometry",syntax:["acos(x)"],description:"Compute the inverse cosine of a value in radians.",examples:["acos(0.5)","acos(cos(2.3))"],seealso:["cos","atan","asin"]}},542:function(e,s,a){"use strict";e.exports={name:"acosh",category:"Trigonometry",syntax:["acosh(x)"],description:"Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",examples:["acosh(1.5)"],seealso:["cosh","asinh","atanh"]}},543:function(e,s,a){"use strict";e.exports={name:"acot",category:"Trigonometry",syntax:["acot(x)"],description:"Calculate the inverse cotangent of a value.",examples:["acot(0.5)","acot(cot(0.5))","acot(2)"],seealso:["cot","atan"]}},544:function(e,s,a){"use strict";e.exports={name:"acoth",category:"Trigonometry",syntax:["acoth(x)"],description:"Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",examples:["acoth(2)","acoth(0.5)"],seealso:["acsch","asech"]}},545:function(e,s,a){"use strict";e.exports={name:"acsc",category:"Trigonometry",syntax:["acsc(x)"],description:"Calculate the inverse cotangent of a value.",examples:["acsc(2)","acsc(csc(0.5))","acsc(0.5)"],seealso:["csc","asin","asec"]}},546:function(e,s,a){"use strict";e.exports={name:"acsch",category:"Trigonometry",syntax:["acsch(x)"],description:"Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",examples:["acsch(0.5)"],seealso:["asech","acoth"]}},547:function(e,s,a){"use strict";e.exports={name:"asec",category:"Trigonometry",syntax:["asec(x)"],description:"Calculate the inverse secant of a value.",examples:["asec(0.5)","asec(sec(0.5))","asec(2)"],seealso:["acos","acot","acsc"]}},548:function(e,s,a){"use strict";e.exports={name:"asech",category:"Trigonometry",syntax:["asech(x)"],description:"Calculate the inverse secant of a value.",examples:["asech(0.5)"],seealso:["acsch","acoth"]}},549:function(e,s,a){"use strict";e.exports={name:"asin",category:"Trigonometry",syntax:["asin(x)"],description:"Compute the inverse sine of a value in radians.",examples:["asin(0.5)","asin(sin(0.5))"],seealso:["sin","acos","atan"]}},550:function(e,s,a){"use strict";e.exports={name:"asinh",category:"Trigonometry",syntax:["asinh(x)"],description:"Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",examples:["asinh(0.5)"],seealso:["acosh","atanh"]}},551:function(e,s,a){"use strict";e.exports={name:"atan",category:"Trigonometry",syntax:["atan(x)"],description:"Compute the inverse tangent of a value in radians.",examples:["atan(0.5)","atan(tan(0.5))"],seealso:["tan","acos","asin"]}},552:function(e,s,a){"use strict";e.exports={name:"atanh",category:"Trigonometry",syntax:["atanh(x)"],description:"Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",examples:["atanh(0.5)"],seealso:["acosh","asinh"]}},553:function(e,s,a){"use strict";e.exports={name:"atan2",category:"Trigonometry",syntax:["atan2(y, x)"],description:"Computes the principal value of the arc tangent of y/x in radians.",examples:["atan2(2, 2) / pi","angle = 60 deg in rad","x = cos(angle)","y = sin(angle)","atan2(y, x)"],seealso:["sin","cos","tan"]}},554:function(e,s,a){"use strict";e.exports={name:"cos",category:"Trigonometry",syntax:["cos(x)"],description:"Compute the cosine of x in radians.",examples:["cos(2)","cos(pi / 4) ^ 2","cos(180 deg)","cos(60 deg)","sin(0.2)^2 + cos(0.2)^2"],seealso:["acos","sin","tan"]}},555:function(e,s,a){"use strict";e.exports={name:"cosh",category:"Trigonometry",syntax:["cosh(x)"],description:"Compute the hyperbolic cosine of x in radians.",examples:["cosh(0.5)"],seealso:["sinh","tanh","coth"]}},556:function(e,s,a){"use strict";e.exports={name:"cot",category:"Trigonometry",syntax:["cot(x)"],description:"Compute the cotangent of x in radians. Defined as 1/tan(x)",examples:["cot(2)","1 / tan(2)"],seealso:["sec","csc","tan"]}},557:function(e,s,a){"use strict";e.exports={name:"coth",category:"Trigonometry",syntax:["coth(x)"],description:"Compute the hyperbolic cotangent of x in radians.",examples:["coth(2)","1 / tanh(2)"],seealso:["sech","csch","tanh"]}},558:function(e,s,a){"use strict";e.exports={name:"csc",category:"Trigonometry",syntax:["csc(x)"],description:"Compute the cosecant of x in radians. Defined as 1/sin(x)",examples:["csc(2)","1 / sin(2)"],seealso:["sec","cot","sin"]}},559:function(e,s,a){"use strict";e.exports={name:"csch",category:"Trigonometry",syntax:["csch(x)"],description:"Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",examples:["csch(2)","1 / sinh(2)"],seealso:["sech","coth","sinh"]}},560:function(e,s,a){"use strict";e.exports={name:"sec",category:"Trigonometry",syntax:["sec(x)"],description:"Compute the secant of x in radians. Defined as 1/cos(x)",examples:["sec(2)","1 / cos(2)"],seealso:["cot","csc","cos"]}},561:function(e,s,a){"use strict";e.exports={name:"sech",category:"Trigonometry",syntax:["sech(x)"],description:"Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",examples:["sech(2)","1 / cosh(2)"],seealso:["coth","csch","cosh"]}},562:function(e,s,a){"use strict";e.exports={name:"sin",category:"Trigonometry",syntax:["sin(x)"],description:"Compute the sine of x in radians.",examples:["sin(2)","sin(pi / 4) ^ 2","sin(90 deg)","sin(30 deg)","sin(0.2)^2 + cos(0.2)^2"],seealso:["asin","cos","tan"]}},563:function(e,s,a){"use strict";e.exports={name:"sinh",category:"Trigonometry",syntax:["sinh(x)"],description:"Compute the hyperbolic sine of x in radians.",examples:["sinh(0.5)"],seealso:["cosh","tanh"]}},564:function(e,s,a){"use strict";e.exports={name:"tan",category:"Trigonometry",syntax:["tan(x)"],description:"Compute the tangent of x in radians.",examples:["tan(0.5)","sin(0.5) / cos(0.5)","tan(pi / 4)","tan(45 deg)"],seealso:["atan","sin","cos"]}},565:function(e,s,a){"use strict";e.exports={name:"tanh",category:"Trigonometry",syntax:["tanh(x)"],description:"Compute the hyperbolic tangent of x in radians.",examples:["tanh(0.5)","sinh(0.5) / cosh(0.5)"],seealso:["sinh","cosh"]}},566:function(e,s,a){"use strict";e.exports={name:"to",category:"Units",syntax:["x to unit","to(x, unit)"],description:"Change the unit of a value.",examples:["5 inch to cm","3.2kg to g","16 bytes in bits"],seealso:[]}},567:function(e,s,a){"use strict";e.exports={name:"clone",category:"Utils",syntax:["clone(x)"],description:"Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",examples:["clone(3.5)","clone(2 - 4i)","clone(45 deg)","clone([1, 2; 3, 4])",'clone("hello world")'],seealso:[]}},568:function(e,s,a){"use strict";e.exports={name:"format",category:"Utils",syntax:["format(value)","format(value, precision)"],description:"Format a value of any type as string.",examples:["format(2.3)","format(3 - 4i)","format([])","format(pi, 3)"],seealso:["print"]}},569:function(e,s,a){"use strict";e.exports={name:"isNaN",category:"Utils",syntax:["isNaN(x)"],description:"Test whether a value is NaN (not a number)",examples:["isNaN(2)","isNaN(0 / 0)","isNaN(NaN)","isNaN(Infinity)"],seealso:["isNegative","isNumeric","isPositive","isZero"]}},570:function(e,s,a){"use strict";e.exports={name:"isInteger",category:"Utils",syntax:["isInteger(x)"],description:"Test whether a value is an integer number.",examples:["isInteger(2)","isInteger(3.5)","isInteger([3, 0.5, -2])"],seealso:["isNegative","isNumeric","isPositive","isZero"]}},571:function(e,s,a){"use strict";e.exports={name:"isNegative",category:"Utils",syntax:["isNegative(x)"],description:"Test whether a value is negative: smaller than zero.",examples:["isNegative(2)","isNegative(0)","isNegative(-4)","isNegative([3, 0.5, -2])"],seealso:["isInteger","isNumeric","isPositive","isZero"]}},572:function(e,s,a){"use strict";e.exports={name:"isNumeric",category:"Utils",syntax:["isNumeric(x)"],description:"Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",examples:["isNumeric(2)",'isNumeric("2")','hasNumericValue("2")',"isNumeric(0)","isNumeric(bignumber(500))","isNumeric(fraction(0.125))","isNumeric(2 + 3i)",'isNumeric([2.3, "foo", false])'],seealso:["isInteger","isZero","isNegative","isPositive","isNaN","hasNumericValue"]}},573:function(e,s,a){"use strict";e.exports={name:"hasNumericValue",category:"Utils",syntax:["hasNumericValue(x)"],description:"Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",examples:["hasNumericValue(2)",'hasNumericValue("2")','isNumeric("2")',"hasNumericValue(0)","hasNumericValue(bignumber(500))","hasNumericValue(fraction(0.125))","hasNumericValue(2 + 3i)",'hasNumericValue([2.3, "foo", false])'],seealso:["isInteger","isZero","isNegative","isPositive","isNaN","isNumeric"]}},574:function(e,s,a){"use strict";e.exports={name:"isPositive",category:"Utils",syntax:["isPositive(x)"],description:"Test whether a value is positive: larger than zero.",examples:["isPositive(2)","isPositive(0)","isPositive(-4)","isPositive([3, 0.5, -2])"],seealso:["isInteger","isNumeric","isNegative","isZero"]}},575:function(e,s,a){"use strict";e.exports={name:"isPrime",category:"Utils",syntax:["isPrime(x)"],description:"Test whether a value is prime: has no divisors other than itself and one.",examples:["isPrime(3)","isPrime(-2)","isPrime([2, 17, 100])"],seealso:["isInteger","isNumeric","isNegative","isZero"]}},576:function(e,s,a){"use strict";e.exports={name:"isZero",category:"Utils",syntax:["isZero(x)"],description:"Test whether a value is zero.",examples:["isZero(2)","isZero(0)","isZero(-4)","isZero([3, 0, -2, 0])"],seealso:["isInteger","isNumeric","isNegative","isPositive"]}},577:function(e,s,a){"use strict";e.exports={name:"typeof",category:"Utils",syntax:["typeof(x)"],description:"Get the type of a variable.",examples:["typeof(3.5)","typeof(2 - 4i)","typeof(45 deg)",'typeof("hello world")'],seealso:["getMatrixDataType"]}}}]);