# This imports the nix package collection,
# so we can access the `pkgs` and `stdenv` variables
with import <nixpkgs> {};

# Make a new "derivation" that represents our shell
stdenv.mkDerivation {
  name = "dev-env";

  buildInputs = [
    # see https://nixos.org/nixos/packages.html to search for more
    pkgs.figlet
    pkgs.lolcat
    pkgs.nodejs-11_x
  ];

  # The '' quotes are 2 single quote characters
  # They are used for multi-line strings
  shellHook = ''
    figlet "Activated dev-env!" | lolcat --freq 0.5
    npm install
  '';
}