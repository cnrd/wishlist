function googleLinks() {
	var gooRegEx = /.+?(https?:\/\/.+?)&.+/i;

	$('a').each(function() {
			      
    // Match on all of google's modified links
    var match = gooRegEx.exec(this.href);

    // If we found a modified link, change it back.
    if(match) {
    	$(this).attr('href', match[1]);
    }

    // Add _blank to all links, as we want them to open in a new window.
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
    }
  });
}

function indentationClass() {
	$('h3').each(function() {
    	$(this).removeClass();
    	$(this).addClass('indent')
  	});
}

function getPage (link) {
    $.get(link, function(data) {
            
          var tmpPage = $(data);
          
          // Remove meta && style from load of google docs
          tmpPage.splice(0, 2);
          
          // Add to page
          $("#body").append(tmpPage);

          indentationClass();
          googleLinks();
    });
}