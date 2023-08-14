/**
 * 经纬度坐标转墨卡托坐标
 * @param {经度(角度值)} longitude 
 * @param {维度(角度值)} latitude
 */
// 墨卡托坐标系：展开地球，赤道作为x轴，向东为x轴正方，本初子午线作为y轴，向北为y轴正方向。
// 数字20037508.34是地球赤道周长的一半：地球半径6378137米，赤道周长2*PI*r = 2 * 20037508.3427892，墨卡托坐标x轴区间[-20037508.3427892,20037508.3427892]
const lon2xy = (longitude: number, latitude: number) => {
    const E = longitude;
    const N = latitude;
    const x = E * 20037508.34 / 180;
    let y = Math.log(Math.tan((90 + N) * Math.PI / 360)) / (Math.PI / 180);
    y = y * 20037508.34 / 180;
    return { x, y }
}
export {
    lon2xy
}