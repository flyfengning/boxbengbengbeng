#encoding=gbk

import shutil
import os
import sys

folder = sys.path[0].split("\\")[-1]
strpng = ""
for f in os.listdir("./"):
	pf = f.split(".")
	if pf[0] != folder and pf[1] == "png":
		strpng = strpng + " " + f

command = os.getenv("TexturePacker_ROOT") + "/TexturePacker.exe"
command = command + " " + "--format cocos2d"
command = command + " " + "--texture-format png"
command = command + " " + "--opt RGBA8888"
command = command + " " + "--allow-free-size"
command = command + " " + "--enable-rotation"
command = command + " " + "--scale 1"
command = command + " " + "--border-padding 2"
command = command + " " + "--inner-padding 0"
command = command + " " + "--shape-padding 2"
command = command + " " + "--max-width 2048"
command = command + " " + "--max-height 2048"
command = command + " " + "--algorithm MaxRects"
command = command + " " + "--trim-mode Trim"
command = command + " " + "--trim-threshold 1"
command = command + " " + "--data " + folder + ".plist"
command = command + " " + "--sheet " + folder + ".png"
command = command + strpng
os.system(command)

pathCur = sys.path[0]
if pathCur[-1:] == "\\":
	pathCur = pathCur[:-1]

pathIndex = pathCur.rfind("texturepacker")
paths = pathCur[pathIndex:].split("\\")

backDir = "../"
pathNew = ""
for i in range(len(paths)):
	backDir = backDir + "../"
	if i != 0 and i != (len(paths)-1):
		pathNew = pathNew + "/" + paths[i]

studio = backDir + "cocosstudio" + pathNew + "/"
if os.path.isdir(studio):
	shutil.copyfile(folder + ".plist", studio + folder + ".plist")
	shutil.copyfile(folder + ".png", studio + folder + ".png")

res = backDir + "res" + pathNew + "/"
if os.path.isdir(res):
	shutil.copyfile(folder + ".plist", res + folder + ".plist")
	shutil.copyfile(folder + ".png", res + folder + ".png")

print(studio)
print(res)