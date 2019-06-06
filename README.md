# node-re2-benchmark

A benchmark script for node-re2

## Usage

You can run [the benchmark script](benchmark.js) by the following commands.

```
$ docker build -t node-re2-benchmark .

$ docker run --rm node-re2-benchmark
RE2: 0.218ms
RegExp: 5049.194ms
```

You can also pull a pre-built image from [Docker Hub](https://hub.docker.com/r/vtiwamoto/node-re2-benchmark).

```
$ docker pull vtiwamoto/node-re2-benchmark

$ docker run --rm vtiwamoto/node-re2-benchmark
RE2: 0.217ms
RegExp: 5105.728ms
```
