- title: Setup a Nano PoW Work Server and Sell PoW
- date: 11-09-2023
- tags: Guide
- image: images/pow-server/hero.png
- author: @nano2dev
- price: 0.0133
- address: @bank
-----

This guide should work on virtual servers and home GPUs. 

## Install OpenCL

```
sudo apt install ocl-icd-opencl-dev
```

Windows:
- AMD GPU: [OCL-SDK](https://github.com/GPUOpen-LibrariesAndSDKs/OCL-SDK/releases/)
- Nvidia GPU: [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)

## Install Rust

```
curl https://sh.rustup.rs -sSf | sh
```

Windows: https://www.rust-lang.org/tools/install

### GCC

```
sudo apt install gcc
```

### Build

```bash
git clone https://github.com/nanocurrency/nano-work-server.git
cd nano-work-server
cargo build --release
```

## Using

```~/nano-work-server/target/release/nano-work-server --help```

```bash
USAGE:
    nano-work-server [FLAGS] [OPTIONS]

FLAGS:
    -h, --help       Prints help information
        --shuffle    Pick a random request from the queue instead of the oldest. Increases efficiency when using
                     multiple work servers
    -V, --version    Prints version information

OPTIONS:
    -c, --cpu-threads <THREADS>               Specifies how many CPU threads to use. [default: 0]
    -g, --gpu 0:0                             Specifies which GPU(s) to use. THREADS is optional and defaults to
                                              1048576.
        --gpu-local-work-size <N>             The GPU local work size. Increasing it may increase performance. For
                                              advanced users only.
    -l, --listen-address <ADDR>               Specifies the address to listen on. [default: [::1]:7076]
```

- CPU: **--cpu-threads NUMBER**
- GPU: **--gpu 0:0**

```json
{
    "action": "work_generate",
    "hash": "718CC2121C3E641059BC1C2CFC45666C99E8AE922F7A807B7D07B62C995D79E2",
    "difficulty": "ffffffc000000000",
    "multiplier": "1.0" 
}
```

```json
{
    "work": "2bf29ef00786a6bc",
    "difficulty": "ffffffd21c3933f4",
    "multiplier": "1.3946469"        
}
```

## Troubleshooting

- Linux OpenCL AMD GPU series error: `thread 'main' panicked at 'Failed to create GPU from string "00:00"` - see [solution here](https://github.com/nanocurrency/nano-work-server/issues/28)