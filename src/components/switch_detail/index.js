$(function(){
  $('#J_basicinfo').click(function(){
    $('#J_agendoutline').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_basicoinfo').removeClass("switch-btn").addClass('switch-btn-focus');
    $('#J_noticeinfo').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_switch_bottom').animate({left:'0vw',width:'33vw'});
    // $('#metting-detail').css('display','block')
    // $('#agend-outline').css('display','none')
    // $('#notice-info').css('display','none')
  });
  $('#J_agendoutline').click(function(){
    $('#J_agendoutline').removeClass("switch-btn").addClass('switch-btn-focus');
    $('#J_basicinfo').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_noticeinfo').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_switch_bottom').animate({left:'33vw',width:'33vw'});
    // $('#metting-detail').css('display','none')
    // $('#agend-outline').css('display','block')
    // $('#notice-info').css('display','none')
  });
  $('#J_noticeinfo').click(function () {
    $('#J_agendoutline').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_basicinfo').removeClass("switch-btn-focus").addClass('switch-btn');
    $('#J_noticeinfo').removeClass("switch-btn").addClass('switch-btn-focus');
    $('#J_switch_bottom').animate({left:'66vw',width:'33vw'});
    // $('#metting-detail').css('display','none')
    // $('#agend-outline').css('display','none')
    // $('#notice-info').css('display','block')
  });
});
