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
        top = 0, bottum = matrix.length-1;
    while(left<=right && top<=bottum){
        for(let column=left;column<=right;column++){
            res.push(matrix[top][column]);
        }
        for(let row=top+1;row<=bottum;row++){
            res.push(matrix[row][right]);
        }
        if(left<right && top<bottum){
            for(let column=right-1;column>left;column--){
                res.push(matrix[bottum][column]);
            }
            for(let row = bottum; row>top;row--){
                res.push(matrix[row][left]);
            }
        }
        left++;
        right--;
        top++;
        bottum--;
    }
    return res;
};
// @lc code=end

