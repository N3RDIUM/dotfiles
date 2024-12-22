import os
import random
import subprocess
import time

wallpapers = os.listdir(os.path.dirname(__file__))
wallpapers.remove("wallpaper.py")

subprocess.call("swww-daemon")

while True:
    os.system(f"swww img ~/wallpapers/{random.choice(wallpapers)}")
    time.sleep(42)
