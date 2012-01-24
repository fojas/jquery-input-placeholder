(function($){
  $.extend($.fn, {
    placehold : function(){
      var _hasPlaceHolder = ('placeholder' in document.createElement('input'));
      return function(){
        if(!_hasPlaceHolder){
          var orig = this,
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
            orig.show().focus();
            clon.hide();
          });
        };
        return orig;
      };
    }()
  });
})(jQuery);
