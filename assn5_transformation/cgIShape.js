class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube (subdivisions)  {
        
        var step = 1/subdivisions

    for(var u=0; u < subdivisions; u++){
        var u_plus = (u+1)*step-0.5
        var u_minus = (u)*step-0.5
        for(var v=0; v < subdivisions; v++){
            var v_plus = (v+1)*step-0.5
            var v_minus = (v)*step-0.5

            // face 1
            this.addTriangle(u_plus,v_plus,0.5, u_minus,v_plus,0.5, u_plus,v_minus,0.5)
            this.addTriangle(u_minus, v_minus,0.5, u_plus,v_minus,0.5, u_minus,v_plus,0.5)

            this.addTriangle(u_plus,v_plus,0.5, u_plus,v_minus,0.5 ,u_minus,v_plus,0.5)
            this.addTriangle(u_minus, v_minus,0.5, u_minus,v_plus,0.5, u_plus,v_minus,0.5)
            
            // face 2
            this.addTriangle(u_plus,v_plus,-0.5, u_minus,v_plus,-0.5, u_plus,v_minus,-0.5)
            this.addTriangle(u_minus, v_minus,-0.5, u_plus,v_minus,-0.5, u_minus,v_plus,-0.5)

            this.addTriangle(u_plus,v_plus,-0.5, u_plus,v_minus,-0.5 ,u_minus,v_plus,-0.5)
            this.addTriangle(u_minus, v_minus,-0.5, u_minus,v_plus,-0.5, u_plus,v_minus,-0.5)

            // face 3
            this.addTriangle(u_plus,0.5,v_plus, u_minus,0.5,v_plus, u_plus,0.5,v_minus)
            this.addTriangle(u_minus, 0.5, v_minus, u_plus,0.5,v_minus, u_minus,0.5,v_plus)

            this.addTriangle(u_plus,0.5,v_plus, u_plus,0.5,v_minus, u_minus,0.5,v_plus)
            this.addTriangle(u_minus,0.5,v_minus, u_minus,0.5,v_plus, u_plus,0.5,v_minus)

            // face 4
            this.addTriangle(u_plus,-0.5,v_plus, u_minus,-0.5,v_plus, u_plus,-0.5,v_minus)
            this.addTriangle(u_minus, -0.5, v_minus, u_plus,-0.5,v_minus, u_minus,-0.5,v_plus)

            this.addTriangle(u_plus,-0.5,v_plus, u_plus,-0.5,v_minus, u_minus,-0.5,v_plus)
            this.addTriangle(u_minus,-0.5,v_minus, u_minus,-0.5,v_plus, u_plus,-0.5,v_minus)

            // face 5
            this.addTriangle(0.5,u_plus,v_plus, 0.5,u_minus,v_plus, 0.5,u_plus,v_minus)
            this.addTriangle(0.5,u_minus,v_minus, 0.5,u_plus,v_minus, 0.5,u_minus,v_plus)

            this.addTriangle(0.5,u_plus,v_plus, 0.5,u_plus,v_minus, 0.5,u_minus,v_plus)
            this.addTriangle(0.5,u_minus,v_minus, 0.5,u_minus,v_plus, 0.5,u_plus,v_minus)

            // face 6
            this.addTriangle(-0.5,u_plus,v_plus, -0.5,u_minus,v_plus, -0.5,u_plus,v_minus)
            this.addTriangle(-0.5,u_minus,v_minus, -0.5,u_plus,v_minus, -0.5,u_minus,v_plus)

            this.addTriangle(-0.5,u_plus,v_plus, -0.5,u_plus,v_minus, -0.5,u_minus,v_plus)
            this.addTriangle(-0.5,u_minus,v_minus, -0.5,u_minus,v_plus, -0.5,u_plus,v_minus)

        }
    }

    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision,heightdivision){
        var step = (1/radialdivision)
     var step_height = 1/heightdivision

    for(var u=0; u < radialdivision; u++){
        var u_step = (u)*step*2*Math.PI
        var u_step_plus = (u + 1)*step*2*Math.PI
            

        var u_y = 0.5*Math.cos(u_step)
        var u_x = 0.5*Math.sin(u_step)

        var u_y_plus = 0.5*Math.cos(u_step_plus)
        var u_x_plus = 0.5*Math.sin(u_step_plus)
        
        // top face
        this.addTriangle(0,0,0.5, u_y,u_x,0.5, u_y_plus,u_x_plus,0.5)
        this.addTriangle(0,0,0.5, u_y_plus,u_x_plus,0.5, u_y,u_x,0.5)

        // bottom face
        this.addTriangle(0,0,-0.5, u_y,u_x,-0.5, u_y_plus, u_x_plus,-0.5)
        this.addTriangle(0,0,-0.5, u_y_plus,u_x_plus,-0.5, u_y,u_x,-0.5)
        

        for(var v=0; v < heightdivision; v++){
            var v_step = (v)*step_height - 0.5
            var v_step_plus = (v + 1)*step_height - 0.5

            // surounding face
            this.addTriangle(u_y,u_x,v_step_plus, u_y,u_x,v_step, u_y_plus,u_x_plus,v_step)
            this.addTriangle(u_y_plus,u_x_plus,v_step, u_y_plus,u_x_plus,v_step_plus, u_y,u_x,v_step_plus)

            this.addTriangle(u_y,u_x,v_step, u_y,u_x,v_step_plus, u_y_plus,u_x_plus,v_step_plus)
            this.addTriangle(u_y_plus,u_x_plus,v_step_plus, u_y_plus,u_x_plus,v_step, u_y,u_x,v_step) 
        }
    }
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        // Fill in your cone code here.
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

