function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;  
  this.value            = value || 2;

var img_url = [
  'img/priyanka_chopra.jpg',
  'img/bipasha_basu.jpg',
  'img/salma_hayek.jpg',
  'img/angelina_jolie.jpg',
  'img/drew_barrymore.jpg',
  'img/penelope_cruz.jpg',
  'img/kareena_kapoor.jpg',
  'img/malaika_arora.jpg',
  'img/amisha_patel.jpg',
  'img/chitrangada_singh.jpg',
  'img/deepika_padukone.jpg',
  ];

  var power = Math.round(Math.log(this.value)/Math.log(2)) - 1;
  // this.img_value = "<img style='width:107px; height:107px;' src='"+img_url[power]+"'/>";
  this.img_value = "";
  
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
