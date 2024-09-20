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
    cava
    wofi
    swww
    dunst
    cmatrix
    wlsunset
    hyprshot
    hollywood
    fastfetch
    fira-code

    # Miscellaneous
    lxappearance
    ollama
    discord
    ani-cli

    # Deps
    cmake
    meson
    cpio
  ];

  gtk = {
    enable = true;

    theme = {
      name = "Nordic";
      package = pkgs.nordic;
    };

    iconTheme = {
      name = "Awaita";
      package = pkgs.adwaita-icon-theme;
    };
  };

  qt = {
    enable = true;
    platformTheme.name = "gtk";
    style.name = "Nordic";
    style.package = pkgs.nordic;
  };

  home.file = {
    ".config/hypr/hyprland.conf".source = ./hypr/hyprland.conf;
    ".config/kitty/kitty.conf".source = ./kitty/kitty.conf;
    ".config/kitty/current-theme.conf".source = ./kitty/current-theme.conf;
    ".config/fastfetch/config.jsonc".source = ./fastfetch/config.jsonc;
    ".config/nvim/".source = ./nvim;
    "wallpapers/".source = ./wallpapers;
  };

  home.sessionVariables = {
    EDITOR = "nvim";
  };

  programs.git = {
    enable = true;
    userName  = "n3rdium";
    userEmail = "n3rdium@gmail.com";
  };

  programs.home-manager.enable = true;
}
