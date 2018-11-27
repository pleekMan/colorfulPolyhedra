function GeometryCreator() {

    this.color = [0,255,127,127];
    this.size = 1;
}

GeometryCreator.prototype.createCube = function () {

    var newBox = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial();
    //material.color = new THREE.Color(Math.random(),Math.random(),Math.random());
    material.color = new THREE.Color(Tools.prototype.normalizeColor(this.color));
    console.log("CreationColor => " + material.color);
    console.log(material.color);


    var geometry = new THREE.Mesh(newBox, material);

    var max = 50;
    var min = -max;
    //geometry.position.x = Math.random() * ((max * 2) - min);
    geometry.position.x = min + ((max - min) * Math.random());
    geometry.position.y = min + ((max - min) * Math.random());

    //console.log(geometry.position.x);
    //console.log(geometry.position.y);

    //geometry.position = THREE.Vector3(Math.random() * ((max * 2) - min), Math.random() * ((max * 2) - min), Math.random() * min);
    return geometry;
}

GeometryCreator.prototype.createOblongFigure = function(interval){
    
    // interval SHOULD START AT 0
    var incrementRatio = 1; // VERTICAL AND HORIZONTAL SIDES INCREASE BY 1, BUT START OFFSETED
    var hStart = 2;
    var vStart = 1;

    var hLength = (hStart + (interval * incrementRatio)) * this.size
    var vLength = (vStart + (interval * incrementRatio)) * this.size;
    var oneSideLength = this.size;

    // CREATE L-SHAPED OBLONG FIGURES (SUM OF EVEN NUMBERS)
    var shape = new THREE.Shape();
    shape.autoClose = true;
    shape.moveTo(0,vLength - oneSideLength);
    shape.lineTo(0,(oneSideLength * interval) + oneSideLength);
    shape.lineTo(hLength,(oneSideLength * interval) + oneSideLength);
    shape.lineTo(hLength,0);
    shape.lineTo(hLength - oneSideLength,0);
    shape.lineTo(hLength - oneSideLength,vLength - oneSideLength);

    // RENDER AS LINES
    //var geometryPoints = new THREE.BufferGeometry().setFromPoints(shape.getPoints());
    //var finalShape = new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: this.color, linewidth: 3 } ) );
    
    // CREATE EXTRUDED SHAPE
    var extrudeSettings = {
        depth: -this.size,
        //bevelEnabled: true,
        //bevelSegments: 2,
        steps: 1,
        bevelSize:0,
        bevelThickness: 0
    };

    var extrudedShape = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
    var material = new THREE.MeshBasicMaterial( { color: Tools.prototype.normalizeColor(this.color)} );
    //material.wireframe = true;
    material.transparent = true;
    material.opacity = 0.5;
    //material.flatShading = true;
    //material.depthTest = false;
    var finalShape = new THREE.Mesh( extrudedShape, material);

    return finalShape;
    
}
