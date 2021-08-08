/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let res = [];
    let left = 0, right = matrix[0].length - 1,
        top = 0, bottom = matrix.length-1;
    while(left<=right && top<=bottom){
        for(let column=left;column<=right;column++){
            res.push(matrix[top][column]);
        }
        for(let row=top+1;row<=bottom;row++){
            res.push(matrix[row][right]);
        }
        if(left<right && top<bottom){
            for(let column=right-1;column>left;column--){
                res.push(matrix[bottom][column]);
            }
            for(let row = bottom; row>top;row--){
                res.push(matrix[row][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
};
// @lc code=end

