export default{
	get:function(uri,param,cb){
		fetch(`${uri}?${param}`,{
			credentials:'include'
		})
		.then(response=>response.json())
		.then(res=>{
			cb(res)
		})
		.catch(err=>{
			console.log(err);
		})
	}
	
}
