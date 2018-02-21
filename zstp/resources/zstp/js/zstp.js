// 添加文件夹或文件
function addNode() {
	var zTree = $.fn.zTree.getZTreeObj("tree");
	var selectNode = zTree.getSelectedNodes();
	if (selectNode.length != 1) {
		layui.use('layer',function(){
			layui.layer.alert("请选中一个文件夹！",{icon:0,title:"提示信息"});
		});
	} else {
		// 弹出起草页面
		var nodeId = selectNode[0].id;
		layui.use('layer',function(){
			var index = layui.layer.open({
				type: 2,
				title:"新建文件夹",
				area:['900px','300px'],
				content: 'addNode.html?nodeId=' + nodeId
			});
		});
	}
}

function addNote() {
	var zTree = $.fn.zTree.getZTreeObj("tree");
	var selectNode = zTree.getSelectedNodes();
	if (selectNode.length != 1) {
		layui.use('layer',function(){
			layui.layer.alert("请选中一个文件夹！",{icon:0,title:"提示信息"});
		});
	} else {
		// 弹出起草页面
		var nodeId = selectNode[0].id;
		layui.use('layer',function(){
			var index = layui.layer.open({
				type: 2,
				title:"新建笔记",
				area:['900px','600px'],
				content: 'addNote.html?nodeId=' + nodeId
			});
		});
	}
}
