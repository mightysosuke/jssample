(function($, window) {
  $(function() {
    // この中に処理を書きます

    // 課題1
    $('h2').remove();

    // 課題2
    alert($('#index').text()); // テキストとして表示
    alert($('#index').html()); // htmlのソースとして表示(タグも表示される)

    // 課題3
    $('ul').append('<li>メソッド</li>');

    // 課題4、5
    $('#index').find('li').each(function() {
      var li_value = $(this).text();
      var li_length = $(this).text().length;
      alert(li_value + "[" + li_length + "文字]");
    });

  });
})(jQuery, window);
