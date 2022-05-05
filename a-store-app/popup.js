var xhtml_popup = '<div id="background"><form id="formId">'+
 '<a class="xoa-btn">X</a>'+
    '<input id="tenSanPham" type="text" placeholder="Thêm tên sản phẩm" />'+
    '<input id="soLuotThich" type="text" placeholder="Số lượt thích" />'+
    '<input id="giaTien" type="text" placeholder="Giá tiền" />'+
    '<button id="luuKetQua">Lưu kết quả</button>'+
'</form></div>';

var body = document.querySelector("body");
body.addEventListener('click', function(e) {
    console.log("click...")
    if(e.target.matches("#btn-themmoi-thucdon")) {
        document.getElementById('popup_content').innerHTML = xhtml_popup;
    }
    if(e.target.matches('.xoa-btn')) {
       closePopup();
    }
    if(e.target.matches('#luuKetQua')) {
        var tenSanPham  = document.getElementById("tenSanPham").value
        var soLuotThich = document.getElementById("soLuotThich").value
        var giaTien     = document.getElementById("giaTien").value
        console.log("tenSanPham : "+ tenSanPham)
        console.log("soLuotThich : "+ soLuotThich)
        console.log("giaTien : "+ giaTien)
        var _temp =  {
                        id: tenSanPham, 
                        ten: tenSanPham, 
                        giaTien: giaTien,
                        soLuotDatHang: 999, 
                        luotThich: soLuotThich
                    }
        data.unshift(_temp);  // push(_temp)
        // vẽ lại html
        console.log(data)
        
       var xhtml = loadData(data);
       renderData('right_content', xhtml);
       // ket thuc vẽ 
       closePopup();
    }
})


function closePopup() {
    document.getElementById('popup_content').innerHTML = "";
}


// var arr = [{id: 1, b:'abc'},{id: 2, b:'test'}, {id: 3, b:'test'}]

// console.log(arr.find(x => x.id === 1).b);