# Ignore this if you are not using NixOS
{ pkgs ? import <nixpkgs> {} }:
(pkgs.buildFHSUserEnv {
  name = "ruby-dev";
  targetPkgs = pkgs: (with pkgs; [
    ruby
    zlib # This is again needed
  ]);
  runScript = "zsh";
}).env
