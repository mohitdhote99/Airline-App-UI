$(document).ready(function(){	sliderinit(true);	$('.bd-example-modal-lg').modal('show');});
	
	// navigation animation
	$('#log_des').parent('.ui.modal.log_modal_vol').addClass('.back');
	$(window).scroll(function(){
		var scrTop = $(window).scrollTop();
		if (scrTop >= 150) {
			$('.nav_bf_des').addClass('nav_af_des');
			$('.nav_width_bf').addClass('nav_width_af');
		}else{
			$('.nav_bf_des').removeClass('nav_af_des');
			$('.nav_width_bf').removeClass('nav_width_af');
		}
	});
	// navigation animation

	// navigationresize
	$(window).resize(function(){
			var height = $('header').outerHeight();
			$('.clear_nav').css({'height':height+'px'});
	});
	var height = $('header').outerHeight();
	$('.clear_nav').css({'height':height+'px'});
	// navigationresize






// slider js
// window all animation front page
var scroll_ = $(window).scrollTop();
if (scroll_ == 0 || scroll_ > 0) {
	$('.ht_slider_wraper').addClass('active');
}

// slider intialization
function sliderinit(autoslide){
	let parentW		= '100';
	let slideWpaper = $('.ht_slider_slides_wraper');
	let totalSlide 	= slideWpaper.children();
	let html 		= $(totalSlide[0].outerHTML).removeClass('active');
	slideWpaper.append(html);

	// index getting after appen new index now become total ( slide + 1 )

	let afterIndex = $('.ht_slider_slides_wraper').children();

	// setting width of main container
	$(slideWpaper).css({'width':afterIndex.length*parentW+'%'});

	// function for scroll left and adding append for maintain looping
		function slider(){
			let main_child_wrap = $('.ht_slider_slides_wraper');
			let newLength 		= main_child_wrap.children();
			let slideActive 	= main_child_wrap.children('div.active');
			let activeIndex 	= slideActive.index();
			let index_ 			= activeIndex+1;
			let lastslide = newLength.length-1;
			if(index_ == newLength.length-1){
				$(slideWpaper.children()[index_]).addClass('active');
				  $(main_child_wrap).css({'margin-left':'-'+(parentW * lastslide)+'%','transition':'1s all ease'});
				  setTimeout(()=>{
					$(main_child_wrap).css({'margin-left':'0%','transition':'unset'});
					$(slideActive).removeClass('active');
					$(main_child_wrap.children()[0]).addClass('active');
				  },1000);
			}else{
				$(slideActive).removeClass('active');
				$(slideWpaper.children()[index_]).addClass('active');
				  $(main_child_wrap).css({'margin-left':'-'+(parentW * index_)+'%','transition':'1s all ease'});
			 }
		}

	if (autoslide) {setInterval(slider,4000);}
}