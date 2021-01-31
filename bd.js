let bd = [{name:"rere", data: "Hi man",id :"500"}];

export const addData = (data)=> {
	bd.push(data);
	return 1;
};

export const changeData = (data)=> {
	bd.find(el=>el.id === data.id).data = data.data;
	console.log(bd)
};

export const getData = ()=> {
	return bd;
};



