/** @format */

// chạy chương trình ở đây
var xhtml = loadData(data);
renderData("right_content", xhtml);

checkCart()

var body = document.querySelector("body");

body.addEventListener("click", function (event) {
  if (event.target.matches(".btn-xoa-row")) {
    var index = event.target.getAttribute("data");
    var new_arr = deleteArray(index, data); // data xóa đi 1 đơn vị tại index => new_arr
    //vẽ lại new_arr
    xhtml = loadData(new_arr);
    renderData("right_content", xhtml);
  }
  if (event.target.matches(".btn-edit-row")) {
    var index = event.target.getAttribute("index");
    hienThiPopUpEdit(index, data[index]);
  }
  if (event.target.matches("#add-cart")) {
    addCart(event);
  }
  if (event.target.matches("#luuChinhSua")) {
    var index = event.target.getAttribute("index");
    // hiện tượng copy nông, sâu
    var _temp = {...data[index]};
    _temp.ten = document.getElementById("tenSanPham").value;
    _temp.luotThich = document.getElementById("soLuotThich").value;
    _temp.giaTien = document.getElementById("giaTien").value;
    data[index] = _temp;
    console.log(data);
    // xử lý vẽ lại html cho giao diện người dùng
    var xhtml = loadData(data);
    renderData("right_content", xhtml);
    closePopup();
  }
});
