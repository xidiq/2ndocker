WYMeditor.editor.prototype.fullscreen=function(){var wym=this,$box=jQuery(wym._box),$iframe=jQuery(wym._iframe),$overlay=null,$window=jQuery(window),editorMargin=15;var html=''+"<li class='wym_tools_fullscreen'>"+"<a name='Fullscreen' href='#' "+"title='Fullscreen' "+"style='background-image: url("+wym._options.basePath+"plugins/fullscreen/icon_fullscreen.gif)'>"+"Fullscreen"+"</a>"+"</li>";$box.find(wym._options.toolsSelector+wym._options.toolsListSelector).append(html);function resize(){var uiHeight=$box.outerHeight(true)-$iframe.outerHeight(true);var editorPadding=$box.outerWidth()-$box.width();var screenHeight=$window.height();var iframeHeight=(screenHeight-uiHeight-(editorMargin*2))+'px';var screenWidth=$window.width();var boxWidth=(screenWidth-editorPadding-(editorMargin*2))+'px';$box.css('width',boxWidth);$iframe.css('height',iframeHeight);$overlay.css({'height':screenHeight+'px','width':screenWidth+'px'})}$box.find('li.wym_tools_fullscreen a').click(function(){if($box.css('position')!='fixed'){$box.data('wym-inline-css',$box.attr('style'));$iframe.data('wym-inline-css',$iframe.attr('style'));$overlay=jQuery('<div id="wym-fullscreen-overlay"></div>').appendTo('body').css({'position':'fixed','background-color':'rgb(0, 0, 0)','opacity':'0.75','z-index':'98','top':'0px','left':'0px'});$box.css({'position':'fixed','z-index':'99','top':editorMargin+'px','left':editorMargin+'px'});$window.bind('resize',resize);$box.find('li.wym_tools_html a').bind('click',resize);resize()}else{$window.unbind('resize',resize);$box.find('li.wym_tools_html a').unbind('click',resize);$box.css({'position':'static','z-index':'','width':'','top':'','left':''});$iframe.css('height','');$overlay.remove();$overlay=null;$box.attr('style',$box.data('wym-inline-css'));$iframe.attr('style',$iframe.data('wym-inline-css'))}return false})};