$(function(){

  $('#BasicInfo').click(function(){
    $('#FeedBackInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#BasicInfo').removeClass("switch_btn").addClass('switch_btn_focus');
    $('#VoteInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#switch_bottom').animate({left:'0vw',width:'33vw'});
  });
  $('#FeedBackInfo').click(function(){
    $('#FeedBackInfo').removeClass("switch_btn").addClass('switch_btn_focus');
    $('#BasicInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#VoteInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#switch_bottom').animate({left:'33vw',width:'33vw'});
  });
  $('#VoteInfo').click(function () {
    $('#FeedBackInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#BasicInfo').removeClass("switch_btn_focus").addClass('switch_btn');
    $('#VoteInfo').removeClass("switch_btn").addClass('switch_btn_focus');
    $('#switch_bottom').animate({left:'66vw',width:'33vw'});
  });
});
