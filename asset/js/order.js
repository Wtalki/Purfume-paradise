$(document).ready(function () {
  $(".close_btn").click(function () {
    $(".product_detail").css("transform", "scale(0)");
  });

  $(".add_cart").each(function (index, item) {
    // $(item).preventDefaults();
    $(this).click((e) => {
      e.preventDefault();
      $(".product_detail").css("transform", "scale(1)");
    });
  });

  $count = 0;
  $value = $(".order_count").val($count);

  $(".btn_plus").click(function () {
    $count++;
    $value = $(".order_count").val($count);
  });
  $(".btn_minus").click(function () {
    if ($count == 0) {
      $count = 0;
      return;
    }
    $count--;
    $value = $(".order_count").val($count);
  });
});
