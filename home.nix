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
    zed-editor

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
    playerctl

    # Shell Stuff
    zoxide
    atuin
    pure-prompt
    zsh-autosuggestions

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

  programs.zsh = {
    enable = true;
    enableCompletion = true;
    autosuggestion.enable = true;
    syntaxHighlighting.enable = true;

    shellAliases = {
      ll = "ls -l";
      update = "sudo nixos-rebuild switch";
    };

    history = {
      size = 65536;
      path = "${config.xdg.dataHome}/zsh/history";
    };

    oh-my-zsh = {
        enable = true;
        plugins = [ "git" ];
        theme = "pure";
    };
  };

  programs.git = {
    enable = true;
    userName = "n3rdium";
    userEmail = "n3rdium@gmail.com";
    extraConfig = {
      credential.helper = "oauth";
    };
  };

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
    ".config/zed/".source = ./zed;
    ".zshrc".source = ./.zshrc;
    "wallpapers/".source = ./wallpapers;
  };

  home.sessionVariables = {
    EDITOR = "nvim";
  };

  programs.home-manager.enable = true;
}
