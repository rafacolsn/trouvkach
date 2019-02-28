(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{448:function(t,i,e){"use strict";t.exports={name:"bitAnd",category:"Bitwise",syntax:["x & y","bitAnd(x, y)"],description:"Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",examples:["5 & 3","bitAnd(53, 131)","[1, 12, 31] & 42"],seealso:["bitNot","bitOr","bitXor","leftShift","rightArithShift","rightLogShift"]}},449:function(t,i,e){"use strict";t.exports={name:"bitNot",category:"Bitwise",syntax:["~x","bitNot(x)"],description:"Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",examples:["~1","~2","bitNot([2, -3, 4])"],seealso:["bitAnd","bitOr","bitXor","leftShift","rightArithShift","rightLogShift"]}},450:function(t,i,e){"use strict";t.exports={name:"bitOr",category:"Bitwise",syntax:["x | y","bitOr(x, y)"],description:"Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",examples:["5 | 3","bitOr([1, 2, 3], 4)"],seealso:["bitAnd","bitNot","bitXor","leftShift","rightArithShift","rightLogShift"]}},451:function(t,i,e){"use strict";t.exports={name:"bitXor",category:"Bitwise",syntax:["bitXor(x, y)"],description:"Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",examples:["bitOr(1, 2)","bitXor([2, 3, 4], 4)"],seealso:["bitAnd","bitNot","bitOr","leftShift","rightArithShift","rightLogShift"]}},452:function(t,i,e){"use strict";t.exports={name:"leftShift",category:"Bitwise",syntax:["x << y","leftShift(x, y)"],description:"Bitwise left logical shift of a value x by y number of bits.",examples:["4 << 1","8 >> 1"],seealso:["bitAnd","bitNot","bitOr","bitXor","rightArithShift","rightLogShift"]}},453:function(t,i,e){"use strict";t.exports={name:"rightArithShift",category:"Bitwise",syntax:["x >> y","rightArithShift(x, y)"],description:"Bitwise right arithmetic shift of a value x by y number of bits.",examples:["8 >> 1","4 << 1","-12 >> 2"],seealso:["bitAnd","bitNot","bitOr","bitXor","leftShift","rightLogShift"]}},454:function(t,i,e){"use strict";t.exports={name:"rightLogShift",category:"Bitwise",syntax:["x >>> y","rightLogShift(x, y)"],description:"Bitwise right logical shift of a value x by y number of bits.",examples:["8 >>> 1","4 << 1","-12 >>> 2"],seealso:["bitAnd","bitNot","bitOr","bitXor","leftShift","rightArithShift"]}},455:function(t,i,e){"use strict";t.exports={name:"bellNumbers",category:"Combinatorics",syntax:["bellNumbers(n)"],description:"The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",examples:["bellNumbers(3)","bellNumbers(8)"],seealso:["stirlingS2"]}},456:function(t,i,e){"use strict";t.exports={name:"catalan",category:"Combinatorics",syntax:["catalan(n)"],description:"The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",examples:["catalan(3)","catalan(8)"],seealso:["bellNumbers"]}},457:function(t,i,e){"use strict";t.exports={name:"composition",category:"Combinatorics",syntax:["composition(n, k)"],description:"The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",examples:["composition(5, 3)"],seealso:["combinations"]}},458:function(t,i,e){"use strict";t.exports={name:"stirlingS2",category:"Combinatorics",syntax:["stirlingS2(n, k)"],description:"he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",examples:["stirlingS2(5, 3)"],seealso:["bellNumbers"]}}}]);