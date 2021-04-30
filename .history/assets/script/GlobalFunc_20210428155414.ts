


statck calc_angle(pos, endpos)
{
    let x = Math.abs(pos.x - endpos.x)
    let y = Math.abs(pos.y - endpos.y)
    let z = Math.sqrt(x * x + y * y)

    let angle = Math.round(Math.asin(y / z) / Math.pi * 180)
    return angle 
}