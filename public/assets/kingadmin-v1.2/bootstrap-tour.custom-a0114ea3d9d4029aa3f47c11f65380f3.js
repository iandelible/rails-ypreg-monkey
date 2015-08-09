!function(t,e){var o,n;return n=e.document,o=function(){function o(o){this._options=t.extend({name:"tour",steps:[],container:"body",keyboard:!0,storage:e.localStorage,debug:!1,backdrop:!1,redirect:!0,orphan:!1,duration:!1,basePath:"",template:"<div class='popover'> <div class='arrow'></div> <h3 class='popover-title'></h3> <div class='popover-content'></div> <div class='popover-navigation'> <div class='btn-group'> <button class='btn btn-sm btn-default' data-role='prev'>&laquo; Prev</button> <button class='btn btn-sm btn-default' data-role='next'>Next &raquo;</button> <button class='btn btn-sm btn-default' data-role='pause-resume' data-pause-text='Pause' data-resume-text='Resume'>Pause</button> </div> <button class='btn btn-sm btn-default' data-role='end'>End tour</button> </div> </div>",afterSetState:function(){},afterGetState:function(){},afterRemoveState:function(){},onStart:function(){},onEnd:function(){},onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNext:function(){},onPrev:function(){},onPause:function(){},onResume:function(){}},o),this._force=!1,this._inited=!1,this.backdrop={overlay:null,$element:null,$background:null,backgroundShown:!1,overlayElementShown:!1}}return o.prototype.addSteps=function(t){var e,o,n;for(o=0,n=t.length;n>o;o++)e=t[o],this.addStep(e);return this},o.prototype.addStep=function(t){return this._options.steps.push(t),this},o.prototype.getStep=function(e){return null!=this._options.steps[e]?t.extend({id:"step-"+e,path:"",placement:"right",title:"",content:"<p></p>",next:e===this._options.steps.length-1?-1:e+1,prev:e-1,animation:!0,container:this._options.container,backdrop:this._options.backdrop,redirect:this._options.redirect,orphan:this._options.orphan,duration:this._options.duration,template:this._options.template,onShow:this._options.onShow,onShown:this._options.onShown,onHide:this._options.onHide,onHidden:this._options.onHidden,onNext:this._options.onNext,onPrev:this._options.onPrev,onPause:this._options.onPause,onResume:this._options.onResume},this._options.steps[e]):void 0},o.prototype.init=function(t){return this._force=t,this.ended()?(this._debug("Tour ended, init prevented."),this):(this.setCurrentStep(),this._initMouseNavigation(),this._initKeyboardNavigation(),this._onResize(function(t){return function(){return t.showStep(t._current)}}(this)),null!==this._current&&this.showStep(this._current),this._inited=!0,this)},o.prototype.start=function(t){var e;return null==t&&(t=!1),this._inited||this.init(t),null===this._current&&(e=this._makePromise(null!=this._options.onStart?this._options.onStart(this):void 0),this._callOnPromiseDone(e,this.showStep,0)),this},o.prototype.next=function(){var t;return t=this.hideStep(this._current),this._callOnPromiseDone(t,this._showNextStep)},o.prototype.prev=function(){var t;return t=this.hideStep(this._current),this._callOnPromiseDone(t,this._showPrevStep)},o.prototype.goTo=function(t){var e;return e=this.hideStep(this._current),this._callOnPromiseDone(e,this.showStep,t)},o.prototype.end=function(){var o,i;return o=function(o){return function(){return t(n).off("click.tour-"+o._options.name),t(n).off("keyup.tour-"+o._options.name),t(e).off("resize.tour-"+o._options.name),o._setState("end","yes"),o._inited=!1,o._force=!1,o._clearTimer(),null!=o._options.onEnd?o._options.onEnd(o):void 0}}(this),i=this.hideStep(this._current),this._callOnPromiseDone(i,o)},o.prototype.ended=function(){return!this._force&&!!this._getState("end")},o.prototype.restart=function(){return this._removeState("current_step"),this._removeState("end"),this.setCurrentStep(0),this.start()},o.prototype.pause=function(){var t;return t=this.getStep(this._current),t&&t.duration?(this._paused=!0,this._duration-=(new Date).getTime()-this._start,e.clearTimeout(this._timer),this._debug("Paused/Stopped step "+(this._current+1)+" timer ("+this._duration+" remaining)."),null!=t.onPause?t.onPause(this,this._duration):void 0):this},o.prototype.resume=function(){var t;return t=this.getStep(this._current),t&&t.duration?(this._paused=!1,this._start=(new Date).getTime(),this._duration=this._duration||t.duration,this._timer=e.setTimeout(function(t){return function(){return t._isLast()?t.next():t.end()}}(this),this._duration),this._debug("Started step "+(this._current+1)+" timer with duration "+this._duration),null!=t.onResume&&this._duration!==t.duration?t.onResume(this,this._duration):void 0):this},o.prototype.hideStep=function(e){var o,n,i;return(i=this.getStep(e))?(this._clearTimer(),n=this._makePromise(null!=i.onHide?i.onHide(this,e):void 0),o=function(o){return function(){var n;return n=t(i.element),n.data("bs.popover")||n.data("popover")||(n=t("body")),n.popover("destroy").removeClass("tour-"+o._options.name+"-element tour-"+o._options.name+"-"+e+"-element"),i.reflex&&n.css("cursor","").off("click.tour-"+o._options.name),i.backdrop&&o._hideBackdrop(),null!=i.onHidden?i.onHidden(o):void 0}}(this),this._callOnPromiseDone(n,o),n):void 0},o.prototype.showStep=function(t){var e,o,i,r;return this.ended()?(this._debug("Tour ended, showStep prevented."),this):(r=this.getStep(t))?(i=t<this._current,e=this._makePromise(null!=r.onShow?r.onShow(this,t):void 0),o=function(e){return function(){var o,s;if(e.setCurrentStep(t),s=function(){switch({}.toString.call(r.path)){case"[object Function]":return r.path();case"[object String]":return this._options.basePath+r.path;default:return r.path}}.call(e),o=[n.location.pathname,n.location.hash].join(""),e._isRedirect(s,o))return void e._redirect(r,s);if(e._isOrphan(r)){if(!r.orphan)return e._debug("Skip the orphan step "+(e._current+1)+". Orphan option is false and the element doesn't exist or is hidden."),void(i?e._showPrevStep():e._showNextStep());e._debug("Show the orphan step "+(e._current+1)+". Orphans option is true.")}return r.backdrop&&e._showBackdrop(e._isOrphan(r)?void 0:r.element),e._scrollIntoView(r.element,function(){return null!=r.element&&r.backdrop&&e._showOverlayElement(r.element),e._showPopover(r,t),null!=r.onShown&&r.onShown(e),e._debug("Step "+(e._current+1)+" of "+e._options.steps.length)}),r.duration?e.resume():void 0}}(this),this._callOnPromiseDone(e,o),e):void 0},o.prototype.getCurrentStep=function(){return this._current},o.prototype.setCurrentStep=function(t){return null!=t?(this._current=t,this._setState("current_step",t)):(this._current=this._getState("current_step"),this._current=null===this._current?null:parseInt(this._current,10)),this},o.prototype._setState=function(t,e){var o,n;if(this._options.storage){n=""+this._options.name+"_"+t;try{this._options.storage.setItem(n,e)}catch(i){o=i,o.code===DOMException.QUOTA_EXCEEDED_ERR&&this.debug("LocalStorage quota exceeded. State storage failed.")}return this._options.afterSetState(n,e)}return null==this._state&&(this._state={}),this._state[t]=e},o.prototype._removeState=function(t){var e;return this._options.storage?(e=""+this._options.name+"_"+t,this._options.storage.removeItem(e),this._options.afterRemoveState(e)):null!=this._state?delete this._state[t]:void 0},o.prototype._getState=function(t){var e,o;return this._options.storage?(e=""+this._options.name+"_"+t,o=this._options.storage.getItem(e)):null!=this._state&&(o=this._state[t]),(void 0===o||"null"===o)&&(o=null),this._options.afterGetState(t,o),o},o.prototype._showNextStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(){return t.showStep(o.next)}}(this),t=this._makePromise(null!=o.onNext?o.onNext(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._showPrevStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(){return t.showStep(o.prev)}}(this),t=this._makePromise(null!=o.onPrev?o.onPrev(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._debug=function(t){return this._options.debug?e.console.log("Bootstrap Tour '"+this._options.name+"' | "+t):void 0},o.prototype._isRedirect=function(t,e){return null!=t&&""!==t&&("[object RegExp]"===Object.prototype.toString.call(t)&&!t.test(e)||"[object String]"===Object.prototype.toString.call(t)&&t.replace(/\?.*$/,"").replace(/\/?$/,"")!==e.replace(/\/?$/,""))},o.prototype._redirect=function(e,o){return t.isFunction(e.redirect)?e.redirect.call(this,o):e.redirect===!0?(this._debug("Redirect to "+o),n.location.href=o):void 0},o.prototype._isOrphan=function(e){return null==e.element||!t(e.element).length||t(e.element).is(":hidden")&&"http://www.w3.org/2000/svg"!==t(e.element)[0].namespaceURI},o.prototype._isLast=function(){return this._current<this._options.steps.length-1},o.prototype._showPopover=function(e,o){var n,i,r,s,a,u;return u=t.extend({},this._options),r=t(t.isFunction(e.template)?e.template(o,e):e.template),i=r.find(".popover-navigation"),a=this._isOrphan(e),a&&(e.element="body",e.placement="top",r=r.addClass("orphan")),n=t(e.element),r.addClass("tour-"+this._options.name+" tour-"+this._options.name+"-"+o),n.addClass("tour-"+this._options.name+"-element tour-"+this._options.name+"-"+o+"-element"),e.options&&t.extend(u,e.options),e.reflex&&n.css("cursor","pointer").on("click.tour-"+this._options.name,function(t){return function(){return t._isLast()?t.next():t.end()}}(this)),e.prev<0&&i.find("[data-role='prev']").addClass("disabled"),e.next<0&&i.find("[data-role='next']").addClass("disabled"),e.duration||i.find("[data-role='pause-resume']").remove(),e.template=r.clone().wrap("<div>").parent().html(),n.popover({placement:e.placement,trigger:"manual",title:e.title,content:e.content,html:!0,animation:e.animation,container:e.container,template:e.template,selector:e.element}).popover("show"),s=n.data("bs.popover")?n.data("bs.popover").tip():n.data("popover").tip(),s.attr("id",e.id),this._reposition(s,e),a?this._center(s):void 0},o.prototype._reposition=function(e,o){var i,r,s,a,u,p,h;if(a=e[0].offsetWidth,r=e[0].offsetHeight,h=e.offset(),u=h.left,p=h.top,i=t(n).outerHeight()-h.top-e.outerHeight(),0>i&&(h.top=h.top+i),s=t("html").outerWidth()-h.left-e.outerWidth(),0>s&&(h.left=h.left+s),h.top<0&&(h.top=0),h.left<0&&(h.left=0),e.offset(h),"bottom"===o.placement||"top"===o.placement){if(u!==h.left)return this._replaceArrow(e,2*(h.left-u),a,"left")}else if(p!==h.top)return this._replaceArrow(e,2*(h.top-p),r,"top")},o.prototype._center=function(o){return o.css("top",t(e).outerHeight()/2-o.outerHeight()/2)},o.prototype._replaceArrow=function(t,e,o,n){return t.find(".arrow").css(n,e?50*(1-e/o)+"%":"")},o.prototype._scrollIntoView=function(o,n){var i,r,s,a,u,p;return i=t(o),i.length?(r=t(e),a=i.offset().top,p=r.height(),u=Math.max(0,a-p/2),this._debug("Scroll into view. ScrollTop: "+u+". Element offset: "+a+". Window height: "+p+"."),s=0,t("body,html").stop(!0,!0).animate({scrollTop:Math.ceil(u)},function(t){return function(){return 2===++s?(n(),t._debug("Scroll into view. Animation end element offset: "+i.offset().top+". Window height: "+r.height()+".")):void 0}}(this))):n()},o.prototype._onResize=function(o,n){return t(e).on("resize.tour-"+this._options.name,function(){return clearTimeout(n),n=setTimeout(o,100)})},o.prototype._initMouseNavigation=function(){var e;return e=this,t(n).off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']:not(.disabled)").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']:not(.disabled)").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']").on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']:not(.disabled)",function(t){return function(e){return e.preventDefault(),t.next()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']:not(.disabled)",function(t){return function(e){return e.preventDefault(),t.prev()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']",function(t){return function(e){return e.preventDefault(),t.end()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']",function(o){var n;return o.preventDefault(),n=t(this),n.text(n.data(e._paused?"pause-text":"resume-text")),e._paused?e.resume():e.pause()})},o.prototype._initKeyboardNavigation=function(){return this._options.keyboard?t(n).on("keyup.tour-"+this._options.name,function(t){return function(e){if(e.which)switch(e.which){case 39:return e.preventDefault(),t._isLast()?t.next():t.end();case 37:if(e.preventDefault(),t._current>0)return t.prev();break;case 27:return e.preventDefault(),t.end()}}}(this)):void 0},o.prototype._makePromise=function(e){return e&&t.isFunction(e.then)?e:null},o.prototype._callOnPromiseDone=function(t,e,o){return t?t.then(function(t){return function(){return e.call(t,o)}}(this)):e.call(this,o)},o.prototype._showBackdrop=function(){return this.backdrop.backgroundShown?void 0:(this.backdrop=t("<div/>",{"class":"tour-backdrop"}),this.backdrop.backgroundShown=!0,t("body").append(this.backdrop))},o.prototype._hideBackdrop=function(){return this._hideOverlayElement(),this._hideBackground()},o.prototype._hideBackground=function(){return this.backdrop.remove(),this.backdrop.overlay=null,this.backdrop.backgroundShown=!1},o.prototype._showOverlayElement=function(e){var o,n,i;return n=t(e),n&&0!==n.length&&!this.backdrop.overlayElementShown?(this.backdrop.overlayElementShown=!0,o=t("<div/>"),i=n.offset(),i.top=i.top,i.left=i.left,o.width(n.innerWidth()).height(n.innerHeight()).addClass("tour-step-background").offset(i),n.addClass("tour-step-backdrop"),t("body").append(o),this.backdrop.$element=n,this.backdrop.$background=o):void 0},o.prototype._hideOverlayElement=function(){return this.backdrop.overlayElementShown?(this.backdrop.$element.removeClass("tour-step-backdrop"),this.backdrop.$background.remove(),this.backdrop.$element=null,this.backdrop.$background=null,this.backdrop.overlayElementShown=!1):void 0},o.prototype._clearTimer=function(){return e.clearTimeout(this._timer),this._timer=null,this._duration=null},o}(),e.Tour=o}(jQuery,window);