$(function() {

	var productSource = $("#product").html();
  var template = Handlebars.compile(productSource);
  var productElement = template(productsData);

  $("#product-container").append(productElement);



  $(document).on("click", ".product button", function(){
 
    var wish = {gameName: $(this).closest(".product").find(".product-title").html()};
    console.log(wish.gameName);
    var wishSource = $("#wishlist").html();
    var wishTemplate = Handlebars.compile(wishSource);
    var wishElement = wishTemplate(wish);

    $(".wishlist").prepend(wishElement);
    $("#wishlist-container").show();
  });

  $(document).on("click", ".wishlist button", function(){
    $(this).closest("li").remove();

    if ($(".wishlist li").length===0) {
      $("#wishlist-container").hide();
    };
  });

});
