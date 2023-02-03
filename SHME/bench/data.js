window.BENCHMARK_DATA = {
  "lastUpdate": 1675401839921,
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
      },
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
          "id": "0c0bcf746bf70daf485b397b35a6dcc0f64600c6",
          "message": "Update GitHub actions versions",
          "timestamp": "2022-11-03T17:07:25-04:00",
          "tree_id": "dae9d3e2305109888a48f3019e264035724471db",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/0c0bcf746bf70daf485b397b35a6dcc0f64600c6"
        },
        "date": 1667509915812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 166.84839241206646,
            "unit": "ns",
            "range": "± 8.024216029652539"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 320.43562957218717,
            "unit": "ns",
            "range": "± 0.2793855442816212"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3661.238534109933,
            "unit": "ns",
            "range": "± 99.56558550520052"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 9457.745755103326,
            "unit": "ns",
            "range": "± 283.6034637864938"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c430163cbe3eadd6d1634a741a1168e5eb28cb18",
          "message": "Use 'latest' tag for action-automatic-releases\n\nThe ability to target just a major version of a GitHub Action depends on its repository having a floating 'vX' tag that points to the newest commit of that major version, which this particular action doesn't.",
          "timestamp": "2022-11-03T17:28:09-04:00",
          "tree_id": "2bedbf482f2ae20092d0513653b808e036d0e0b7",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/c430163cbe3eadd6d1634a741a1168e5eb28cb18"
        },
        "date": 1667511063584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 133.80221843719482,
            "unit": "ns",
            "range": "± 2.024323016846912"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 263.1933657328288,
            "unit": "ns",
            "range": "± 1.543990964059969"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3086.9681431696963,
            "unit": "ns",
            "range": "± 13.45782671628722"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 8089.702962239583,
            "unit": "ns",
            "range": "± 76.0135256119048"
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
          "id": "26af48e76d8a8faeb28675867307a25ce8de0cd1",
          "message": "Improve Plane performance",
          "timestamp": "2022-11-14T18:00:06-05:00",
          "tree_id": "70a76e5f1bbbcde0ad587d09696a2e7765900525",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/26af48e76d8a8faeb28675867307a25ce8de0cd1"
        },
        "date": 1668467263456,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 169.4777625578421,
            "unit": "ns",
            "range": "± 7.322344548807364"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 346.4907475880214,
            "unit": "ns",
            "range": "± 5.247474924812233"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4518.251272348257,
            "unit": "ns",
            "range": "± 71.80067731692247"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 5886.562347412109,
            "unit": "ns",
            "range": "± 119.36952452974604"
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
          "id": "bd15eb1855698abad700587f11b3ca1869296ee5",
          "message": "Improve Camera update performance",
          "timestamp": "2023-02-02T00:58:40-05:00",
          "tree_id": "b3847828c7a617fea9877094b8f44b1eff098be1",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/bd15eb1855698abad700587f11b3ca1869296ee5"
        },
        "date": 1675318221326,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 130.52302996317545,
            "unit": "ns",
            "range": "± 0.4549943683238936"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 260.58706919352215,
            "unit": "ns",
            "range": "± 0.6303241505121934"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2999.860407511393,
            "unit": "ns",
            "range": "± 41.34236307166561"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1546.2122472127278,
            "unit": "ns",
            "range": "± 9.48609783607219"
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
          "id": "b2c87c9dfeb57a44822411c41455b98358c676df",
          "message": "Allow rendering overlay to framebuffer\n\nAdditionally removes the \"sync to game\" option for being too janky and disappointing. Framebuffer rendering is inherently synced, but only available in Octoshock. Not having memory events yet, Nymashock only offers the jiggly GUI-based version for the time being.",
          "timestamp": "2023-02-02T18:56:09-05:00",
          "tree_id": "f9dbd1d191a8dc16c1efb3f35fac15cd8b5b2ec6",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/b2c87c9dfeb57a44822411c41455b98358c676df"
        },
        "date": 1675389040986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 148.857070659769,
            "unit": "ns",
            "range": "± 4.500057175850106"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 337.61534690856934,
            "unit": "ns",
            "range": "± 4.922662987296001"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4304.23095703125,
            "unit": "ns",
            "range": "± 98.63070961186227"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 2000.6704875401088,
            "unit": "ns",
            "range": "± 27.80872019114147"
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
          "id": "c8aaa29777e81388452edaf8efb834fd97b895df",
          "message": "Prep for BizHawk 2.9",
          "timestamp": "2023-02-03T00:19:09-05:00",
          "tree_id": "0e616407aba1055938810d720ab49ae0fe5d54ab",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/c8aaa29777e81388452edaf8efb834fd97b895df"
        },
        "date": 1675401826433,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 127.62565612792969,
            "unit": "ns",
            "range": "± 0.32915338734748373"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 255.82386425563269,
            "unit": "ns",
            "range": "± 0.6089353469039341"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2919.0085547310964,
            "unit": "ns",
            "range": "± 23.902228148455677"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1549.9666086832683,
            "unit": "ns",
            "range": "± 5.431425184527293"
          }
        ]
      }
    ]
  }
}