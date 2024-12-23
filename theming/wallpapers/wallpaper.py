import os
import random
import subprocess

wallpapers = os.listdir(os.path.dirname(__file__))
wallpapers.remove("wallpaper.py")

subprocess.call("swww-daemon")
os.system(
    f"swww img {os.path.join(os.path.dirname(__file__), random.choice(wallpapers))}"
)
