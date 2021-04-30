


const calc_angle(pos, endpos)
{
    let x = abs(pos.x - endpos.x)
    let y = abs(y1 - y2)
    let z = math.sqrt(x * x + y * y)

    angle = round(math.asin(y / z) / math.pi * 180)
    return angle 
}