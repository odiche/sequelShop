$(function(){
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    $('#btnProductAdd').click(function(){
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedPro){
                window.alert('Added '+addedPro.name+' to database');
            }
        )
    })
})