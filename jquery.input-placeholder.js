(function($){
  $.extend($.fn, {
    placehold : function(){
      var _hasPlaceHolder = ('placeholder' in document.createElement('input'));
      return function(){
        if(!_hasPlaceHolder){
          this.each(function(){
            var orig = $(this),
            clon = orig.clone();
            clon.attr('readonly','readonly');
            clon.val(clon.attr('placeholder'))
              .removeAttr('placeholder')
              .removeAttr('name')
              .insertAfter(orig);
            orig.hide().blur(function(){
              if(this.value === ''){
                orig.hide();
                clon.show();
              } 
            })
            clon.click(function(){
              clon.hide();
              orig.show().focus();
            });
          });
        };
        return this;
      };
    }()
  });
})(jQuery);
