//respon = respon dari text discord
//andaikata #nrp 5023841238
//by yoel sitorus

function res(respon){
	let cmd,args = [];
	if(respon[0]=="#"){
		respon = respon.substr(1);
		let x = respon.split(" ");
		cmd = x[0];
		for(let i =1;i<x.length;i++){
			args.push(x[i]);
		}
	}
return {"cmd":cmd,"args":args};
}

async function minta_fetch(link){ 
  let x = await fetch(link);
  let y = await x.text();
  let data = JSON.parse(y);
  return data;
}

//contoh doang nih variable respon
let respon = "#nrp 5025211078";
let resp = res(respon);
switch(resp.cmd){
	case "nrp":
		var link = "http://informatika.zymerweb.rf.gd/api.php?nrp="+resp.args[0];
		let data = minta_fetch(link);
		console.log(data.nama,data.nick,data.gender);
}