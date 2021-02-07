module.exports = function reverse(n) {
    let m = 0;

    console.log(n);
    let str = Math.abs(n).toString().split("");
    str = str.reverse();
    m = parseInt(str.join(""));
    console.log(m);
    return m;
};
