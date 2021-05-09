

function courseAngle(p1, p2) {
    // var y = Math.sin(lng_b - lng_a) * Math.cos(lat_b);
    // var x = Math.cos(lat_a) * Math.sin(lat_b) - Math.sin(lat_a) * Math.cos(lat_b) * Math.cos(lng_b - lng_a);
    // var bearing = Math.atan2(y, x);
    // // debugger;
    // bearing = 180 * bearing / Math.PI;
    // if (bearing < 0) {
    //     bearing = bearing + 360;
    // }
    var angle: number  = Math.atan2( (p2.y-p1.y), (p2.x-p1.x)) 
    var theta: number  = angle * (180 / Math.PI); 

    return Math.round(theta);
}


let calc_angle = function(pos, endpos)
{
    // let x = Math.abs(pos.x - endpos.x)
    // let y = Math.abs(pos.y - endpos.y)
    // let z = Math.sqrt(x * x + y * y)

    // let angle = Math.round(Math.asin(y / z) / Math.PI * 180)

    // let angle1 = courseAngle(pos, endpos)
    // cc.log("angle1, angle", angle1, angle)
    return courseAngle(pos, endpos)
}




export {calc_angle}

