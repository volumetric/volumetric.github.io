function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;  
  this.value            = value || 2;

  var img_url = [
  'http://images.iimg.in/i/50830c6aedaffd18ab000135-100-100-1355921371/priyanka-chopra.img',
  'http://www.centralchronicle.com/wp-content/uploads/2012/09/Bipasha-basu1-100x100.jpg',
  'http://static4.wikia.nocookie.net/__cb62501/swrpg/images/thumb/6/6b/Salma-Hayek-salma-hayek-248829_1024.jpg/100px-2,390,0,387-Salma-Hayek-salma-hayek-248829_1024.jpg',
  'http://www.inquisitr.com/wp-content/uploads/2014/03/angelina-jolie-2655-100x100.jpg',
  'http://images6.fanpop.com/image/photos/32700000/Drew-drew-barrymore-32760050-100-100.png',
  'http://www.lahiguera.net/cinemania/actores/penelope_cruz/fotos/7386/penelope_cruz-p.jpg',
  'http://fanoos.com/ia/kareena_kapoors.jpg',
  'http://img.india-forums.com/images/100x100/138211-malaika-arora-khan-receives-jeeyo-bollywood-awards.jpg',
  'http://img.bollycurry.com/images/100x100/28072-amisha-patel.jpg',
  'http://www.ebharat.in/sites/default/files/imagecache/node-gallery-thumbnail/Chitrangada%20Singh.jpeg',
  'http://img.india-forums.com/images/100x100/293541-deepika-padukone.jpg',
  ];

  var power = Math.round(Math.log(this.value)/Math.log(2)) - 1;
  this.img_value = "<img style='width:107px; height:107px;' src='"+img_url[power]+"'/>";
  
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
