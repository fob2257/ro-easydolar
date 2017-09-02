var bancos = function () {
    $.ajax({
        type: 'GET',
        url: `http://198.199.102.31:3000/bancos`,
        success: function (json) {
            var misBancos = json.data.filter(function (x, i) {
                if (i == 0 || //Banamex
                    i == 1 || //Banbajio
                    i == 2 || //Banco azteca
                    i == 4 || //BBVA
                    i == 5 || //Banorte
                    i == 9 || //HSBC
                    i == 10 || //Inbursa
                    i == 15 || //Santander
                    i == 16) { //SAT
                    return x
                }
            })
            // console.log('bancos\n', misBancos)
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