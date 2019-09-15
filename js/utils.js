// build time:Sun Sep 15 2019 15:30:32 GMT+0800 (CST)
NexT.utils={wrapImageWithFancyBox:function(){$(".content img").not("#qr img").each(function(){var t=$(this);var e=t.attr("title")||t.attr("alt");var i=t.parent("a");if(i.length<1){var a=t.attr("data-src")||t.attr("src");i=t.wrap('<a class="fancybox fancybox.image" href="'+a+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(t.is(".post-gallery img")){i.addClass("post-gallery-img");i.attr("data-fancybox","gallery").attr("rel","gallery")}else if(t.is(".group-picture img")){i.attr("data-fancybox","group").attr("rel","group")}else{i.attr("data-fancybox","default").attr("rel","default")}}if(e){i.append('<p class="image-caption">'+e+"</p>");i.attr("title",e).attr("data-caption",e)}});$(".fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},registerCopyCode:function(){$(".highlight").not(".gist .highlight").each(function(t,e){function i(t){if(CONFIG.copycode.style==="mac"){t.html('<i class="fa fa-clipboard"></i>')}else{t.text(CONFIG.translation.copy_button)}}var a=$("<div>").addClass("copy-btn");a.on("click",function(){var t=$(this).parent().find(".code").find(".line").map(function(t,e){return $(e).text()}).toArray().join("\n");var e=document.createElement("textarea");var i=window.pageYOffset||document.documentElement.scrollTop;e.style.top=i+"px";e.style.position="absolute";e.style.opacity="0";e.readOnly=true;e.value=t;document.body.appendChild(e);const a=document.getSelection();const n=a.rangeCount>0?a.getRangeAt(0):false;e.select();e.setSelectionRange(0,t.length);e.readOnly=false;var o=document.execCommand("copy");if(CONFIG.copycode.show_result){$(this).text(o?CONFIG.translation.copy_success:CONFIG.translation.copy_failure)}e.blur();$(this).blur();if(n){a.removeAllRanges();a.addRange(n)}document.body.removeChild(e)});a.on("mouseleave",function(){var t=$(this).closest(".copy-btn");setTimeout(function(){i(t)},300)});i(a);$(e).wrap($("<div>").addClass("highlight-wrap")).after(a)})},registerTabsTag:function(){var t=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""&&!e.match(/%\S{2}/)){$(t+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(t+".tab").on("click",function(t){t.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(t){var e=t.which===27&&$(".search-popup").is(":visible");if(e){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var t=50;var e=$(".back-to-top");function i(){e.toggleClass("back-to-top-on",window.pageYOffset>t);var i=$(window).scrollTop();var a=NexT.utils.getContentVisibilityHeight();var n=i/a;var o=Math.round(n*100);var r=o>100?100:o;$("#scrollpercent>span").html(r)}$(window).on("load",function(){i()});$(window).on("scroll",function(){i()});e.on("click",function(){$("html, body").animate({scrollTop:0})})},embeddedVideoTransformer:function(){var t=$("iframe");var e=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var i=new RegExp(e.join("|"));function a(t){return{width:t.width(),height:t.height()}}function n(t,e){return e/t*100}t.each(function(){var t=this;var e=$(this);var o=a(e);var r;if(this.src.search(i)>0){var s=n(o.width,o.height);e.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=s+"%";c.style.paddingTop===""&&(c.style.paddingTop="50%");var l=t.parentNode;l.insertBefore(c,t);c.appendChild(t);if(this.src.search("music.163.com")>0){r=a(e);var d=r.width>o.width||r.height<o.height;if(d){c.style.paddingTop=n(r.width,o.height)+"%"}}}})},hasMobileUA:function(){var t=window.navigator;var e=t.userAgent;var i=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return i.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(t){return t.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMuse:function(){return CONFIG.scheme==="Muse"},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var t=$("<div />").addClass("scrollbar-measure").prependTo("body");var e=t[0];var i=e.offsetWidth-e.clientWidth;t.remove();return i},getContentVisibilityHeight:function(){var t=$(".container").height();var e=$(window).height();var i=t>e?t-e:$(document).height()-e;return i},getSidebarb2tHeight:function(){var t=CONFIG.back2top.enable&&CONFIG.back2top.sidebar?$(".back-to-top").height():0;return t},getSidebarSchemePadding:function(){var t=$(".sidebar-nav").css("display")==="block"?$(".sidebar-nav").outerHeight(true):0;var e=$(".sidebar-inner");var i=e.innerWidth()-e.width();var a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;var n=this.isPisces()||this.isGemini()?i*2+t+a+this.getSidebarb2tHeight():i*2+t/2;return n}};
//rebuild by neat 