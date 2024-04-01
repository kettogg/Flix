{
  # Flake inputs
  inputs = {
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2311.557104.tar.gz";
  };

  # Flake outputs
  outputs = { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      # Development environment output
      devShells = forAllSystems ({ pkgs }: {
        default =
          let
            # Use Python 3.11
            python = pkgs.python311;
          in
          # Note that this part is similar to the shell.nix
          pkgs.mkShell {
            # The Nix packages provided in the environment
            packages = [
              # Python plus helper tools
              pkgs.stdenv.cc.cc
              pkgs.zlib
              (python.withPackages (ps: with ps; [
              pip
              virtualenv
              ]))
            ];

      HELLO = "FLIX-API ENV";
      PROJDIR = "${toString ./.}";

      shellHook = ''
        echo $HELLO
        
        # For PyTorch/Pandas
        export LD_LIBRARY_PATH=${pkgs.stdenv.cc.cc.lib}/lib:LD_LIBRARY_PATH

        # For Numpy
        export LD_LIBRARY_PATH=${pkgs.zlib}/lib:$LD_LIBRARY_PATH

        [ ! -d '$PROJDIR/venv' ] && virtualenv venv && echo "CREATED venv"
        source venv/bin/activate
        python -m pip install -r requirements.txt
        
        # Start the Flask server using Gunicorn
        gunicorn wsgi:app
      '';
          };
      });
    };
}
