{
  description = "N3RDIUM's Flake!";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, home-manager, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
	config.allowUnfree = true;
      };
      lib = nixpkgs.lib;

    in {
      nixosConfigurations.n3rdium = lib.nixosSystem rec {
        inherit system;
	modules = [
          ./nixos/configuration.nix
	  home-manager.nixosModules.home-manager
	  {
            home-manager.useGlobalPkgs = true;
	    home-manager.useUserPackages = true;
	    home-manager.users.n3rdium = import ./home.nix;
            home-manager.extraSpecialArgs = { inherit system; };
	  }
	];
      };
    };
}
