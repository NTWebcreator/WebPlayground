var wsServer = new WebSocket("ws://127.0.0.1:8000");//この部分は一般公開でき次第URLを変更。
document.getElementById("sendbutton").addEventListener("click",
async (e)=>{
    var sendText = document.getElementById("textarea").value;
    wsServer.send(sendText);
});
wsServer.addEventListener("message",
async (e)=>{
    console.log(e.data);
});