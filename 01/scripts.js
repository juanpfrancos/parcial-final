function getValues(){
    const tbody = document.querySelector("#tablebody")
    const data = {"product":document.getElementById("product").value, "price":document.getElementById("price").value, "tax":document.getElementById("tax").value}
    const percent = data.price*(data.tax/100)
    const total = (parseInt(data.price) + percent)
    const row = `<tr>
                    <td>${data.product}</td>
                    <td>${data.price}</td>
                    <td>${data.tax}</td>
                    <td>${total}</td>
                </tr>`
    tbody.innerHTML += row
}