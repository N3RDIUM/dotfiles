cd /home/n3rdium/.dotfiles
sudo nix flake update && sudo nixos-rebuild switch --flake .#n3rdium --upgrade
sudo nix-store --gc
