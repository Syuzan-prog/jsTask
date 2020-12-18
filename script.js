

$(document).ready(function(){
	
	$(document).on('click', '.city', function(){
		
		var triggerThis = $(this);

		if (!triggerThis.find('.city_frame').length) {
		
			triggerThis.css('font-weight', 'bold');
			triggerThis.append('<div class="city_frame"><span class="city_frame_span">CITY</span></div><span class="delete_btn">x</span>');
		}
	});
	
	$(document).on('click', '.country', function(){
		
		var triggerThis = $(this);
		
		if (!triggerThis.find('.country_frame').length) {
		
			triggerThis.css('font-weight', 'bold');
			triggerThis.append('<div class="country_frame"><span class="country_frame_span">COUNTRY</span></div><span class="delete_btn">x</span>');
		}
	});
	
	$(document).on('click', '.seo', function(){
		
		var triggerThis = $(this);
		
		if (!triggerThis.find('.seo_frame').length) {
		
			triggerThis.css('font-weight', 'bold');
			triggerThis.append('<div class="seo_frame"><span class="seo_frame_span">Lon</span></div><span class="delete_btn">x</span>');
		}
	});
	
	
	$(document).on('click', '.delete_btn', function(){
		
		var triggerThis = $(this);
		
		triggerThis.parent().css('font-weight', 'normal');
		triggerThis.prev().remove();
		triggerThis.remove();
		
		return false;
	});

	$(document).on('click', '#rightClose', function(){
		$(".list").css('display','none')
		$(".rightS").css('display','none')
		$(".right").css('width','3vh')
		$(".close").css('display','none')
		$(".close2").css('display','block')
		$(".close2").css('transform','rotate(180deg)')
	});
	$(document).on('click', '#rightOpen', function(){
		$(".list").css('display','block')
		$(".rightS").css('display','block')
		$(".right").css('width','28vh')
		$(".close").css('display','block')
		$(".close2").css('display','none')
	});
});
