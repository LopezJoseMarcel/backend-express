const INPUTS = [
  [ 22, 2, 3, 7, 13 ], [ 75, 1, 3, 7, 16 ], [ 30, 2, 3, 7, 14 ],
  [ 64, 1, 3, 6, 18 ], [ 68, 1, 3, 6, 1 ],  [ 49, 2, 3, 6, 14 ],
  [ 42, 1, 3, 6, 13 ], [ 51, 2, 3, 7, 14 ], [ 63, 1, 3, 6, 28 ],
  [ 49, 2, 3, 6, 28 ], [ 50, 2, 3, 7, 14 ], [ 23, 2, 3, 6, 13 ],
  [ 37, 1, 3, 7, 14 ], [ 29, 1, 3, 6, 13 ], [ 62, 1, 3, 7, 16 ],
  [ 35, 2, 3, 6, 28 ], [ 53, 2, 3, 7, 28 ], [ 80, 2, 3, 7, 1 ],
  [ 17, 2, 3, 7, 16 ], [ 79, 1, 3, 7, 7 ],  [ 59, 1, 3, 6, 13 ],
  [ 29, 1, 3, 6, 20 ], [ 52, 2, 3, 7, 14 ], [ 59, 1, 3, 6, 28 ],
  [ 48, 1, 3, 7, 18 ], [ 45, 2, 3, 7, 18 ], [ 73, 1, 3, 7, 1 ],
  [ 38, 1, 3, 7, 16 ], [ 27, 2, 3, 6, 1 ],  [ 78, 1, 3, 7, 13 ],
  [ 54, 2, 3, 7, 16 ], [ 19, 1, 3, 6, 13 ], [ 18, 2, 3, 6, 16 ],
  [ 69, 2, 3, 7, 20 ], [ 52, 2, 3, 7, 28 ], [ 20, 2, 3, 7, 13 ],
  [ 31, 2, 3, 6, 16 ], [ 55, 1, 3, 6, 14 ], [ 17, 2, 3, 7, 28 ],
  [ 17, 2, 3, 6, 18 ], [ 44, 1, 3, 6, 13 ], [ 49, 2, 3, 6, 28 ],
  [ 76, 2, 3, 7, 28 ], [ 42, 1, 3, 7, 16 ], [ 34, 2, 3, 7, 20 ],
  [ 68, 2, 3, 7, 20 ], [ 77, 1, 3, 6, 1 ],  [ 72, 2, 3, 6, 7 ],
  [ 68, 2, 3, 6, 18 ], [ 67, 1, 3, 6, 18 ], [ 48, 1, 3, 7, 1 ],
  [ 39, 1, 3, 7, 13 ], [ 66, 2, 3, 6, 18 ], [ 69, 1, 3, 7, 14 ],
  [ 67, 2, 3, 7, 28 ], [ 23, 1, 3, 7, 28 ], [ 40, 2, 3, 6, 28 ],
  [ 65, 2, 3, 6, 20 ], [ 28, 2, 3, 7, 16 ], [ 69, 2, 3, 6, 18 ],
  [ 47, 1, 3, 6, 18 ], [ 34, 2, 3, 6, 20 ], [ 64, 1, 3, 7, 16 ],
  [ 20, 1, 3, 6, 16 ], [ 77, 2, 3, 6, 20 ], [ 51, 1, 3, 6, 14 ],
  [ 61, 2, 3, 7, 13 ], [ 65, 1, 3, 7, 1 ],  [ 49, 2, 3, 6, 14 ],
  [ 27, 1, 3, 7, 28 ], [ 53, 2, 3, 6, 20 ], [ 65, 2, 3, 6, 1 ],
  [ 61, 1, 3, 6, 18 ], [ 36, 2, 3, 6, 1 ],  [ 21, 1, 3, 7, 14 ],
  [ 50, 1, 3, 7, 20 ], [ 64, 1, 3, 6, 14 ], [ 67, 2, 3, 6, 13 ],
  [ 47, 1, 3, 7, 13 ], [ 37, 1, 3, 7, 1 ],  [ 35, 1, 3, 7, 7 ],
  [ 78, 1, 3, 6, 20 ], [ 49, 2, 3, 6, 7 ],  [ 17, 1, 3, 7, 28 ],
  [ 37, 2, 3, 7, 1 ],  [ 53, 2, 3, 7, 20 ], [ 52, 2, 3, 6, 20 ],
  [ 17, 2, 3, 7, 1 ],  [ 23, 2, 3, 7, 28 ], [ 49, 1, 3, 6, 1 ],
  [ 56, 2, 3, 6, 28 ], [ 59, 1, 3, 7, 1 ],  [ 40, 1, 3, 6, 1 ],
  [ 39, 2, 3, 7, 18 ], [ 58, 1, 3, 6, 16 ], [ 19, 1, 3, 7, 13 ],
  [ 68, 1, 3, 6, 28 ], [ 60, 1, 3, 7, 28 ], [ 25, 1, 3, 6, 13 ],
  [ 35, 2, 3, 7, 7 ]
];

const OUTPUTS1 = [
  [ 1, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 7 ],
  [ 4, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 8 ],  [ 4, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 7 ],
  [ 4, 1, 15, 12, 8 ],  [ 4, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 7 ],
  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 8 ],  [ 4, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 10 ],  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 9 ],
  [ 1, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10],  [ 4, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 8 ],  [ 4, 1, 15, 12, 8 ],
  [ 1, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 9 ],  [ 1, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 9 ],
  [ 1, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 8 ],
  [ 4, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 7 ],
  [ 4, 1, 15, 12, 10 ],  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 8 ],
  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 10 ], [ 4, 1, 15, 12, 9 ],
  [ 1, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 8 ],  [ 1, 1, 15, 12, 9 ],
  [ 4, 1, 15, 12, 9 ],  [ 1, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 10 ],
  [ 1, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 10 ],
  [ 4, 1, 15, 12, 9 ],  [ 4, 1, 15, 12, 10 ], [ 1, 1, 15, 12, 7 ],
  [ 4, 1, 15, 12, 7 ],  [ 4, 1, 15, 12, 7 ],  [ 1, 1, 15, 12, 8 ],
  [ 4, 1, 15, 12, 10 ]
];

const OUTPUTS2 = [[ 5, 1, 10, 8, 30 ], [ 5, 1, 10, 8, 26 ], [ 5, 1, 10, 8, 15 ],// Crema Esteroidea
[ 5, 1, 10, 8, 30 ],  [ 5, 1, 10, 8, 17 ], [ 5, 2, 10, 8, 16 ],
[ 5, 1, 10, 8, 30 ], [ 5, 1, 10, 8, 13 ], [ 5, 1, 10, 8, 18 ],
[ 5, 1, 10, 8, 24 ], [ 5, 2, 10, 8, 18 ], [ 5, 1, 10, 8, 30 ],
[ 5, 2, 10, 8, 13 ], [ 5, 2, 10, 8, 30 ], [ 5, 2, 10, 8, 30 ],
[ 5, 1, 10, 8, 16 ], [ 5, 2, 10, 8, 16 ], [ 5, 1, 10, 8, 18 ],
[ 5, 2, 10, 8, 24 ], [ 5, 1, 10, 8, 13 ], [ 5, 2, 10, 8, 18 ],
[ 5, 2, 10, 8, 13 ], [ 5, 1, 10, 8, 14 ], [ 5, 1, 10, 8, 25 ],
[ 5, 2, 10, 8, 16 ], [ 5, 1, 10, 8, 15 ], [ 5, 2, 10, 8, 30 ],
[ 5, 1, 10, 8, 25 ], [ 5, 1, 10, 8, 26 ], [ 5, 2, 10, 8, 16 ],
[ 5, 2, 10, 8, 30 ], [ 5, 1, 10, 8, 15 ], [ 5, 2, 10, 8, 13 ],
[ 5, 1, 10, 8, 18 ], [ 5, 2, 10, 8, 26 ], [ 5, 2, 10, 8, 26 ],
[ 5, 1, 10, 8, 7 ],  [ 5, 2, 10, 8, 30 ], [ 5, 1, 10, 8, 17 ],
[ 5, 1, 10, 8, 27 ], [ 5, 1, 10, 8, 25 ], [ 5, 1, 10, 8, 18 ],
[ 5, 1, 10, 8, 25 ], [ 5, 1, 10, 8, 7 ],  [ 5, 1, 10, 8, 24 ],
[ 5, 2, 10, 8, 26 ], [ 5, 2, 10, 8, 27 ], [ 5, 2, 10, 8, 13 ],
[ 5, 1, 10, 8, 16 ], [ 5, 2, 10, 8, 26 ], [ 5, 2, 10, 8, 30 ],
[ 5, 2, 10, 8, 25 ], [ 5, 1, 10, 8, 30 ], [ 5, 1, 10, 8, 30 ],
[ 5, 1, 10, 8, 7 ],  [ 5, 1, 10, 8, 15 ], [ 5, 1, 10, 8, 15 ],
[ 5, 1, 10, 8, 17 ], [ 5, 1, 10, 8, 25 ], [ 5, 1, 10, 8, 25 ],
[ 5, 2, 10, 8, 27 ], [ 5, 1, 10, 8, 26 ], [ 5, 2, 10, 8, 30 ],
[ 5, 1, 10, 8, 27 ], [ 5, 2, 10, 8, 22 ], [ 5, 1, 10, 8, 30 ],
[ 5, 1, 10, 8, 26 ], [ 5, 1, 10, 8, 30 ], [ 5, 1, 10, 8, 24 ],
[ 5, 1, 10, 8, 26 ], [ 5, 1, 10, 8, 13 ], [ 5, 2, 10, 8, 7 ],
[ 5, 1, 10, 8, 16 ], [ 5, 2, 10, 8, 26 ], [ 5, 1, 10, 8, 27 ],
[ 5, 2, 10, 8, 25 ], [ 5, 1, 10, 8, 17 ], [ 5, 1, 10, 8, 7 ],
[ 5, 1, 10, 8, 14 ], [ 5, 2, 10, 8, 15 ], [ 5, 2, 10, 8, 15 ],
[ 5, 1, 10, 8, 15 ], [ 5, 2, 10, 8, 14 ], [ 5, 1, 10, 8, 16 ],
[ 5, 2, 10, 8, 13 ], [ 5, 2, 10, 8, 27 ], [ 5, 2, 10, 8, 7 ],
[ 5, 1, 10, 8, 25 ], [ 5, 2, 10, 8, 30 ], [ 5, 2, 10, 8, 30 ],
[ 5, 2, 10, 8, 30 ], [ 5, 1, 10, 8, 27 ], [ 5, 1, 10, 8, 16 ],
[ 5, 2, 10, 8, 13 ], [ 5, 2, 10, 8, 24 ], [ 5, 1, 10, 8, 30 ],
[ 5, 1, 10, 8, 13 ], [ 5, 1, 10, 8, 24 ], [ 5, 2, 10, 8, 25 ],
[ 5, 1, 10, 8, 30 ]
];

const OUTPUTS3 = [
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 7 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 7 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 6 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 7 ], [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 6 ], [ 6, 1, 15, 12, 5 ], [ 6, 1, 15, 12, 5 ],
  [ 6, 1, 15, 12, 5 ]
];


const DATA_MED = {
  INPUTS,
  OUTPUTS1,
  OUTPUTS2,
  OUTPUTS3
}

module.exports = DATA_MED;