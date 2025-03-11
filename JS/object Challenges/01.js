/* Flatten Nested Array */

const arr = [1, 
    [2, 
        [3, 
            [4, 
                [5], 
                [5,6,
                    [7, [15,13]]
                ]
            ]
        ]
    ],
     6];

//  with builtin methods
console.log(arr.flat(arr.length+1));


