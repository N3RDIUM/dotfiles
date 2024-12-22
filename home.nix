{ inputs, config, pkgs, ... }:

{
  imports = [ inputs.ags.homeManagerModules.default ];

  home.username      = "n3rdium";
  home.homeDirectory = "/home/n3rdium";
  home.stateVersion  = "24.05"; # Please don't touch

  home.packages = with pkgs; [
    # Essentials
    floorp
    imagemagick
    xfce.thunar

    # Astro
    wine
    bottles
    gimp
    siril
    stellarium

    # Code
    nixd
    ruff
    rustup
    vscode
    zed-editor

    # Music
    lmms
    audacity
    pavucontrol
    youtube-music

    # Prod
    krita
    blender
    obsidian
    kdenlive
    syncthing
    inkscape-with-extensions

    # Rice Stuff
    cava
    wofi
    swww
    dunst
    cmatrix
    hyprshot
    cavalier
    hollywood
    fastfetch
    playerctl
    obs-studio
    hyprpicker

    # Fonts
    fira-code
    font-awesome
    fira-code-symbols
    nerd-fonts.fira-code
    nerd-fonts.fira-mono

    # Shell Stuff
    fd
    atuin
    pure-prompt
    zsh-autosuggestions
    git-credential-oauth

    # Miscellaneous
    ollama
    discord-canary
    ani-cli
    mangal
  ];

  programs.ags = {
    enable    = true;
    configDir = ./ags;

    # additional packages to add to gjs's runtime
    extraPackages = [
      inputs.ags.packages.${pkgs.system}.astal3
      inputs.ags.packages.${pkgs.system}.apps
      inputs.ags.packages.${pkgs.system}.mpris
      inputs.ags.packages.${pkgs.system}.hyprland
      inputs.ags.packages.${pkgs.system}.tray
    ];
  };

  programs.zoxide = {
    enable               = true;
    enableZshIntegration = true;
  };

  programs.zsh = {
    enable                    = true;
    enableCompletion          = true;
    autosuggestion.enable     = true;
    syntaxHighlighting.enable = true;

    shellAliases = {
      ff  = "fastfetch";
      cff = "clear && fastfetch";
      zed = "zeditor";
    };

    history = {
      size = 65536;
      path = "${config.xdg.dataHome}/zsh/history";
    };

    oh-my-zsh = {
      enable  = true;
      plugins = [ "git" ];
      theme   = "pure";
    };
  };

  programs.git = {
    enable      = true;
    userName    = "n3rdium";
    userEmail   = "n3rdium@gmail.com";
    extraConfig = { credential.helper = "oauth"; };
  };

  gtk = {
    enable = true;

    theme = {
      name    = "gruvbox-dark";
      package = pkgs.gruvbox-dark-gtk;
    };

    iconTheme = {
      name    = "oomox-gruvbox-dark";
      package = pkgs.gruvbox-dark-icons-gtk;
    };
  };

  qt = {
    enable             = true;
    platformTheme.name = "gtk";
  };

  home.file = {
    ".config/hypr/".source             = ./hypr;
    ".config/kitty/".source            = ./kitty;
    ".config/fastfetch/".source        = ./fastfetch;
    ".config/cava/".source             = ./cava;
    ".config/atuin/".source            = ./atuin;
    ".config/siril/".source            = ./siril;
    ".config/zed/settings.json".source = ./zed/settings.json;
    ".zshrc".source                    = ./.zshrc;
    "wallpapers/".source               = ./wallpapers;
  };

  home.sessionVariables = { EDITOR = "zed --wait"; };

  programs.home-manager.enable = true;
}
