

function courseAngle(p1, p2) {
    var angle: number  = Math.atan2( (p2.y-p1.y), (p2.x-p1.x)) 
    var theta: number  = angle * (180 / Math.PI); 

    return Math.round(theta);
}


let calc_angle = function(pos, endpos)
{
    return courseAngle(pos, endpos)
}




export {calc_angle}

