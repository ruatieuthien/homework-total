const search = document.getElementById("search")
search.addEventListener("keyup", function() {
    const newData = data.filter(item => item.ten.toLowerCase().includes(search.value.toLowerCase()))
    renderData('right_content', loadData(newData));
})