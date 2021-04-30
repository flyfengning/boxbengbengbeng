


const calc_angle(pos, endpos)
{
    let x = Math.abs(pos.x - endpos.x)
    let y = Math.abs(y1 - y2)
    let z = Math.sqrt(x * x + y * y)

    angle = round(math.asin(y / z) / math.pi * 180)
    return angle 
}