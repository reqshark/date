
// avoid having to use the new keyword
Date.y = f => t.call(new Date(), f)

// this madness .. eh
function t(f) {
  var f = f || 'MM/dd/yyyy@h:mm:ss.S', o = {'M+':this.getMonth()+1, 'd+':this.getDate(),
    'h+':this.getHours(), 'm+':this.getMinutes(),'s+':this.getSeconds(),'S':this.getMilliseconds()}
  if(/(y+)/.test(f))f=f.replace(RegExp.$1,(this.getFullYear()+'').substr(4 - RegExp.$1.length))
  for(var k in o)if(new RegExp('('+ k +')').test(f))
    f = f.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ('00'+o[k]).substr((''+o[k]).length))
  return f
}
