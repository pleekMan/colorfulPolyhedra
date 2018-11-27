function Figure(figure){

    this.figure = figure;
    this.pos = new THREE.Vector3();
    
}

Figure.prototype.setPosition = function(newPos){
    pos.set(newPos.x, newPos.y, newPos.z);
}

Figure.prototype.getFigure = function(){
    return this.figure;
}