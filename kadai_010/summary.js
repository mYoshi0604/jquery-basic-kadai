$(function() {
  $('#change-color').on('click', function() {
    // 文字色が変化
    $('#target').css('color', 'orange');
  });

  $('#change-text').on('click', function() {
    // 文字が変化
    $('#target').text('Hello!');
  });

  $('#fade-out').on('click', function() {
    // フェードアウト
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    // フェードイン
    $('#target').fadeIn();
  });
});