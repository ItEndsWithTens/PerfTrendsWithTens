window.BENCHMARK_DATA = {
  "lastUpdate": 1710457432436,
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
          "id": "6af88af250d7f512a4e8f9cf6585547249f8ba80",
          "message": "Fix area map pixel decoding",
          "timestamp": "2023-02-14T23:31:19-05:00",
          "tree_id": "67b0ffda82961feeedc45587aafe7667dab81cbb",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/6af88af250d7f512a4e8f9cf6585547249f8ba80"
        },
        "date": 1676436544176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 143.82172255288987,
            "unit": "ns",
            "range": "± 3.553308749811005"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 340.7181297029768,
            "unit": "ns",
            "range": "± 3.438504090813581"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4347.146333966936,
            "unit": "ns",
            "range": "± 44.718683306893624"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1993.1327547345843,
            "unit": "ns",
            "range": "± 24.810806755313166"
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
          "id": "cb4d4a23e3e43808a9ef6f7757487a450a7a119e",
          "message": "Check BizHawk version on load\n\nWith breaking changes to interface method signatures like ReadByteRange, cross-version compatibility is never guaranteed long term, so check and warn users about potential problems, but still let them forge ahead if they insist.",
          "timestamp": "2023-04-15T02:15:50-04:00",
          "tree_id": "6837c584f06c44a0df0a580546e07331f736a0ac",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/cb4d4a23e3e43808a9ef6f7757487a450a7a119e"
        },
        "date": 1681539834586,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 134.25532749720983,
            "unit": "ns",
            "range": "± 1.132800909725228"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 261.6263771057129,
            "unit": "ns",
            "range": "± 0.4890046286076014"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3056.450424194336,
            "unit": "ns",
            "range": "± 18.526421804638872"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1547.4230357578822,
            "unit": "ns",
            "range": "± 3.237717301370817"
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
          "id": "27f5f4e02e0fd6c552f2105e5c3f1f4437aec42d",
          "message": "Use netstandard2.0 for custom build task\n\nAlso run my custom build targets at the proper time; as per dotnet/msbuild#8099 they were configured to run a little too early in the build.",
          "timestamp": "2023-04-15T22:49:00-04:00",
          "tree_id": "5a93447c88f5b91e67009c6a35e62cd9655fd92a",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/27f5f4e02e0fd6c552f2105e5c3f1f4437aec42d"
        },
        "date": 1681613574937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 129.47108915873937,
            "unit": "ns",
            "range": "± 0.4352418192441331"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 257.2387593133109,
            "unit": "ns",
            "range": "± 1.229160765955694"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2960.4930369059243,
            "unit": "ns",
            "range": "± 14.34436583607735"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1510.7627360026042,
            "unit": "ns",
            "range": "± 17.533137748457147"
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
          "id": "7496b6e60ed4db5779a29db0ab63fa1c0490d669",
          "message": "Implement Disco Mode\n\nFar and away the most important feature in this project.",
          "timestamp": "2023-04-16T15:36:21-04:00",
          "tree_id": "b6156fc5fcaa9423d4d729564f864825735d4846",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/7496b6e60ed4db5779a29db0ab63fa1c0490d669"
        },
        "date": 1681674038723,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 127.96912670135498,
            "unit": "ns",
            "range": "± 0.3507933456344391"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 255.65927369253976,
            "unit": "ns",
            "range": "± 0.759936712363623"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2904.868698120117,
            "unit": "ns",
            "range": "± 4.21229398458045"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1488.0033493041992,
            "unit": "ns",
            "range": "± 5.3177642289044424"
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
          "id": "7496b6e60ed4db5779a29db0ab63fa1c0490d669",
          "message": "Implement Disco Mode\n\nFar and away the most important feature in this project.",
          "timestamp": "2023-04-16T15:36:21-04:00",
          "tree_id": "b6156fc5fcaa9423d4d729564f864825735d4846",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/7496b6e60ed4db5779a29db0ab63fa1c0490d669"
        },
        "date": 1681675987982,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 115.20122210184734,
            "unit": "ns",
            "range": "± 0.6588521189607885"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 230.3865639368693,
            "unit": "ns",
            "range": "± 1.3656046450795272"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2656.660919189453,
            "unit": "ns",
            "range": "± 15.001985767929817"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1354.4045312064034,
            "unit": "ns",
            "range": "± 6.868156665977697"
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
          "id": "7496b6e60ed4db5779a29db0ab63fa1c0490d669",
          "message": "Implement Disco Mode\n\nFar and away the most important feature in this project.",
          "timestamp": "2023-04-16T15:36:21-04:00",
          "tree_id": "b6156fc5fcaa9423d4d729564f864825735d4846",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/7496b6e60ed4db5779a29db0ab63fa1c0490d669"
        },
        "date": 1681676545019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 152.04071521759033,
            "unit": "ns",
            "range": "± 1.4991656239052809"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 267.12445531572615,
            "unit": "ns",
            "range": "± 2.6083970044096976"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3340.0919233049667,
            "unit": "ns",
            "range": "± 28.706510163898162"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1585.6088638305664,
            "unit": "ns",
            "range": "± 24.95265277423076"
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
          "id": "e55b06c15be644fee9d7cc258c371de32989d790",
          "message": "Build against BizHawk 2.9",
          "timestamp": "2023-04-16T16:29:08-04:00",
          "tree_id": "a672db9457958f153b1a7d40dae598eaa1fbdeac",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/e55b06c15be644fee9d7cc258c371de32989d790"
        },
        "date": 1681677622530,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 128.5917297999064,
            "unit": "ns",
            "range": "± 0.5652202043847823"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 255.7175095876058,
            "unit": "ns",
            "range": "± 1.2469782166923058"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2918.379622239333,
            "unit": "ns",
            "range": "± 7.931652873785313"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1494.0031596592494,
            "unit": "ns",
            "range": "± 6.273598122670421"
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
          "id": "db497c5a3dcca4a60224e37cdf5e160d4d1404d6",
          "message": "Don't mark dev builds prerelease\n\nFor whatever reason, prerelease builds can't be marked as the \"latest build\" on the Github releases page. To make sure the little green \"Latest\" badge/bubble is applied to the dev builds and help avoid user confusion, just set prerelease false and be done with it.",
          "timestamp": "2023-04-16T16:53:04-04:00",
          "tree_id": "abf6b4d45bf1f0a40c1353dc4c26d42e0ad1c817",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/db497c5a3dcca4a60224e37cdf5e160d4d1404d6"
        },
        "date": 1681678646499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 133.43208948771158,
            "unit": "ns",
            "range": "± 2.2509336705847764"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 261.5695031483968,
            "unit": "ns",
            "range": "± 1.5336245840459597"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2977.404225667318,
            "unit": "ns",
            "range": "± 38.98615641636542"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1509.9172465006511,
            "unit": "ns",
            "range": "± 9.553849678490684"
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
          "id": "e16e8e0a6aabcee966493efcac761cc99f1f8077",
          "message": "Check out full history during build\n\nBuild versioning depends on having any existing tags, so without full history of the branch/repo the resulting binary and package build numbers are wrong.",
          "timestamp": "2023-04-20T20:03:26-04:00",
          "tree_id": "75267cc0bda48b61444f4be81fd9c880e6afe5f3",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/e16e8e0a6aabcee966493efcac761cc99f1f8077"
        },
        "date": 1682035864358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 168.14152240753174,
            "unit": "ns",
            "range": "± 2.185714826039485"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 333.2108624776204,
            "unit": "ns",
            "range": "± 4.694335034335096"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3860.1910705566406,
            "unit": "ns",
            "range": "± 99.19775850510034"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1963.5741678873699,
            "unit": "ns",
            "range": "± 34.117267526514425"
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
          "id": "1ee889ed086c7f84e47d761e3fa0ac6033947a3f",
          "message": "Update README.md",
          "timestamp": "2023-04-30T01:56:27-04:00",
          "tree_id": "5caf3407dad840da9c9b86c85b645076b72bc390",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/1ee889ed086c7f84e47d761e3fa0ac6033947a3f"
        },
        "date": 1682834624378,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 128.67181460062662,
            "unit": "ns",
            "range": "± 0.7558833926794165"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 256.03052457173663,
            "unit": "ns",
            "range": "± 0.5385626830359478"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2912.9332951137,
            "unit": "ns",
            "range": "± 6.683037304485496"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1486.1219787597656,
            "unit": "ns",
            "range": "± 5.271379762216842"
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
          "id": "9175fbae23b0d4ea7afe66c5206f4a16d696ca08",
          "message": "Only auto update triggers when a stage is loaded\n\nTurns out the engine does, in fact, have a value tracking whether a level is loaded, and my janky timer nonsense can finally be tossed out the window.",
          "timestamp": "2023-05-01T23:49:29-04:00",
          "tree_id": "327f3512218c7e654e04f9c99583f6078bec19e9",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/9175fbae23b0d4ea7afe66c5206f4a16d696ca08"
        },
        "date": 1682999766998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 133.0381283393273,
            "unit": "ns",
            "range": "± 0.4280236800740712"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 256.52805010477704,
            "unit": "ns",
            "range": "± 1.313773277310232"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2918.702824910482,
            "unit": "ns",
            "range": "± 5.664872681073808"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1488.4912745157878,
            "unit": "ns",
            "range": "± 6.896074703881802"
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
          "id": "40188be333514d73609009fe47dda63e6e3022fa",
          "message": "Update trigger array on \"Auto\" checkbox enable",
          "timestamp": "2023-05-02T00:09:00-04:00",
          "tree_id": "fe24ed4f5f2264dfc2720301fa8c0dd7195d29e2",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/40188be333514d73609009fe47dda63e6e3022fa"
        },
        "date": 1683000834780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 130.10492324829102,
            "unit": "ns",
            "range": "± 0.42562427683278364"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 258.23894182840985,
            "unit": "ns",
            "range": "± 0.597468768475286"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3012.4767557779946,
            "unit": "ns",
            "range": "± 16.092443820293706"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1504.1631444295247,
            "unit": "ns",
            "range": "± 5.332534522318829"
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
          "id": "1df96b62b7d038b51d9c8527e75f37f360e2d24c",
          "message": "Allow custom crosshair size",
          "timestamp": "2023-05-05T23:52:05-04:00",
          "tree_id": "8a8ac625a4246dd2efce85a8423c0f8b0d1c4ba4",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/1df96b62b7d038b51d9c8527e75f37f360e2d24c"
        },
        "date": 1683345509933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 139.74426614827124,
            "unit": "ns",
            "range": "± 4.228903421192846"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 284.66362476348877,
            "unit": "ns",
            "range": "± 4.735016067022187"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3368.068034832294,
            "unit": "ns",
            "range": "± 36.28455354433638"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1597.5998011502352,
            "unit": "ns",
            "range": "± 36.02464800943838"
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
          "id": "740e662cc4aa433f7abf2acfa9d5156019453c4a",
          "message": "Add raycast selection\n\nDepth sorting is still an issue, but the click-and-hold cycling should alleviate that in the short term.",
          "timestamp": "2023-05-08T02:10:26-04:00",
          "tree_id": "5d3e657511395173b5356d888653fcce9c5c7deb",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/740e662cc4aa433f7abf2acfa9d5156019453c4a"
        },
        "date": 1683526813267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 148.05048624674478,
            "unit": "ns",
            "range": "± 1.446955119975129"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 308.4561421320989,
            "unit": "ns",
            "range": "± 3.14244257417691"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3849.9778747558594,
            "unit": "ns",
            "range": "± 44.222231632109505"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1757.2079213460286,
            "unit": "ns",
            "range": "± 21.778823902091297"
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
          "id": "afa80b8e91d13c9a2828bd40932a75c5012a3a71",
          "message": "Allow locking camera to Harry's head",
          "timestamp": "2023-05-11T05:35:04-04:00",
          "tree_id": "983c7b8d2ad4f6725cb2ce4ee4b2cccda955e369",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/afa80b8e91d13c9a2828bd40932a75c5012a3a71"
        },
        "date": 1683797971762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 127.96132723490398,
            "unit": "ns",
            "range": "± 0.5459881215813571"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 255.69880485534668,
            "unit": "ns",
            "range": "± 1.2394154047088475"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2911.9334629603795,
            "unit": "ns",
            "range": "± 6.9203139037936285"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1475.9430612836566,
            "unit": "ns",
            "range": "± 3.2389350029495985"
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
          "id": "573817a6402151f66c76397115d638852e15c0ab",
          "message": "Add number conversion convenience features\n\nI'm getting tired of doing this stuff by hand every time I'm poking around the game's memory looking for new stuff.",
          "timestamp": "2023-05-12T21:46:01-04:00",
          "tree_id": "c6942cc1830745cfd32b217537752254c795c4ff",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/573817a6402151f66c76397115d638852e15c0ab"
        },
        "date": 1683942585537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 128.38774045308432,
            "unit": "ns",
            "range": "± 0.6155351398984271"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 256.50793075561523,
            "unit": "ns",
            "range": "± 0.7464420558923293"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2900.2049509684243,
            "unit": "ns",
            "range": "± 5.553260502819628"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1476.239382425944,
            "unit": "ns",
            "range": "± 4.258575827284145"
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
          "id": "ff1ca9e51967298e3ba5fa430947297c029b4f76",
          "message": "Clarify use of some Utility tab features",
          "timestamp": "2023-05-12T22:33:00-04:00",
          "tree_id": "8d79c7b36da7e849e0d4695da356ed48eb47aeef",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/ff1ca9e51967298e3ba5fa430947297c029b4f76"
        },
        "date": 1683945408717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 129.4634067095243,
            "unit": "ns",
            "range": "± 1.2314550598198668"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 269.2179203033447,
            "unit": "ns",
            "range": "± 2.419453195602783"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2930.4730824061803,
            "unit": "ns",
            "range": "± 12.75710527973944"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1504.3043954031807,
            "unit": "ns",
            "range": "± 13.040390721654093"
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
          "id": "0b344c6df6f506e66e0446bc55ce067ea621ce0a",
          "message": "Improve CameraPath coloring\n\nScheme courtesy of https://paletton.com/#uid=30U0u0kw0w0jvDaoOy4y4oODajv",
          "timestamp": "2023-05-18T05:12:32-04:00",
          "tree_id": "8c923c7084353ff9c7fc4d66737f9a3a84d77b4c",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/0b344c6df6f506e66e0446bc55ce067ea621ce0a"
        },
        "date": 1684401965380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 124.27589257558186,
            "unit": "ns",
            "range": "± 0.46607519014487486"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 293.62375259399414,
            "unit": "ns",
            "range": "± 0.2011870791538858"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3151.254679361979,
            "unit": "ns",
            "range": "± 16.69193745577177"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1937.9725592476982,
            "unit": "ns",
            "range": "± 2.4595338743681068"
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
          "id": "0bb51e70098ed2689e72f160344f4fba0f841626",
          "message": "Thicken one dimensional camera paths",
          "timestamp": "2023-05-21T17:19:48-04:00",
          "tree_id": "d7b08c4e0eafb2819a954f65f79e973974c4f90e",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/0bb51e70098ed2689e72f160344f4fba0f841626"
        },
        "date": 1684704816882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 128.94468466440836,
            "unit": "ns",
            "range": "± 0.48199006923605936"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 300.7543820601243,
            "unit": "ns",
            "range": "± 2.408029697327276"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 5380.986081636869,
            "unit": "ns",
            "range": "± 15.93227114623853"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 17190.894368489582,
            "unit": "ns",
            "range": "± 60.64652655599401"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1571.7542902628581,
            "unit": "ns",
            "range": "± 5.400032082607354"
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
          "id": "8e8a356849d09089eade27b2fbd8e8a36bdcfbb2",
          "message": "Remove some foreach loops in the render hot path\n\nI also threw in that theoretically faster custom HasFlag method, for good measure.",
          "timestamp": "2023-05-23T21:36:18-04:00",
          "tree_id": "e603311340cfc40c4d9559c0a11f4308f6ecf09a",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/8e8a356849d09089eade27b2fbd8e8a36bdcfbb2"
        },
        "date": 1684892817458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 128.34368546803793,
            "unit": "ns",
            "range": "± 1.6487521368696325"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 298.249553044637,
            "unit": "ns",
            "range": "± 3.154294951945302"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3654.4634410313197,
            "unit": "ns",
            "range": "± 9.448678177073145"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 15521.324375697544,
            "unit": "ns",
            "range": "± 86.50909634444133"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1523.407336643764,
            "unit": "ns",
            "range": "± 5.010807976135736"
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
          "id": "163d443a7473518aee3b73bd92da16053fb84082",
          "message": "Improve performance just a little more",
          "timestamp": "2023-05-28T01:39:31-04:00",
          "tree_id": "261e2f79e07bcbada481d747dbfa5932c5fab49b",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/163d443a7473518aee3b73bd92da16053fb84082"
        },
        "date": 1685252762065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 88.11098848070417,
            "unit": "ns",
            "range": "± 0.08182799228473668"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.0416509921734,
            "unit": "ns",
            "range": "± 0.15466464223322776"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2604.1297912597656,
            "unit": "ns",
            "range": "± 1.6940965662547867"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12437.037658691406,
            "unit": "ns",
            "range": "± 6.394305598247402"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1385.9331130981445,
            "unit": "ns",
            "range": "± 1.7924095682131418"
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
          "id": "691f36fca343fd881c05331fe5ec6c991c54cdf5",
          "message": "Replace automatic release action\n\nThe deprecation of set-output has been postponed, but not that of Node 12. This seems to be a nice drop-in replacement for the original action, whose developer is MIA. I do hope they're doing well, but the show must go on.",
          "timestamp": "2023-06-02T12:55:13-04:00",
          "tree_id": "ed3155e0801e720663205dd32e728000fbbae395",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/691f36fca343fd881c05331fe5ec6c991c54cdf5"
        },
        "date": 1685725264004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 117.15305703026908,
            "unit": "ns",
            "range": "± 0.7463192211469665"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 259.0656587055751,
            "unit": "ns",
            "range": "± 1.35197939031518"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3531.854724884033,
            "unit": "ns",
            "range": "± 3.377189833146419"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 15111.542765299479,
            "unit": "ns",
            "range": "± 63.328499583857536"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1522.1396764119465,
            "unit": "ns",
            "range": "± 4.033750033047862"
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
          "id": "8c692d2f3a04e1708eac77e83edc4c4291462206",
          "message": "Fix cutoff GroupBox on Save tab",
          "timestamp": "2023-10-25T13:13:00-04:00",
          "tree_id": "9fa301a09502c7af799dfec479cf05dde35adc0e",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/8c692d2f3a04e1708eac77e83edc4c4291462206"
        },
        "date": 1698255050471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 129.93178648107192,
            "unit": "ns",
            "range": "± 2.7382638207928314"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 296.53416633605957,
            "unit": "ns",
            "range": "± 2.825713376834409"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3881.145248413086,
            "unit": "ns",
            "range": "± 68.76623526709287"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 17997.456711989184,
            "unit": "ns",
            "range": "± 210.35658245558753"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1745.2855428059895,
            "unit": "ns",
            "range": "± 26.25891510843072"
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
          "id": "e463f5350d847653ae5c0bcb77a5cfa1a72a9478",
          "message": "Speed up framebuffer accesses even more\n\nOkay so \"all in good time\" turned out to be like an hour, tops. Sometimes I surprise myself.",
          "timestamp": "2023-10-29T12:27:02-04:00",
          "tree_id": "d36c5a5f552666b36dde54166633efaab82e5623",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/e463f5350d847653ae5c0bcb77a5cfa1a72a9478"
        },
        "date": 1698597483593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 127.89226198196411,
            "unit": "ns",
            "range": "± 9.298843251716164"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 269.9998728434245,
            "unit": "ns",
            "range": "± 1.0158976338344419"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3577.0416259765625,
            "unit": "ns",
            "range": "± 7.098704554088612"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 14834.784240722656,
            "unit": "ns",
            "range": "± 54.87754375467087"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1525.1013946533203,
            "unit": "ns",
            "range": "± 13.615899839228659"
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
          "id": "d497a18be8704512a6c9cc3f5b23ea50182e4b46",
          "message": "Improve number display further\n\nReal localization is a bridge too far for now, but getting the numeric separators right is pretty straightforward. It still instinctively feels like ListSeparator is what you'd want for vectors, but System.Numerics uses NumberGroupSeparator internally in its ToString methods. When in Rome...",
          "timestamp": "2023-11-01T02:42:23-04:00",
          "tree_id": "a4aee27841a3d75350042d51fe85afe5ffdd247b",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/d497a18be8704512a6c9cc3f5b23ea50182e4b46"
        },
        "date": 1698821380289,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 116.54849403044757,
            "unit": "ns",
            "range": "± 2.3247969238829547"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 319.0758943557739,
            "unit": "ns",
            "range": "± 4.358170694579584"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4257.235768636067,
            "unit": "ns",
            "range": "± 39.98752494017203"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 19525.115748814173,
            "unit": "ns",
            "range": "± 228.30598260176018"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1876.2518337794713,
            "unit": "ns",
            "range": "± 20.169800368142365"
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
          "id": "0fad60863cd30c644732b8fc765a8e3a1ec43b33",
          "message": "Remove custom Linux launch script\n\nVS Code launch configurations are a nightmare, but I finally found a way to make this work with the stock BizHawk distribution. The technique won't work with --mono-no-redirect, but we'll cross that bridge when we come to it.",
          "timestamp": "2023-11-02T06:38:04-04:00",
          "tree_id": "4dfbdcf1275bbfe23db3003328de928b57645067",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/0fad60863cd30c644732b8fc765a8e3a1ec43b33"
        },
        "date": 1698922004397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 89.76985812187195,
            "unit": "ns",
            "range": "± 0.4024837888924131"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 222.60627405984062,
            "unit": "ns",
            "range": "± 0.46388750882048435"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2636.3494618733725,
            "unit": "ns",
            "range": "± 7.498638855238428"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12501.538555438701,
            "unit": "ns",
            "range": "± 26.800792929929216"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1403.9380264282227,
            "unit": "ns",
            "range": "± 3.5393595687861192"
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
          "id": "c2e2c1af57f3c494b9d1db00e9dc3d5680e6d6a6",
          "message": "Remove custom Linux launch script\n\nVS Code launch configurations are a nightmare, but I finally found a way to make this work with the stock BizHawk distribution. The technique won't work with --mono-no-redirect, but we'll cross that bridge when we come to it.",
          "timestamp": "2023-11-02T06:51:55-04:00",
          "tree_id": "fdbd2e2fdaf8b6e74f2262e4102aa89280f4ff4f",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/c2e2c1af57f3c494b9d1db00e9dc3d5680e6d6a6"
        },
        "date": 1698922542714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 147.83881187438965,
            "unit": "ns",
            "range": "± 1.896419943697554"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 325.3218276160104,
            "unit": "ns",
            "range": "± 5.217210338148287"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 4548.389638264974,
            "unit": "ns",
            "range": "± 60.72065095136966"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 18789.795139857702,
            "unit": "ns",
            "range": "± 261.591961123535"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1933.0572001139324,
            "unit": "ns",
            "range": "± 35.9524335105643"
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
          "id": "510fd06b6d91c2cb94128ed1f76f6769f2f0b4d6",
          "message": "Merge pull request #5 from ItEndsWithTens/feature_streamline_build\n\nUpdate build process",
          "timestamp": "2024-02-18T22:03:35-05:00",
          "tree_id": "450fc628037fca6bf015a0004ac06163b4aa3a00",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/510fd06b6d91c2cb94128ed1f76f6769f2f0b4d6"
        },
        "date": 1708312168515,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 88.91585043498448,
            "unit": "ns",
            "range": "± 0.22849421147472312"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.30637997847336,
            "unit": "ns",
            "range": "± 0.45733003241012005"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2654.0525583120493,
            "unit": "ns",
            "range": "± 5.187304481188852"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12449.127298990885,
            "unit": "ns",
            "range": "± 31.526514612310926"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1393.6574935913086,
            "unit": "ns",
            "range": "± 1.523714485495974"
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
          "id": "362333882a95b62cad31bfdc6ecf4ddf13adab45",
          "message": "Be more formal about Powershell string comparisons",
          "timestamp": "2024-02-21T03:04:23-05:00",
          "tree_id": "cfb13539d5fd1cb1cdf8e9ee6740b3a0e1520e80",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/362333882a95b62cad31bfdc6ecf4ddf13adab45"
        },
        "date": 1708502871722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 88.47864316059993,
            "unit": "ns",
            "range": "± 0.12428309327576205"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.15277658190047,
            "unit": "ns",
            "range": "± 0.12280030529925463"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2633.4183326134316,
            "unit": "ns",
            "range": "± 3.6889976238123854"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12232.969782902645,
            "unit": "ns",
            "range": "± 14.683060081475414"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1387.8224436442058,
            "unit": "ns",
            "range": "± 2.35074659711784"
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
          "id": "bbee9a548383d01059cf1162b650861001686949",
          "message": "Merge pull request #7 from ItEndsWithTens/feature_update_outdated_actions\n\nUpdate outdated Github Actions\r\n\r\n[skip benchmarks]",
          "timestamp": "2024-02-21T04:28:02-05:00",
          "tree_id": "d9505d36675db452cf508dd22c5c313361552217",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/bbee9a548383d01059cf1162b650861001686949"
        },
        "date": 1708507970167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 88.5620007912318,
            "unit": "ns",
            "range": "± 0.11244813574049574"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.45475165049234,
            "unit": "ns",
            "range": "± 0.35759533868919663"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2644.647216796875,
            "unit": "ns",
            "range": "± 3.367346805170858"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12300.632912772042,
            "unit": "ns",
            "range": "± 30.2464182684976"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1410.9117780412946,
            "unit": "ns",
            "range": "± 20.679869226526936"
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
          "id": "f154bcc96761f738022d8d651c9fe9989c3ca586",
          "message": "Fix release notes input name for automatic release steps",
          "timestamp": "2024-02-21T05:01:16-05:00",
          "tree_id": "aba2beb1db6e04991097252f160e96bee7e6377a",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/f154bcc96761f738022d8d651c9fe9989c3ca586"
        },
        "date": 1708509879931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 90.28829251016889,
            "unit": "ns",
            "range": "± 0.3123042702453629"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 226.87959988911948,
            "unit": "ns",
            "range": "± 0.4659635244232526"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2727.541498037485,
            "unit": "ns",
            "range": "± 6.468154007487736"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12706.61370413644,
            "unit": "ns",
            "range": "± 38.37664880722865"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1417.2145462036133,
            "unit": "ns",
            "range": "± 1.9936545089129363"
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
          "id": "0324215fff09132bc935cee8da2f56b7954d48cb",
          "message": "Merge pull request #10 from ItEndsWithTens/feature_enable_sourcelink",
          "timestamp": "2024-02-22T18:36:23-05:00",
          "tree_id": "e6b2ebbb8e0594541cef2070edcdef6ed6256dda",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/0324215fff09132bc935cee8da2f56b7954d48cb"
        },
        "date": 1708645159518,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 81.20896645954677,
            "unit": "ns",
            "range": "± 0.17693635145533293"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 222.2062899516179,
            "unit": "ns",
            "range": "± 0.8944784412209398"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3094.6810404459634,
            "unit": "ns",
            "range": "± 31.86985203357334"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12464.656372070312,
            "unit": "ns",
            "range": "± 22.914815251454428"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1400.1781463623047,
            "unit": "ns",
            "range": "± 2.952366263127983"
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
          "id": "790f7d83dd46055042552756d7f3a3d14346b3e2",
          "message": "Release fly mode captured mouse properly",
          "timestamp": "2024-02-25T14:03:50-05:00",
          "tree_id": "9de3f82af6eaf07d95fee51acc78eafb1f82d178",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/790f7d83dd46055042552756d7f3a3d14346b3e2"
        },
        "date": 1710455132762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 80.70417825992291,
            "unit": "ns",
            "range": "± 0.17807886830804384"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.09265933718,
            "unit": "ns",
            "range": "± 0.3495722427880475"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 2979.7306315104165,
            "unit": "ns",
            "range": "± 20.976485116285186"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12437.114933558873,
            "unit": "ns",
            "range": "± 61.97452056105362"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1390.427371433803,
            "unit": "ns",
            "range": "± 1.1819974295408382"
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
          "id": "5c44d7712994741954c0ad49884e4e97d03fd5a0",
          "message": "Merge branch 'feature_first_person'",
          "timestamp": "2024-03-14T18:53:54-04:00",
          "tree_id": "17b89dad564158335f1cb0d8834cebd5df10dc93",
          "url": "https://github.com/ItEndsWithTens/SilentHillMapExaminer/commit/5c44d7712994741954c0ad49884e4e97d03fd5a0"
        },
        "date": 1710457421276,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "SHME.Benchmarks.Graphics.AabbBenchmarks.AddAabb",
            "value": 79.092382589976,
            "unit": "ns",
            "range": "± 0.1849914225259601"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.CannotSeeOffscreenRenderable",
            "value": 220.02744833628336,
            "unit": "ns",
            "range": "± 0.36016873437748925"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipLineAgainstFrustum",
            "value": 3082.9798017229355,
            "unit": "ns",
            "range": "± 16.361541004752887"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.ClipPolygonAgainstFrustum",
            "value": 12242.969076974052,
            "unit": "ns",
            "range": "± 15.661676581367784"
          },
          {
            "name": "SHME.Benchmarks.Graphics.CameraBenchmarks.SetAngles",
            "value": 1393.4305572509766,
            "unit": "ns",
            "range": "± 3.8932571639796003"
          }
        ]
      }
    ]
  }
}