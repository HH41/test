function Add(){
    var lin=document.getElementById("add").value;
    if(lin=='')
    alert("内容不能为空！");
    else{
        var sp_item=document.createElement("span");
        var li=document.createElement("li");
        var td_item=document.getElementById("todolist");
        sp_item.innerHTML=lin;
        li.appendChild(sp_item);
		var button=document.createElement("button");
		button.className="edit_button";
        button.innerText = "删除";
        button.onclick=function(){ 
            del_single(button);
        };
        var edit=document.createElement("button");
        edit.appendChild(document.createTextNode("修改"));
		edit.className="edit_button";
        edit.onclick=function(){
            revise(edit);
        }

li.appendChild(button);
li.appendChild(edit);
        td_item.appendChild(li);
        document.getElementById("add").value='';
    }
}
function del_single(a){
    a.parentNode.remove();
}
function revise(edit){
    var li_item=document.createElement("li");
    var ip_item=document.createElement("input");
    ip_item.type="text";
	ip_item.className="item_box";
    ip_item.value=edit.parentNode.children[0].innerHTML;
    li_item.appendChild(ip_item);
    var sub=document.createElement("button");
    sub.appendChild(document.createTextNode("完成"));
    sub.className="edit_button";
    sub.onclick=function(){
        var record=document.createElement("li");
        var content=ip_item;
        var rec=document.createElement("span");
        if(content.value=='')
        alert("修改内容不能为空！");
        else{
            rec.innerHTML=content.value;
            record.appendChild(rec);
            var button=document.createElement("button");
            button.appendChild(document.createTextNode("删除"));
			button.className="edit_button";
            button.onclick=function(){ 
                del_single(button);
            };
            record.appendChild(button);
            var edit=document.createElement("button");
            edit.appendChild(document.createTextNode("修改"));
			edit.className="edit_button";
            edit.onclick=function(){
                revise(edit);
            };
            record.appendChild(edit);
            sub.parentNode.parentNode.replaceChild(record,sub.parentNode);
        }
    };
    li_item.appendChild(sub);
   edit.parentNode.parentNode.replaceChild(li_item,edit.parentNode);
}