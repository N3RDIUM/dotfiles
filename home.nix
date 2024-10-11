{ inputs, config, pkgs, ... }:

{
  imports = [ inputs.ags.homeManagerModules.default ];

  home.username = "n3rdium";
  home.homeDirectory = "/home/n3rdium";
  home.stateVersion = "24.05"; # Please read the comment before changing.

  home.packages = with pkgs; [
    # Essentials
    yazi
    ffmpegthumbnailer
    jq
    poppler
    fd
    imagemagick
    floorp
    xfce.thunar

    # Astro
    siril
    stellarium

    # Code
    rustup
    nixd
    nixfmt-classic
    vscode
    zed-editor

    # Music
    lmms
    sfizz
    audacity
    pavucontrol

    # Prod
    blender
    obsidian

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
    fira-code-symbols
    playerctl

    # Shell Stuff
    zoxide
    atuin
    pure-prompt
    zsh-autosuggestions
    git-credential-oauth

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

  programs.ags = {
    enable = true;
    configDir = ./ags;

    # additional packages to add to gjs's runtime
    extraPackages = [
      inputs.ags.packages.${pkgs.system}.astal
      inputs.ags.packages.${pkgs.system}.mpris
      inputs.ags.packages.${pkgs.system}.hyprland
      inputs.ags.packages.${pkgs.system}.tray
    ];
  };

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
    extraConfig = { credential.helper = "oauth"; };
  };

  gtk = {
    enable = true;

    theme = {
      name = "Tokyo Night";
      package = pkgs.tokyonight-gtk-theme;
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
    ".zshrc".source = ./.zshrc;
    "wallpapers/".source = ./wallpapers;
  };

  home.sessionVariables = { EDITOR = "zed --wait"; };

  programs.home-manager.enable = true;
}
