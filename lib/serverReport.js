var serverReport = function(config){
	this.config = config;
	Array.prototype.max = function() {
 		return Math.max.apply(null, this);
	};

	Array.prototype.min = function() {
	 	return Math.min.apply(null, this);
	};
}
serverReport.prototype.log = function(msg){
	var self = this;
	if((this.config.title.length%2 == 0 && this.config.width%2 != 0) || (this.config.title.length%2 != 0 && this.config.width%2 == 0)){
		this.config.width ++;
	}
	if(this.config.animate.enable){
		var i = 0;
		setInterval(function(){
			if(i == Math.floor((self.config.width- (self.config.title).length)/2)){
				clearInterval(this);
				process.stdout.write(self.config.title);
				i = 0;
				setInterval(function(){
					if(i == Math.floor((self.config.width- (self.config.title).length)/2)){
						clearInterval(this);
						process.stdout.write('\n');
						var lengths = [];
						for(var j in msg){							
							lengths.push(j.length);
						}
						for(var k in msg){
							process.stdout.write(k);
							if(k.length < lengths.max()){								
								for(var l = 0;l<lengths.max()-k.length;l++){
									process.stdout.write(" ");									
								}
							}
							process.stdout.write(" : "+msg[k]);
							process.stdout.write('\n');

						}
						var m = 0;
						setInterval(function(){
							if(m == self.config.width){
								clearInterval(this);
								process.stdout.write("\n");
							}else{
								process.stdout.write(self.config.icon);
								m++;
							}
						},self.config.animate.time);

					}else{
						process.stdout.write(self.config.icon);
						i++;
					}
				},self.config.animate.time);
			}else{
				process.stdout.write(self.config.icon);
				i++;
			}

			
		},self.config.animate.time);
		
	}else{
		for(var i=0;i<Math.floor((self.config.width- (self.config.title).length)/2);i++){
			process.stdout.write(self.config.icon);
		}
		process.stdout.write(self.config.title);
		for(var i=0;i<Math.floor((self.config.width- (self.config.title).length)/2);i++){
			process.stdout.write(self.config.icon);
		}
		process.stdout.write('\n');
		var lengths = [];
						for(var j in msg){							
							lengths.push(j.length);
						}
						for(var k in msg){
							process.stdout.write(k);
							if(k.length < lengths.max()){								
								for(var l = 0;l<lengths.max()-k.length;l++){
									process.stdout.write(" ");									
								}
							}
							process.stdout.write(" : "+msg[k]);
							process.stdout.write('\n');

						}
						for(var j = 0;j<self.config.width;j++){
							process.stdout.write(self.config.icon);							
						}
						process.stdout.write('\n');
	}
}
module.exports = exports = serverReport;