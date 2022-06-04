let hinh = document.getElementsByTagName("img");
console.log(hinh);
hinh[0].className = "fade";
let soThuTu = 0;
function hienThiSlideTruocDo(){
    console.log("so thu tu la:"+ soThuTu);
    hinh[soThuTu].className = "slides fade";
    if(soThuTu === 0){
        soThuTu = hinh.length - 1;
    }
    else {
        soThuTu--;
    }
    console.log("so tiep theo:"+soThuTu);
    hinh[soThuTu].className = "fade";

}
function hienThiSlideKeTiep(){
    console.log("so thu tu la:"+ soThuTu);
    hinh[soThuTu].className = "slides fade";
    console.log("len: " + hinh.length);
    if (soThuTu === hinh.length - 1){
        soThuTu = 0;
    }
    else{
        soThuTu++;
    }
    console.log("so thu tu tiep:"+soThuTu);
    hinh[soThuTu].className = "fade";
}