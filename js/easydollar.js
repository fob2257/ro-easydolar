var bancos = function () {
    $.ajax({
        type: 'GET',
        url: `http://198.199.102.31:3000/bancos`,
        success: function (json) {
            console.log(json.data)
            var misBancos = json.data.filter(function (x, i) {
                if (x.banco == "Banamex" || 
                    x.banco == "BanBajío" || 
                    x.banco == "Banco Azteca" || 
                    x.banco == "BBVA Bancomer" || 
                    x.banco == "Banorte" || 
                    x.banco == "HSBC" || 
                    x.banco == "Inbursa" ||
                    x.banco == "Santander" ||
                    i == 16) { //SAT
                    return x
                }
            })
            console.log('bancos\n', misBancos)
            $('#bancosInfo').html('')
            misBancos.forEach(function (banco, index) {
                if (banco.dolar['compra'] != undefined) {
                    $('#bancosInfo').append(`
                    <tr class="wow fadeIn" data-wow-duration="1s" data-wow-iteration="2">
                        <td>
                            <img src="img/bancos/${index}.png" alt="${banco.banco}">
                        </td>
                        <td>
                            <p>$${banco.dolar['compra']}</p>
                        </td>
                        <td>
                            <p>$${banco.dolar['venta']}</p>
                        </td>
                    </tr>
                    `)
                } else {
                    $('#bancosInfo').append(`
                    <tr class="wow fadeIn" data-wow-duration="1s" data-wow-iteration="2">
                        <td>
                            <img src="img/bancos/${index}.png" alt="${banco.banco}">
                        </td>
                        <td>
                            <p>$${banco.dolar['compra/venta']}</p>
                        </td>
                        <td>
                            <p>$${banco.dolar['compra/venta']}</p>
                        </td>
                    </tr>
                    `)
                }
            })
        },
        error: function (err) {
            console.log('error GET bancos\r' + err)
        }
    })
}
new WOW().init()
$(document).ready(function () {
    bancos()
    setInterval(bancos, 300000) // 5min 300000
    $('#carousel-example-generic').carousel({
        interval: 5000
    })
})