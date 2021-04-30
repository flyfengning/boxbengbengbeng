
calc_angle

var calc_angle = function(pos, endpos)
{
    let x = Math.abs(pos.x - endpos.x)
    let y = Math.abs(pos.y - endpos.y)
    let z = Math.sqrt(x * x + y * y)

    let angle = Math.round(Math.asin(y / z) / Math.PI * 180)
    return angle 
}

export {calc_angle}

