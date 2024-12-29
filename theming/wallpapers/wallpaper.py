import os
import random
import subprocess

wallpapers = os.listdir(os.path.dirname(__file__))
wallpapers.remove("wallpaper.py")

_ = subprocess.call("swww-daemon")
_ = os.system(
    f"swww img {os.path.join(os.path.dirname(__file__), random.choice(wallpapers))}"
)
