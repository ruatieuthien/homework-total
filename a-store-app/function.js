//xây dựng trang html 
function renderData(_idDocument, _html) {
    if(document.getElementById(_idDocument) !== null) {
         document.getElementById(_idDocument).innerHTML = _html
    }
 }
 
 // tạo 1 function load data từ file data.js
 // _arr : data truyền vào 
 function loadData(_arr) {
     var html = "";
     if(_arr.length > 0) {
         for(var i =0; i< _arr.length; i++) {
             html += '<div class="_item"><b class="tit" attr="'+_arr[i].id+'">' + _arr[i].ten + '</b>'+
             '<span>Đã được đặt:'+ _arr[i].soLuotDatHang +' | số lượt thích:'+ _arr[i].luotThich +'</span>'
             +'<div data="'+_arr[i].id+'" class="btn-adding" id="add-cart">+</div> <div data="'+i+'" class="btn-xoa-row btn-adding">-</div>' 
             +' <div index="'+i+'" class="btn-edit-row btn-adding">s</div></div>';
         }
     }
     return html;
 }
 
function checkCart(el, r) {
    const cartBody = document.getElementById("giohang-body")
    const cartFooter = document.getElementById("giohang-footer")
    if(arrCart.length < 1) {
        cartBody.innerHTML = "<b>Hiện tại chưa có đơn đặt hàng!</b>"
        cartFooter.innerHTML = ""
    } else {
        cartBody.innerHTML = el
        cartFooter.innerHTML = `<b>Tổng : ${r}</b>`
    }
}

 function deleteArray(_index, arr) {
     arr.splice(_index, 1);
     return arr;
 }
 
 //_obj là đối tượng edit
 function hienThiPopUpEdit(index, _obj) {
     var xhtml_popup_edit = '<div id="background"><form id="formId">'+
     '<a class="xoa-btn">X</a>'+
         '<input id="tenSanPham" type="text" placeholder="Thêm tên sản phẩm" value="'+_obj.ten+'" />'+
         '<input id="soLuotThich" type="text" placeholder="Số lượt thích" value="'+_obj.luotThich+'" />'+
         '<input id="giaTien" type="text" placeholder="Giá tiền" value="'+_obj.giaTien+'" />'+
         '<button index="'+index+'" id="luuChinhSua">Lưu chỉnh sửa</button>'+
     '</form></div>';
     document.getElementById('popup_content').innerHTML = xhtml_popup_edit;
 }