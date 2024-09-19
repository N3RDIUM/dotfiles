{ config, pkgs, ... }:

{
  home.username = "n3rdium";
  home.homeDirectory = "/home/n3rdium";
  home.stateVersion = "24.05"; # Please read the comment before changing.

  home.packages = with pkgs; [
    # Essentials
    floorp
    xfce.thunar

    # Astro
    siril
    stellarium

    # Code
    vscode

    # Music
    lmms

    # Prod
    obsidian
    fluent-reader

    # Rice Stuff
    wofi
    swww
    dunst
    nordic
    cmatrix
    wlsunset
    hollywood
    fastfetch
    fira-code

    # Miscellaneous
    lxappearance
    ollama
    discord
    ani-cli
  ];

  gtk = {
    enable = true;
    theme = {
      name = "Nordic";
      package = pkgs.materia-theme;
    };
  };

  home.file = {
    ".config/hypr/hyprland.conf".source = ./hypr/hyprland.conf;

    ".config/kitty/kitty.conf".source = ./kitty/kitty.conf;
    ".config/kitty/current-theme.conf".source = ./kitty/current-theme.conf;

    ".config/fastfetch/config.jsonc".source = ./fastfetch/config.jsonc;

    ".config/nvim/".source = ./nvim;
  };

  home.sessionVariables = {
    EDITOR = "nvim";
  };

  programs.home-manager.enable = true;
}
