#encoding=gbk

import shutil
import os
import sys

folder = sys.path[0].split("\\")[-1]
strpng = ""
for f in os.listdir("./"):
	if f.split(".")[1] == "png":
		if f.split(".")[0] != folder:
			strpng = strpng + " " + f

command = os.getenv("TexturePacker_ROOT") + "\TexturePacker.exe"
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

# shutil.copyfile(folder + ".plist", "../../../cocosstudio/fight/" + folder + ".plist")
# shutil.copyfile(folder + ".png", "../../../cocosstudio/fight/" + folder + ".png")
# shutil.copyfile(folder + ".plist", "../../../res/fight/" + folder + ".plist")
# shutil.copyfile(folder + ".png", "../../../res/fight/" + folder + ".png")
