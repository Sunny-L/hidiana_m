export const URL = 'http://hidiana.cn/'

export const checkLocalUser = (params) => {
  let user = sessionStorage.getItem('sgUser')
  if (user) {
    user = JSON.parse(user)
    if (user && user.roles === 'vip') return true
  }
  return false
};

export const saveLocalUser = (user) => {
  if (user) {
    sessionStorage.setItem('sgUser', JSON.stringify(user))
  }
};

export const clearLocalUser = () => {
  sessionStorage.setItem('sgUser', null)
};

export const getLocalUser = () => {
  let user = sessionStorage.getItem('sgUser')
  if (user) {
    return JSON.parse(user)
  }
  return false
};


export const websocket = {
//var websocketUtils = {
  connect:function(url,parent){
    console.log("Connected url=="+url);
    var websocket = new WebSocket(url);
    websocket.onopen = function (event) { onOpen(event) };
    websocket.onclose = function (event) { onClose(event) };
    websocket.onmessage = function (event) { onMessage(event) };
    websocket.onerror = function (event) { onError(event) };
    function onOpen(event) {
      console.log("Connected to WebSocket server.");
    }
    function onClose(event) {
      parent.$store.commit('setWebsocket','websocket连接失败')
      console.log("Disconnected");
    }
    function onMessage(event) {
      //console.log('Retrieved data from server: ' + eval(event.data));
      // parent.setMsgData(event);
      parent.render(JSON.parse(event.data))
    }
    function onError(event) {
      console.log('Error occured: ' + event.data);
    }
  },

  disconnect:function(){
    if(sessionStorage.getItem('sgUser')){
      let sgUser = JSON.parse(sessionStorage.getItem('sgUser'));
      if(sgUser){
        var userId = sgUser.id;
        $.get(constant.root_url+'/admin/disconnect',{"userId":userId},function(data){}.bind(this))
      }
      console.log("disconnect to WebSocket server.");
    }
  },
  websocket_url : 'ws://hidiana.cn//ws/'
//}
}
