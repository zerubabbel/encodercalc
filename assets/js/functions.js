$( document ).ready(function() {

	var total = 1; 
  // Get started!
  $('#addToListButton').click(function() { 
  		total++;
		console.log('Hello');
		$('#inputFieldsArea').append('<div class="inputBlock number'+total+'"><strong>Item Price</strong><div class="input-group mb-3 mr-2"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="number" class="form-control itemPrice" id="itemPrice" aria-label="Item Price"><div class="input-group-append mr-2"><span class="input-group-text rounded-right"></span></div><button class="btn-danger rounded remove"><i class="fa fa-trash"></i></button></div></div>');
	}); 

  $('#inputFieldsArea').on('click', '.remove', function() {
  		console.log("Hello");
		$(this).closest('.inputBlock').remove();
	});

  $('#calculateButton').click(function(){
  		console.log('Hello');
      var shippingCost = parseFloat($('.shippingCost').val());
      if(isNaN(shippingCost)){
          alert ('You must enter a shipping cost');
      } else {
          var sum = 0; 
        console.log(sum);

        // console.log($("#itemPrice").val());

        $('.itemPrice').each(function(){
          if($(this).val()){
            sum += parseFloat($(this).val());
          }
        });

        
        sum = sum; 
        var tax = (sum * .10);
        var costWithTax = sum + tax; 
        var serviceCharge = ((tax + sum) * .20);
        var subtotalDollar = sum + tax + serviceCharge;
        var subtotalPeso = subtotalDollar * 55;
        var totalCost = ((sum + tax + serviceCharge) * 55) + shippingCost;

        shippingCost = shippingCost.toFixed(2);
        sum = sum.toFixed(2);
        tax = tax.toFixed(2);
        costWithTax = costWithTax.toFixed(2);
        serviceCharge = serviceCharge.toFixed(2);
        subtotalDollar = subtotalDollar.toFixed(2);
        subtotalPeso = subtotalPeso.toFixed(2);
        totalCost = totalCost.toFixed(2);

        console.log(tax);
        console.log(sum);
        
        $('.itemsCost').html(sum);
        $('.tax').html(tax);
        $('.costWithTax').html(costWithTax);
        $('.shipping').html(shippingCost);
        $('.serviceCharge').html(serviceCharge);
        $('.subtotalDollar').html(subtotalDollar);
        $('.subtotalPeso').html(subtotalPeso);
        $('.totalCost').html(totalCost);
      }
  		// $('input').find('#itemPrice').each(function(){
  		// 	var itemPriceCost = $(this).val();
  		// 	sum += itemPriceCost;
  		// 	console.log(itemPriceCost);
  		// });
  });
});
