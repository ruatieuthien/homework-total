

const addCart =  (event) => {
    const id = event.target.getAttribute("data");

    const dataIndex = data.findIndex(item => item.id === id)
    data[dataIndex].soLuotDatHang++
    renderData('right_content', loadData(data));

    const index = arrCart.findIndex(item => item.id === id)
    if(index > -1) {
        arrCart[index].number++
    }
    else  {
        const  newData = data.slice(dataIndex, dataIndex+1)
        const newItem = {
            id : newData[0].id,
            name : newData[0].ten,
            price: newData[0].giaTien,
            number : 1
        }
        arrCart.unshift(newItem)
    }
    let el = ""
    let r = null
    if(arrCart.length > 0) {
        for(var i =0; i< arrCart.length; i++) {
            r += arrCart[i].price * arrCart[i].number
            el += '<div><b>'+ arrCart[i].name + '</b>'
            +'<div>Số lượng :'+ arrCart[i].number +'</div>'  + '<div> Giá Tiền: ' + arrCart[i].price +'</div>'
            +'<hr>'
        }
    }
    checkCart(el, r.toLocaleString('vi', {style : 'currency', currency : 'VND'}))
}