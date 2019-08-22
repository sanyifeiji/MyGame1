var ii=0;
var iii=0;
var clist=[ ["#FFB6C1","#FFC0CB","#DC143C","#FFF0F5"],
["#DB7093","#FF69B4","#FF1493","#C71585"],
["#DA70D6","#D8BFD8","#DDA0DD","#EE82EE"],
["#FF00FF","#FF00FF","#8B008B","#800080"],
["#BA55D3","#9400D3","#9932CC","#4B0082"],
["#8A2BE2","#9370DB","#7B68EE","#6A5ACD"],
["#483D8B","#E6E6FA","#F8F8FF","#0000FF"],
["#0000CD","#191970","#00008B","#000080"],
["#4169E1","#6495ED","#B0C4DE","#778899"],
["#708090","#1E90FF","#F0F8FF","#4682B4"],
["#87CEFA","#87CEEB","#00BFFF","#ADD8E6"],
["#B0E0E6","#5F9EA0","#F0FFFF","#E1FFFF"],
["#AFEEEE","#00FFFF","#00FFFF","#00CED1"],
["#2F4F4F","#008B8B","#008080","#48D1CC"],
["#20B2AA","#40E0D0","#7FFFAA","#00FA9A"],
["#F5FFFA","#00FF7F","#3CB371","#2E8B57"],
["#F0FFF0","#90EE90","#98FB98","#8FBC8F"],
["#32CD32","#00FF00","#228B22","#008000"],
["#006400","#7FFF00","#7CFC00","#ADFF2F"],
["#556B2F","#6B8E23","#FAFAD2","#FFFFF0"],
["#FFFFE0","#FFFF00","#808000","#BDB76B"],
["#FFFACD","#EEE8AA","#F0E68C","#FFD700"],
["#FFF8DC","#DAA520","#FFFAF0","#FDF5E6"],
["#F5DEB3","#FFE4B5","#FFA500","#FFEFD5"],
["#FFEBCD","#FFDEAD","#FAEBD7","#D2B48C"],
["#DEB887","#FFE4C4","#FF8C00","#FAF0E6"],
["#CD853F","#FFDAB9","#F4A460","#D2691E"],
["#8B4513","#FFF5EE","#A0522D","#FFA07A"],
["#FF7F50","#FF4500","#E9967A","#FF6347"],
["#FFE4E1","#FA8072","#FFFAFA","#F08080"],
["#BC8F8F","#CD5C5C","#FF0000","#A52A2A"],
["#B22222","#8B0000","#800000","#FFFFFF"],
["#F5F5F5","#DCDCDC","#D3D3D3","#C0C0C0"],
["#A9A9A9","#808080","#696969","#000000"]
           ];
var nlist=[["浅粉色","粉红","猩红","脸红的淡紫色"],
["苍白的紫罗兰红色","热情的粉红","深粉色","适中的紫罗兰红色"],
["兰花的紫色","蓟","李子","紫罗兰"],
["洋红","灯笼海棠(紫红色)","深洋红色","紫色"],
["适中的兰花紫","深紫罗兰色","深兰花紫","靛青"],
["深紫罗兰的蓝色","适中的紫色","适中的板岩暗蓝灰色","板岩暗蓝灰色"],
["深岩暗蓝灰色","薰衣草花的淡紫色","幽灵的白色","纯蓝"],
["适中的蓝色","午夜的蓝色","深蓝色","海军蓝"],
["宝蓝","矢车菊的蓝色","淡钢蓝","浅石板灰"],
["石板灰","道奇蓝","爱丽丝蓝","钢蓝"],
["淡蓝色","天蓝色","深天蓝","淡蓝"],
["火药蓝","军校蓝","蔚蓝色","淡青色"],
["苍白的绿宝石","青色","水绿色","深绿宝石"],
["深石板灰","深青色","水鸭色","适中的绿宝石"],
["浅海洋绿","绿宝石","绿玉","适中的碧绿色"],
["适中的春天的绿色","薄荷奶油","春天的绿色","海洋绿"],
["蜂蜜","淡绿色","苍白的绿色","深海洋绿"],
["酸橙绿","酸橙色","森林绿","纯绿"],
["深绿色","查特酒绿","草坪绿","绿黄色"],
["橄榄土褐色","米色(浅褐色)","浅秋麒麟黄","象牙色"],
["浅黄色","纯黄","橄榄","深卡其布"],
["柠檬薄纱","灰秋麒麟","卡其布","金"],
["玉米色","秋麒麟","花的白色","老饰带"],
["小麦色","鹿皮鞋","橙色","番木瓜"],
["漂白的杏仁","Navajo白","古代的白色","晒黑"],
["结实的树","(浓汤)乳脂，番茄等","深橙色","亚麻布"],["秘鲁","桃色","沙棕色","巧克力"],
["马鞍棕色","海贝壳","黄土赭色","浅鲜肉(鲑鱼)色"],
["珊瑚","橙红色","深鲜肉(鲑鱼)色","番茄"],
["薄雾玫瑰","鲜肉(鲑鱼)色","雪","淡珊瑚色"],
["玫瑰棕色","印度红","纯红","棕色"],
["耐火砖","深红色","栗色","纯白"],
["白烟","Gainsboro","浅灰色","银白色"],
["深灰色","灰色","暗淡的灰色","纯黑"]
            ];
 var bt=document.getElementById("div1");
 var bt6=document.getElementById("div6");
  var bt7=document.getElementById("div7");
  var bt8=document.getElementById("div8");
var sp0=document.getElementById("span0");
var sp1=document.getElementById("span1");
var sp2=document.getElementById("span2");
var sp3=document.getElementById("span3");
var bt1=document.getElementById("btn1");


var r0=document.getElementById("ra0");
var r1=document.getElementById("ra1");
var r2=document.getElementById("ra2");
var r3=document.getElementById("ra3");


var ans=-1;
var score=0;
var arr = [0, 1, 2, 3];
  function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}


    function findradio()
    {

    	var obj = document.getElementsByTagName("input");

    for(var i=0; i<4; i ++){
    	
        if(obj[i].checked){

            return i;
        }
    }
    return -1;
    }

  function findans(n)
  {
      for (var i=0;i<4;i++)
      {
      	if (arr[i]==n)
      		return i;
      }
      return -1;
  }
window.onload=function(){
             ii=Math.floor(Math.random()*4);
             bt.style.backgroundColor=clist[iii][ii];
             bt6.innerHTML ="这是第"+(iii+1)+"题";
             bt7.innerHTML ="得分"+score;
             arr.sort(randomsort);
             //ans=find(ii);
             sp0.innerHTML=nlist[iii][arr[0]];
             sp1.innerHTML=nlist[iii][arr[1]];
             sp2.innerHTML=nlist[iii][arr[2]];
             sp3.innerHTML=nlist[iii][arr[3]];
             
             //alert(arr);








        btn1.onclick=function(){




        	if (arr[findradio()]==ii)
        	{score+=5;
        	
            }
             bt8.innerHTML ="结果：";

            iii++;
            if (iii>=clist.length)
            	{iii=0;
            		alert("最终得分为："+score);
            		score=0;
                                 location.reload();
            	}
            bt.style.backgroundColor=clist[iii][ii];
            bt6.innerHTML ="这是第"+(iii+1)+"题";
            bt7.innerHTML ="得分"+score;
             arr.sort(randomsort);
             ii=Math.floor(Math.random()*4);
            sp0.innerHTML=nlist[iii][arr[0]];
             sp1.innerHTML=nlist[iii][arr[1]];
             sp2.innerHTML=nlist[iii][arr[2]];
             sp3.innerHTML=nlist[iii][arr[3]];
            

            btn11.disabled=false;
             r0.disabled=false;
              r1.disabled=false;
               r2.disabled=false;
                r3.disabled=false;


             
         }



         btn11.onclick=function(){

        	if (arr[findradio()]==ii)
        	{
        	bt8.innerHTML ="结果：正确";
            }
            else{
            	bt8.innerHTML ="结果: 错误，正确答案为："+nlist[iii][ii];
            }

            btn11.disabled=true;
             r0.disabled=true;
              r1.disabled=true;
               r2.disabled=true;
                r3.disabled=true;
            




             
         }
     }
