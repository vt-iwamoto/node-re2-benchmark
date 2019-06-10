# node-re2-benchmark

A benchmark script for [node-re2](https://github.com/uhop/node-re2)

## Usage

You can run [the benchmark script](https://github.com/vt-iwamoto/node-re2-benchmark/blob/master/benchmark.js) by the following commands.

```
$ docker pull vtiwamoto/node-re2-benchmark

$ docker run --rm node-re2-benchmark
[input]
pattern: ([a-z]+)+$
subject: aaaaaaaaaaaaaaaaaaaaaaaaaaaa!

[benchmark]
RE2: 0.192ms
RegExp: 5082.343ms
```

You can also pass a pattern and a subject.

```
$ docker run --rm node-re2-benchmark '(.*a){30}' 'aaaaaaaaaaaaaaaaaaaaaaaaaaaX'
[input]
pattern: (.*a){30}
subject: aaaaaaaaaaaaaaaaaaaaaaaaaaaX

[benchmark]
RE2: 0.308ms
RegExp: 4551.599ms
```
