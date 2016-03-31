/*建構式:專門用來建構物件的函式*/
function Player(name,hp){//建構式習慣用名詞當函數名稱
	//建構式裡的this代表系統自動幫你建立的新物件
	this.name=name;
	this.hp=hp;
	this.fight=function(mon/*mon必須是Monster物件*/){
		this.hp=this.hp-monster.attack;
		alert("Fight against "+monster.name);
	};
	this.rest=function(){
		this.hp++;
	};
	this.report=function(){
		alert(this.name+":"+this.hp);
	};
	//不需要特別寫return
}
function Monster(name,attack){
	this.name=name;
	this.attack=attack;
}




/* 傳統建構物件觀念
function createPlayerObject(name,hp){
	var player=new Object();
	player.name=name;
	player.hp=hp;
	player.fight=function(level){
		this.hp=this.hp-level;
	};
	player.rest=function(){
		this.hp++;
	};
	player.report=function(){
		alert(this.name+":"+this.hp);
	};
	return player;
}
*/

