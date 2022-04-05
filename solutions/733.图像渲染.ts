/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const x_num = image.length;
  const y_num = image[0].length;
  const target = image[sr][sc];
  if (target == newColor) return image;
  const setColor = (x: number, y: number) => {
    if (x >= 0 && x < x_num && y >= 0 && y < y_num) {
      if (image[x][y] === target) {
        image[x][y] = newColor;
        setColor(x - 1, y);
        setColor(x + 1, y);
        setColor(x, y - 1);
        setColor(x, y + 1);
      }
    }
  };
  setColor(sr, sc);
  return image;
}
// @lc code=end
