# Ignore this if you are not using NixOS
{ pkgs ? import <nixpkgs> {} }:
(pkgs.buildFHSUserEnv {
  name = "pipfhs";
  targetPkgs = pkgs: (with pkgs; [
    python311
    python311Packages.pip
    zlib # For numpy
  ]);
  runScript = "zsh";
}).env
