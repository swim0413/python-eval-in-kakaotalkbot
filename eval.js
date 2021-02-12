var admin = ["관리자 해시코그"]; //관리자 해시코드 여러명 가능
var cmd = "S"; //봇 명령어앞 길이 상관없음
var cmdl = cmd.length; //명령어 앞 길이
var wide = "\u200b".repeat(1000); //전체보기
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  var hash = new java.lang.String(imageDB.getProfileImage()).hashCode();
  if(msg == "Shash"){
    replier.reply(hash);
  }
  if(msg.startsWith(cmd+"py ")){
    var swim = msg.substr(cmdl+3);
    if(admin.includes(String(hash))){
      try{
        var result = org.jsoup.Jsoup.connect("http://127.0.0.1:5000/eval/"+swim).get().wholeText();
        replier.reply(result);
        }catch(e){
          replier.reply("error!\n"+wide+e);
        }
    }else{
      replier.reply(sender+"!=관리자");
    }
  }
}
