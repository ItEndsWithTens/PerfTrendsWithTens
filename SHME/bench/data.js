window.BENCHMARK_DATA = {
  "lastUpdate": 1698255058406,
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
      }
    ]
  }
}