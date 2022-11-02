window.BENCHMARK_DATA = {
  "lastUpdate": 1667356598998,
  "repoUrl": "https://github.com/ItEndsWithTens/SilentHillMapExaminer",
  "entries": {
    "SHME BenchmarkDotNet results": [
      {
        "commit": {
          "author": {
            "email": "robert.martens@gmail.com",
            "name": "Rob Martens",
            "username": "ItEndsWithTens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34263dc87220ef7239953b10172f9129ac64fe6d",
          "message": "Try renaming the benchmark results again",
          "timestamp": "2022-11-01T21:36:00-04:00",
          "tree_id": "5736da8b38b5c14e1aa66801396a78d27f6568b7",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/34263dc87220ef7239953b10172f9129ac64fe6d"
        },
        "date": 1667353150334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 477.7604230244954,
            "unit": "ns",
            "range": "± 1.6527563287665912"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 255.76410929361978,
            "unit": "ns",
            "range": "± 0.9289240649233967"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3859.7261555989585,
            "unit": "ns",
            "range": "± 8.50653717797136"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 7567.917809119592,
            "unit": "ns",
            "range": "± 16.03383887876737"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robert.martens@gmail.com",
            "name": "Rob Martens",
            "username": "ItEndsWithTens"
          },
          "committer": {
            "email": "robert.martens@gmail.com",
            "name": "Rob Martens",
            "username": "ItEndsWithTens"
          },
          "distinct": true,
          "id": "7cb9778321ea27ac7108ec6b5ed5268630ca8928",
          "message": "Improve Aabb performance",
          "timestamp": "2022-11-01T22:32:58-04:00",
          "tree_id": "ab3372407b8aec27f00e245761b94199830a888d",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/7cb9778321ea27ac7108ec6b5ed5268630ca8928"
        },
        "date": 1667356594129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 157.68900680541992,
            "unit": "ns",
            "range": "± 4.326685200220254"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 375.8995357312654,
            "unit": "ns",
            "range": "± 8.328923765566532"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4282.835184733073,
            "unit": "ns",
            "range": "± 61.97918414803987"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 11029.382215227399,
            "unit": "ns",
            "range": "± 193.87760645334086"
          }
        ]
      }
    ]
  }
}