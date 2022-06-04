function berekenRestwaarde()
{
    let bon_waardes = document.querySelectorAll('[data-test="giftcard-remaining-value"]');

    let total = 0;
    for (let i in bon_waardes)
    {
        if (bon_waardes.hasOwnProperty(i)) {
            let bon_waarde = bon_waardes[i].innerHTML.replace("€", "").replace("&euro;", "").replace(",", ".").trim();
            let getal_waarde = parseFloat(bon_waarde);
            total = total + getal_waarde;
        }
    }

    total = total/2; /* Omdat Bol ook het detailscherm al rendert in de HTML zou je de waarde dubbel krijgen.. */

    const html_restwaarde = '<td data-test="giftcard-mobile-header-type" data-th="Type" colspan="3">\n' +
        '                    <span data-test="giftcard-type">Totale restwaarde</span>\n' +
        '                </td>\n' +
        '                <td data-test="giftcard-mobile-header-remaining-value" data-th="Restwaarde" colspan="3">\n' +
        '                    <span data-test="giftcard-remaining-value"><strong>&euro; ' + total.toFixed(2).toString().replace('.', ',') + '</span>\n' +
        '                </td>\n';

    let restwaarde_rij_element = document.createElement("tr");
    restwaarde_rij_element.innerHTML = html_restwaarde;

    document.getElementById('giftcard-table-rows').insertAdjacentHTML('afterbegin', html_restwaarde);
    document.getElementById('giftcard-table-rows').insertAdjacentHTML('beforeend', html_restwaarde);
}

window.setTimeout(berekenRestwaarde, 500);