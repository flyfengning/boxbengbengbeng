


const calc_angle(pos, endpos)
{
    x = abs(x1 - x2)
    y = abs(y1 - y2)
    z = math.sqrt(x * x + y * y)

    angle = round(math.asin(y / z) / math.pi * 180)
    return angle 
}