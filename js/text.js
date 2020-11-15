window.onload = function () {
    //生成随机生成三个数0-2，储存到变量num里
    var num = Math.floor(Math.random()*3);
    //判断
    if (num = "0") {
        document.getElementById("text").innerText = '野花开遍大地，尘埃散落其中';
    } else if (num = "1") {
        document.getElementById("text").innerText = '长风破浪会有时，直挂云帆济沧海';
    } else {
        document.getElementById("text").innerText = '沉舟侧畔千帆过，病树前头万木春';
    }
}

