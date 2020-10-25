const simpleSta = require('simple-statistics')
// var result = simpleSta.min([29,15,16,17,16,15,13])
// console.log(result)
// var result2 = simpleSta.max([29,15,16,17,16,15,13])
// console.log(result2)
// var result3 = simpleSta.average([29,15,16,17,16,15,13])
// console.log(result3)
// var result4 = simpleSta.mode([29,15,16,17,16,15,13])
// console.log(result4)
// var result5 = simpleSta.median([29,15,16,17,16,15,13])
// console.log(result5)
// var res = {
// uihi: simpleSta.min([29,15,16,17,16,15,13]),
// uy: simpleSta.max([29,15,16,17,16,15,13]),
// aa:simpleSta.average([29,15,16,17,16,15,13]),
// ss:simpleSta.mode([29,15,16,17,16,15,13]),
// vv:simpleSta.median([29,15,16,17,16,15,13])
// }
var res = [
    simpleSta.min([29, 15, 16, 17, 16, 15, 13]),
    simpleSta.max([29, 15, 16, 17, 16, 15, 13]),
    simpleSta.average([29, 15, 16, 17, 16, 15, 13]),
    simpleSta.mode([29, 15, 16, 17, 16, 15, 13]),
    simpleSta.median([29, 15, 16, 17, 16, 15, 13]),
    simpleSta.product([1, 2, 3, 4]),
    simpleSta.extent([1, 2, 3, 4]),
    simpleSta.quantileRank([4, 3, 1, 2], 3),
    simpleSta.shuffle([1, 2, 3, 4])
]
for (var ii = 0; ii < res.length; ii++) {
    console.log(res[ii])
}
var cards = [{
    id: 1,
    Name: "heart",
    heart =[{
        id: 1001,
        Name: "heart A",
    }, {
        id: 1001,
        Name: "heart 2",
    }, {
        id: 1002,
        Name: "heart 3",
    },
    {
        id: 1003,
        Name: "heart 4",
    },
    {
        id: 1004,
        Name: "heart 5",
    }, {
        id: 1005,
        Name: "heart 6",
    }, {
        id: 1006,
        Name: "heart 7",
    }, {
        id: 1007,
        Name: "heart 8",
    }, {
        id: 1008,
        Name: "heart 9",
    }, {
        id: 1009,
        Name: "heart 10",
    }, {
        id: 1010,
        Name: "heart J",
    }, {
        id: 1011,
        Name: "heart Q",
    }, {
        id: 1012,
        Name: "heart K",
    }],
},{
    id:2,
    Name:"Spade",
    heart =[{
        id: 1001,
        Name: "Spade A",
    }, {
        id: 1001,
        Name: "Spade 2",
    }, {
        id: 1002,
        Name: "Spade 3",
    },
    {
        id: 1003,
        Name: "Spade 4",
    },
    {
        id: 1004,
        Name: "Spade 5",
    }, {
        id: 1005,
        Name: "Spade 6",
    }, {
        id: 1006,
        Name: "Spade 7",
    }, {
        id: 1007,
        Name: "Spade 8",
    }, {
        id: 1008,
        Name: "Spade 9",
    }, {
        id: 1009,
        Name: "Spade 10",
    }, {
        id: 1010,
        Name: "Spade J",
    }, {
        id: 1011,
        Name: "Spade Q",
    }, {
        id: 1012,
        Name: "Spade K",
    }],
    diamond = [{
    id:3,
    Name:"diamond",
    heart =[{
        id: 1013,
        Name: "diamond A",
    }, {
        id: 1014,
        Name: "diamond 2",
    }, {
        id: 1015,
        Name: "diamond 3",
    },
    {
        id: 1016,
        Name: "diamond 4",
    },
    {
        id: 1017,
        Name: "diamond 5",
    }, {
        id: 1018,
        Name: "diamond 6",
    }, {
        id: 1019,
        Name: "diamond 7",
    }, {
        id: 1020,
        Name: "diamond 8",
    }, {
        id: 1021,
        Name: "diamond 9",
    }, {
        id: 1022,
        Name: "diamond 10",
    }, {
        id: 1023,
        Name: "diamond J",
    }, {
        id: 1024,
        Name: "diamond Q",
    }, {
        id: 1025,
        Name: "diamond K",
    }],
    club = [{
        id:3,
    Name:"diamond",
    diamond =[{
        id: 1013,
        Name: "diamond A",
    }, {
        id: 1014,
        Name: "diamond 2",
    }, {
        id: 1015,
        Name: "diamond 3",
    },
    {
        id: 1016,
        Name: "diamond 4",
    },
    {
        id: 1017,
        Name: "diamond 5",
    }, {
        id: 1018,
        Name: "diamond 6",
    }, {
        id: 1019,
        Name: "diamond 7",
    }, {
        id: 1020,
        Name: "diamond 8",
    }, {
        id: 1021,
        Name: "diamond 9",
    }, {
        id: 1022,
        Name: "diamond 10",
    }, {
        id: 1023,
        Name: "diamond J",
    }, {
        id: 1024,
        Name: "diamond Q",
    }, {
        id: 1025,
        Name: "diamond K",
    }]
    }]