$(document).ready(function(){$('nav#actions.multilist > ul:not(.search_list) li a[href$="'+window.location.pathname+'"]').not(".not_a_link a").parent().addClass("selected"),0===$("nav#actions.multilist > ul:not(.search_list) li.selected").length&&$("nav#actions.multilist > ul:not(.search_list) li a:nth(1)").parent().addClass("selected"),$("nav#actions.multilist > ul:not(.search_list) li > a").not(".not_a_link a").not("a.reorder_icon").each(function(){null==$(this).data("dialog-title")&&$(this).bind("click",function(){$(this).css("background-image","url('/assets/refinery/ajax-loader-34345db401c8e016f63cba30730b218b.gif') !important")})}),$("ul.collapsible_menu").each(function(){(first_li=$(this).children("li:first")).after(div=$("<div></div>")),$("<span class='arrow'>&nbsp;</span>").appendTo(first_li),0===$(this).children("li.selected").length&&(div.hide(),first_li.addClass("closed")),$(this).children("li:not(:first)").appendTo(div),first_li.find("> a, > span.arrow").click(function(i){$(this).parent().toggleClass("closed"),$(this).parent().toggleClass("open"),$(this).parent().next("div").animate({opacity:"toggle",height:"toggle"},250,$.proxy(function(){$(this).css("background-image",null)},$(this))),i.preventDefault()})}),$(".success_icon, .failure_icon").bind("click",function(i){$.get($(this).attr("href"),$.proxy(function(i){$(this).css("background-image","").removeClass("failure_icon").removeClass("success_icon").addClass(i.enabled?"success_icon":"failure_icon")},$(this))),i.preventDefault()})});