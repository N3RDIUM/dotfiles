import os
import random
import time

wallpapers = os.listdir(".")
wallpapers.remove("wallpaper.py")
print(wallpapers)

while True:
    os.system(f"swww img ~/wallpapers/{random.choice(wallpapers)}")
    time.sleep(1)
