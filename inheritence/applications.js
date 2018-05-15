function WebApp (name, url, technologies, licence, stars){
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = stars;
}
WebApp.prototype.getData = function (){
    return this.technologies;
}
WebApp.prototype.reactBased = function(){
   this.technologies.forEach(function(technology) {
      if (technology === 'React'){
          return true;
      }  
   });
   return false;
}

function MobileApp (name, platforms, licence, stars){
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}