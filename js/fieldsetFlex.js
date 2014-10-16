//Escopo plugin jQuery
;(function($) {
   "use strict";
	$.fn.fieldsetFlex = function(options) {
		$.fn.fieldsetFlex.defaults = {
			duration	:	'slow',
			callback	:  	undefined,
			initState	:	'retraido'
		};
		
		$.fn.fieldsetFlex.settings = {};
		
		$.fn.fieldsetFlex.expandirFieldset = function(){
			//Pegar o parent legend
			var $objeto = $(this).parent();

			//Esconder o primeiro filho div
			$($objeto.children("div"))
				.show($.fn.fieldsetFlex.settings['duration'], function(){
						$objeto
							.removeClass("fieldset-retraido")
							.addClass("fieldset-expandido")
					});
			
			if ($.fn.fieldsetFlex.settings['callback'] !== undefined)
				return $.fn.fieldsetFlex.settings['callback']();
		}

		$.fn.fieldsetFlex.retrairFieldset = function(){
			var $objeto = $(this).parent();

			$($objeto.children("div"))
				.hide($.fn.fieldsetFlex.settings['duration'], function(){
						$objeto
							.removeClass("fieldset-expandido")
							.addClass("fieldset-retraido")
					});
					
			if ($.fn.fieldsetFlex.settings['callback'] !== undefined)
				return $.fn.fieldsetFlex.settings['callback']();
		}
		
		var init = function() {
			var element = $(this);
			
			$.fn.fieldsetFlex.settings = $.extend( {}, $.fn.fieldsetFlex.defaults, options );
			
			element.children('.controle-expandir-fildset').click($.fn.fieldsetFlex.expandirFieldset);
			element.children('.controle-retrair-fildset').click($.fn.fieldsetFlex.retrairFieldset);
			
			switch($.fn.fieldsetFlex.settings['initState']){
				case 'retraido':
					element.addClass('fieldset-retraido');
					element.children('div').hide();
				break;
				
				case 'expandido':
					element.addClass('fieldset-expandido');
					element.children('div').show();
				break;
			}
		}
		
		return this.each(init);
	}
})(jQuery);