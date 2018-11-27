function Tools() {


}

Tools.prototype.map = function(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

Tools.prototype.normalizeColor = function(inColor){
    return new THREE.Color(inColor[0] / 255.0, inColor[1] / 255.0, inColor[2] / 255.0, inColor[3] / 255.0);
}


