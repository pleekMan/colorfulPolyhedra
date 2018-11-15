class GeometryCreator{

    constructor(){}

    create(typeOfGeometry){
        if(typeOfGeometry === "CUBE"){
            return this.createCube();
        }
    }

    createCube(){
        var newBox = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial();
        material.color = new THREE.Color(Math.random(),Math.random(),Math.random());

        var geometry = new THREE.Mesh(newBox, material);

        var max = 50;
        var min = -max;
        //geometry.position.x = Math.random() * ((max * 2) - min);
        geometry.position.x = min +  ((max - min) * Math.random());
        geometry.position.y = min +  ((max - min) * Math.random());
        
        console.log(geometry.position.x);
        console.log(geometry.position.y);
        
        //geometry.position = THREE.Vector3(Math.random() * ((max * 2) - min), Math.random() * ((max * 2) - min), Math.random() * min);
        return geometry;
    }

}