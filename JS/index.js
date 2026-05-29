


// ~ ========= navbar ========

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300 ) { 
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  });


  function openImageInNewLayer(imageUrl) {
  // إعدادات النافذة الجديدة

    const windowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=yes,width=400,height=400";
  // فتح النافذة الجديدة مع الصورة

    window.open(imageUrl, '_blank' );
}
