
#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 3. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (16 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 4. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (10 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 4. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `html`, `css`

---

#### 5. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 6. [How to make it so tab doesn't go to the next text box in HTML?](https://stackoverflow.com/questions/80004679/how-to-make-it-so-tab-doesnt-go-to-the-next-text-box-in-html)
📅 Mon, 21 Sep 2026 13:50:40 GMT
👤 By: AB C | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -6

🏷️ Tags: `javascript`, `html`, `lm-studio`

---

#### 7. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 5

🏷️ Tags: `javascript`, `html`, `css`

---

#### 8. [React input form not rendering](https://stackoverflow.com/questions/80004523/react-input-form-not-rendering)
📅 Mon, 21 Sep 2026 00:07:59 GMT
👤 By: BoJacks JJ | 📌 Source: StackOverflow

Stack Overflow question · 3 answers · score 2

🏷️ Tags: `javascript`, `html`, `reactjs`

---

#### 9. [Why does my 64x64 pixel art DotLottie animation still look blurry even with image-rendering: pixelated and devicePixelRatio: 1?](https://stackoverflow.com/questions/80004539/why-does-my-64x64-pixel-art-dotlottie-animation-still-look-blurry-even-with-imag)
📅 Mon, 21 Sep 2026 02:20:10 GMT
👤 By: Hann Undefined | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -5

🏷️ Tags: `javascript`, `css`, `lottie`

---

#### 10. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (8 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://github.com/kdbhalala/avdslim)
📅 Wed, 16 Sep 2026 06:52:40 GMT
👤 By: kdbhalala | 📌 Source: GitHub

![kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://avatars.githubusercontent.com/u/20184673?v=4)

⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.

🏷️ Tags: `go`, `github`, `open-source`

⭐ Stars: 178

---

#### 7. [Meta&#8217;s Muse is outpacing ChatGPT’s early mobile launch](https://techcrunch.com/2026/09/21/metas-muse-is-outpacing-chatgpts-early-mobile-launch/)
📅 Mon, 21 Sep 2026 19:19:21 GMT
👤 By: Sarah Perez | 📌 Source: TechCrunch

Meta’s new AI agent Muse has racked up more downloads and daily active users in the U.S. and Canada than ChatGPT did over the same period after its mobile debut, according to new estimates from Appfigures.

🏷️ Tags: `AI`, `Apps`, `TC`, `Meta`, `muse`

---

#### 8. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 3. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 7. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 8. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 9. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 10. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

### 🏷️ Database (8 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [Squalk: an old-school forum engine built on Nostr (NIP-29 groups, NIP-7D threads)](https://github.com/dtonon/squalk)
📅 Mon, 21 Sep 2026 14:44:12 GMT
👤 By: daniele | 📌 Source: Lobste.rs

I miss classic forums: slow, asynchronous threads that stay readable and searchable for years, instead of knowledge dissolving into chat scrollback. Squalk is my attempt to rebuild that on top of Nostr, an open protocol where users hold a keypair, posts are signed events, and interchangeable relays store and serve them, instead of a private database.

The design in short: a forum is a view over relay-hosted data. Rooms are groups as specified in NIP-29, threads are NIP-7D events, identity is the user's own keypair. The consequence I care about is that the software and the community are decoupled: any other client speaking the same specs (Flotilla, Nostrord) can read and write the same conversations, and if my deployment disappears the history and identities survive on the relay.

Technical bits that might interest this crowd: one SvelteKit codebase builds either as a static SPA or as a server-rendered Node app; the SSR mode renders only the anonymous view (no keys server-side) so threads are crawlable, with a stale-while-revalidate snapshot cache in front of the relay queries. Content is rendered as djot rather than markdown. Deployment is a NIP-29 relay (Zooid) plus one systemd unit.

Pilot community (real threads, browsable without an account): https://nostr-proto.org  
Test instance where you are welcome to make a mess: https://squalk-test.dtonon.com

Caveats: Nostr is niche, key management is still rough for non-enthusiasts, and relay-side moderation tooling is young.

Feedback on the architecture is welcome!

🏷️ Tags: `distributed`, `show`, `web`

---

#### 3. [Relation algebra is not relational algebra](https://remy.wang/blog/ra-ra.html)
📅 Mon, 21 Sep 2026 17:01:35 GMT
👤 By: aphaelion | 📌 Source: Lobste.rs

Lobste.rs Discussion

🏷️ Tags: `databases`, `math`

---

#### 4. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 5. [How to configure pg to work natively with Temporal.PlainDate?](https://stackoverflow.com/questions/80004520/how-to-configure-pg-to-work-natively-with-temporal-plaindate)
📅 Sun, 20 Sep 2026 22:54:29 GMT
👤 By: hb20007 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `date`, `node-postgres`, `temporal`

---

#### 6. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 7. [Necessary to check if mysql.connector is connected](https://stackoverflow.com/questions/80004612/necessary-to-check-if-mysql-connector-is-connected)
📅 Mon, 21 Sep 2026 10:06:12 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -4

🏷️ Tags: `python`, `mysql-connector`

---

#### 8. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 3. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 4. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 5. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (46 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 3. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 4. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-22 13:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (75 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 4. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 5. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 6. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 7. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 8. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 9. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 10. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

### 🏷️ JavaScript (41 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 8. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 3. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (17 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 4. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (9 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 4. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -5

🏷️ Tags: `javascript`, `html`, `css`

---

#### 5. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 6. [How to make it so tab doesn't go to the next text box in HTML?](https://stackoverflow.com/questions/80004679/how-to-make-it-so-tab-doesnt-go-to-the-next-text-box-in-html)
📅 Mon, 21 Sep 2026 13:50:40 GMT
👤 By: AB C | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -6

🏷️ Tags: `javascript`, `html`, `lm-studio`

---

#### 7. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 5

🏷️ Tags: `javascript`, `html`, `css`

---

#### 8. [React input form not rendering](https://stackoverflow.com/questions/80004523/react-input-form-not-rendering)
📅 Mon, 21 Sep 2026 00:07:59 GMT
👤 By: BoJacks JJ | 📌 Source: StackOverflow

Stack Overflow question · 3 answers · score 2

🏷️ Tags: `javascript`, `html`, `reactjs`

---

#### 9. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (8 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://github.com/kdbhalala/avdslim)
📅 Wed, 16 Sep 2026 06:52:40 GMT
👤 By: kdbhalala | 📌 Source: GitHub

![kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://avatars.githubusercontent.com/u/20184673?v=4)

⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.

🏷️ Tags: `go`, `github`, `open-source`

⭐ Stars: 179

---

#### 7. [Meta&#8217;s Muse is outpacing ChatGPT’s early mobile launch](https://techcrunch.com/2026/09/21/metas-muse-is-outpacing-chatgpts-early-mobile-launch/)
📅 Mon, 21 Sep 2026 19:19:21 GMT
👤 By: Sarah Perez | 📌 Source: TechCrunch

Meta’s new AI agent Muse has racked up more downloads and daily active users in the U.S. and Canada than ChatGPT did over the same period after its mobile debut, according to new estimates from Appfigures.

🏷️ Tags: `AI`, `Apps`, `TC`, `Meta`, `muse`

---

#### 8. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 3. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 7. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 8. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 9. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 10. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

### 🏷️ Database (4 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 4. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 3. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 4. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 5. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (46 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 3. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 4. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-22 17:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (75 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 4. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 5. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 6. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 7. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 8. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 9. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

#### 10. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

### 🏷️ JavaScript (39 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 8. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 3. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 4. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 5. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [A developer goes to a DevOps conference](https://www.darkcoding.net/software/a-developer-goes-to-a-devops-conference/)
📅 Sat, 28 Sep 2019 15:43:04 GMT
👤 By: fanf2 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (8 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 4. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 5. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -7

🏷️ Tags: `javascript`, `html`, `css`

---

#### 6. [How to make it so tab doesn't go to the next text box in HTML?](https://stackoverflow.com/questions/80004679/how-to-make-it-so-tab-doesnt-go-to-the-next-text-box-in-html)
📅 Mon, 21 Sep 2026 13:50:40 GMT
👤 By: AB C | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -6

🏷️ Tags: `javascript`, `html`, `lm-studio`

---

#### 7. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 4

🏷️ Tags: `javascript`, `html`, `css`

---

#### 8. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (8 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://github.com/kdbhalala/avdslim)
📅 Wed, 16 Sep 2026 06:52:40 GMT
👤 By: kdbhalala | 📌 Source: GitHub

![kdbhalala/avdslim - ⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.](https://avatars.githubusercontent.com/u/20184673?v=4)

⚡ Drop Android Virtual Device (AVD) emulator RAM from ~8GB to ~1.5GB on Apple Silicon & Linux. Inspired by simslim.

🏷️ Tags: `go`, `github`, `open-source`

⭐ Stars: 180

---

#### 7. [Correct tags to make hamburger menu open on iOS](https://stackoverflow.com/questions/80004950/correct-tags-to-make-hamburger-menu-open-on-ios)
📅 Tue, 22 Sep 2026 12:17:32 GMT
👤 By: Silent Takudzwa | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `ios`, `mobile`, `responsive-design`

---

#### 8. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 3. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 7. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 8. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 9. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 10. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

### 🏷️ Database (4 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 4. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (14 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 3. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 4. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 5. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 6. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Insecure vehicles should be banned, not security tools like the Flipper Zero](https://saveflipper.ca/)
📅 Wed, 21 Feb 2024 11:20:49 GMT
👤 By: pabs3 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (45 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 4. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-22 21:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (74 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 4. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 5. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 6. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 7. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 8. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 9. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

#### 10. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

### 🏷️ JavaScript (39 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 8. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 3. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 4. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 5. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [A developer goes to a DevOps conference](https://www.darkcoding.net/software/a-developer-goes-to-a-devops-conference/)
📅 Sat, 28 Sep 2019 15:43:04 GMT
👤 By: fanf2 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (8 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 4. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 5. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -7

🏷️ Tags: `javascript`, `html`, `css`

---

#### 6. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 4

🏷️ Tags: `javascript`, `html`, `css`

---

#### 7. [How to make it so tab doesn't go to the next text box in HTML?](https://stackoverflow.com/questions/80004679/how-to-make-it-so-tab-doesnt-go-to-the-next-text-box-in-html)
📅 Mon, 21 Sep 2026 13:50:40 GMT
👤 By: AB C | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -6

🏷️ Tags: `javascript`, `html`, `lm-studio`

---

#### 8. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (7 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [Correct tags to make hamburger menu open on iOS](https://stackoverflow.com/questions/80004950/correct-tags-to-make-hamburger-menu-open-on-ios)
📅 Tue, 22 Sep 2026 12:17:32 GMT
👤 By: Silent Takudzwa | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `ios`, `mobile`, `responsive-design`

---

#### 7. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 2. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 3. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 7. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 8. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 9. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 10. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

### 🏷️ Database (4 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 4. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (17 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 3. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 4. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 5. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 6. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Insecure vehicles should be banned, not security tools like the Flipper Zero](https://saveflipper.ca/)
📅 Wed, 21 Feb 2024 11:20:49 GMT
👤 By: pabs3 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (45 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 4. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-23 0:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (74 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 3. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 6. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 7. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 8. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 9. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 10. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

### 🏷️ JavaScript (39 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 8. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 3. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 4. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 5. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [A developer goes to a DevOps conference](https://www.darkcoding.net/software/a-developer-goes-to-a-devops-conference/)
📅 Sat, 28 Sep 2019 15:43:04 GMT
👤 By: fanf2 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (8 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [How to use array.prototype.every to check if all audio files are muted](https://stackoverflow.com/questions/80005069/how-to-use-array-prototype-every-to-check-if-all-audio-files-are-muted)
📅 Tue, 22 Sep 2026 20:14:20 GMT
👤 By: camwormy | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -1

🏷️ Tags: `javascript`, `html`, `arrays`

---

#### 4. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 5. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 6. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -7

🏷️ Tags: `javascript`, `html`, `css`

---

#### 7. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 4

🏷️ Tags: `javascript`, `html`, `css`

---

#### 8. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (7 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [Correct tags to make hamburger menu open on iOS](https://stackoverflow.com/questions/80004950/correct-tags-to-make-hamburger-menu-open-on-ios)
📅 Tue, 22 Sep 2026 12:17:32 GMT
👤 By: Silent Takudzwa | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `ios`, `mobile`, `responsive-design`

---

#### 7. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 3. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 4. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 7. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 8. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 9. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 10. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

### 🏷️ Database (4 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 4. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (16 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 3. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 4. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 5. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 6. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Insecure vehicles should be banned, not security tools like the Flipper Zero](https://saveflipper.ca/)
📅 Wed, 21 Feb 2024 11:20:49 GMT
👤 By: pabs3 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (45 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 4. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 5. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-23 2:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (77 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 3. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 6. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 7. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 8. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 9. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

#### 10. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

### 🏷️ JavaScript (39 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 8. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
📅 Thu, 30 Jan 2025 11:28:31 GMT
👤 By: SigmundurM | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5)
📅 Sun, 13 Sep 2026 18:25:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite%2Fmain%2Fdocs%2Fdevto-cover.57272bb7.jpg)

The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.

🏷️ Tags: `mcp`, `python`, `gemini`, `claudecode`

---

#### 3. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 4. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 7. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 4. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 5. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [A developer goes to a DevOps conference](https://www.darkcoding.net/software/a-developer-goes-to-a-devops-conference/)
📅 Sat, 28 Sep 2019 15:43:04 GMT
👤 By: fanf2 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (7 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 3. [How to use array.prototype.every to check if all audio files are muted](https://stackoverflow.com/questions/80005069/how-to-use-array-prototype-every-to-check-if-all-audio-files-are-muted)
📅 Tue, 22 Sep 2026 20:14:20 GMT
👤 By: camwormy | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -1

🏷️ Tags: `javascript`, `html`, `arrays`

---

#### 4. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -2

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 5. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 6. [how do i make button hover use my custom `:root` color instead of bootstrap’s default?](https://stackoverflow.com/questions/80004807/how-do-i-make-button-hover-use-my-custom-root-color-instead-of-bootstrap-s-de)
📅 Tue, 22 Sep 2026 00:15:18 GMT
👤 By: Lance | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -7

🏷️ Tags: `javascript`, `html`, `css`

---

#### 7. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (8 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 4. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [droidrun/mobile-jev - GitHub Repository](https://github.com/droidrun/mobile-jev)
📅 Thu, 17 Sep 2026 10:41:01 GMT
👤 By: droidrun | 📌 Source: GitHub

![droidrun/mobile-jev - GitHub Repository](https://avatars.githubusercontent.com/u/207381488?v=4)

Trending GitHub Repository

🏷️ Tags: `javascript`, `github`, `open-source`

⭐ Stars: 353

---

#### 7. [Correct tags to make hamburger menu open on iOS](https://stackoverflow.com/questions/80004950/correct-tags-to-make-hamburger-menu-open-on-ios)
📅 Tue, 22 Sep 2026 12:17:32 GMT
👤 By: Silent Takudzwa | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `ios`, `mobile`, `responsive-design`

---

#### 8. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (18 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 3. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 4. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 7. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 8. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 9. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 10. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

### 🏷️ Database (5 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [PyMySQL pool - how to close pool cleanly](https://stackoverflow.com/questions/80005085/pymysql-pool-how-to-close-pool-cleanly)
📅 Tue, 22 Sep 2026 22:16:03 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score 1

🏷️ Tags: `python`, `pymysql`

---

#### 4. [Subclassing mysql.connector](https://stackoverflow.com/questions/80004790/subclassing-mysql-connector)
📅 Mon, 21 Sep 2026 21:38:07 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -8

🏷️ Tags: `python`, `mysql-connector`

---

#### 5. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (15 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 3. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 4. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 5. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 6. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Insecure vehicles should be banned, not security tools like the Flipper Zero](https://saveflipper.ca/)
📅 Wed, 21 Feb 2024 11:20:49 GMT
👤 By: pabs3 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (45 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 9. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 10. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---



## 📰 DevTech News — 2026-09-23 7:00 CAT

_Comprehensive update with 10 categories_

---

### 🏷️ AI (81 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 3. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 4. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 5. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 6. [Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l)
📅 Thu, 10 Sep 2026 18:51:51 GMT
👤 By: xbill | 📌 Source: Dev.to

![Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Flocal-llamacpp-1650ti-2b-q4_0%2Fdocs%2Fdevto-cover.225eaada.jpg)

Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.

🏷️ Tags: `gemma`, `llamacpp`, `mcp`, `cuda`

---

#### 7. [20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii)
📅 Thu, 03 Sep 2026 06:44:57 GMT
👤 By: Sylwia Laskowska | 📌 Source: Dev.to

![20 Agentic AI Terms Every Developer Should Know (Explained Simply)](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fez62u2w0ldk0fec35ytb.png)

Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...

🏷️ Tags: `ai`, `agents`, `mcp`, `beginners`

---

#### 8. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 9. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 10. [What Happens When AI Outgrows the Tests We Use to Measure It?](https://dev.to/hemapriya_kanagala/what-happens-when-ai-outgrows-the-tests-we-use-to-measure-it-30al)
📅 Mon, 14 Sep 2026 17:12:10 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![What Happens When AI Outgrows the Tests We Use to Measure It?](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmbizy1bvs5mibcqzbtyo.jpeg)

TL;DR  GPT-6 Astra has started another familiar AI conversation. The model is more capable, Jensen...

🏷️ Tags: `discuss`, `ai`, `programming`, `chatgpt`

---

### 🏷️ JavaScript (40 articles)

#### 1. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 2. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 3. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 4. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 5. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 6. [I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg)
📅 Thu, 03 Sep 2026 15:24:18 GMT
👤 By: Hemapriya Kanagala | 📌 Source: Dev.to

![I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fbo9j0oe35ihh9hrf946q.jpeg)

TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...

🏷️ Tags: `discuss`, `aws`, `beginners`, `agents`

---

#### 7. [Firebase AI Logic in Angular: Client-Side Gemini Without a Custom Backend](https://dev.to/gde/firebase-ai-logic-in-angular-client-side-gemini-without-a-custom-backend-54eh)
📅 Wed, 16 Sep 2026 17:18:58 GMT
👤 By: Wayne Gakuo | 📌 Source: Dev.to

![Firebase AI Logic in Angular: Client-Side Gemini Without a Custom Backend](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Frejp8sl1nygg5ai2goq8.png)

Since I last wrote Building AI-powered e-commerce applications using Angular &amp; Firebase AI Logic...

🏷️ Tags: `ai`, `firebase`, `gemini`, `angular`

---

#### 8. [Yarn – A new package manager for JavaScript](https://code.facebook.com/posts/1840075619545360)
📅 Tue, 11 Oct 2016 15:00:38 GMT
👤 By: cpojer | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 9. [A spreadsheet in fewer than 30 lines of JavaScript, no library used](http://jsfiddle.net/ondras/hYfN3/)
📅 Wed, 13 Nov 2013 14:38:18 GMT
👤 By: ondras | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 10. [Bun: Fast JavaScript runtime, transpiler, and NPM client written in Zig](https://bun.sh/?launch)
📅 Tue, 05 Jul 2022 20:41:53 GMT
👤 By: firloop | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

### 🏷️ Python (40 articles)

#### 1. [A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://dev.to/wataru_suda_d295dab9cca4f/a-16-second-clock-drift-falsely-tripped-my-trading-bots-kill-switch-a-postmortem-4k2f)
📅 Sun, 20 Sep 2026 23:30:02 GMT
👤 By: Wataru Suda | 📌 Source: Dev.to

![A 16-second clock drift falsely tripped my trading bot's kill switch. A postmortem.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh1l5xf073uexr79dibku.png)

My PC clock ran 16 seconds ahead of the exchange. Signature validation failed, a "helpful" fallback computed equity from a paper balance, and the bot declared a 58% drawdown. No orders were sent. Here is the chain of events and the two fixes.

🏷️ Tags: `python`, `debugging`, `api`, `postmortem`

---

#### 2. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 3. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 4. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 5. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 6. [Cross Cloud A2A Agent Card Field Comparison](https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod)
📅 Thu, 27 Aug 2026 15:00:08 GMT
👤 By: xbill | 📌 Source: Dev.to

![Cross Cloud A2A Agent Card Field Comparison](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fmulticloud-agentcard%2Fmaster%2Fdocs%2Farticle-header.jpg)

Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...

🏷️ Tags: `a2a`, `multicloud`, `ai`, `python`

---

#### 7. [Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys](https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9)
📅 Thu, 17 Sep 2026 21:36:22 GMT
👤 By: xbill | 📌 Source: Dev.to

![Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-vllm-mi300x-2b%2Fdevto-dollar-hour-cover.02475528.jpg)

A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.

🏷️ Tags: `amd`, `vllm`, `rocm`, `machinelearning`

---

#### 8. [A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://dev.to/gde/a-4-gb-laptop-gpu-beats-a-12-core-cpu-by-43x-on-gemma-4-4150)
📅 Wed, 16 Sep 2026 20:03:02 GMT
👤 By: xbill | 📌 Source: Dev.to

![A 4 GB Laptop GPU Beats a 12-Core CPU by 4.3x on Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fdocs%2Fcpu-vs-1650ti%2Fdevto-cover.274ec661.jpg)

Serving Gemma 4 E2B q4_0 through llama.cpp on one laptop, twice: CPU-only and on a 2021-era 4 GB GTX 1650 Ti. Same GGUF, same binary, same prompts, one flag apart. The card takes decode by 4.3x, and needs only 1598 MiB to do it.

🏷️ Tags: `machinelearning`, `gpu`, `benchmarking`, `python`

---

#### 9. [Step up to the Sheets: AI Eval Export and Illustrating Data](https://dev.to/googleai/step-up-to-the-sheets-ai-eval-export-and-illustrating-data-bak)
📅 Tue, 01 Sep 2026 07:00:00 GMT
👤 By: Katie McLaughlin | 📌 Source: Dev.to

![Step up to the Sheets: AI Eval Export and Illustrating Data](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fkb3dzrpfzj6sw50bi0q5.webp)

Welcome to part three of our series about designing, analyzing and visualizing AI Evals! As with the...

🏷️ Tags: `ai`, `python`, `datascience`, `productivity`

---

#### 10. [Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://dev.to/gde/taking-advantage-of-cloud-run-sandboxes-with-google-apps-script-for-google-workspace-5fc5)
📅 Thu, 10 Sep 2026 02:43:19 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Taking Advantage of Cloud Run Sandboxes with Google Apps Script for Google Workspace](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fklhc7kkq2althrawzb4l.png)

Deterministic Sub-Second Python and Bash Execution, Zero-Trust gVisor Isolation, and Zero...

🏷️ Tags: `googleappsscript`, `googlecloud`, `googlecloudrun`, `googleworkspace`

---

### 🏷️ DevOps (16 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b)
📅 Mon, 14 Sep 2026 00:57:31 GMT
👤 By: xbill | 📌 Source: Dev.to

![Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fapple-container-debian-tips%2Fmain%2Fdocs%2Farticle%2Fdevto-cover.9231382f.jpg)

Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.

🏷️ Tags: `debian`, `macos`, `ollama`, `linux`

---

#### 3. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

#### 4. [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b)
📅 Fri, 11 Sep 2026 06:58:39 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_autoscaling_cover.jpg)

Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

🏷️ Tags: `devops`, `docker`, `go`, `cloud`

---

#### 5. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 6. [The Big DevOps Misunderstanding](https://wolfoliver.medium.com/the-big-devops-misunderstanding-8435a910a5fd)
📅 Sun, 19 Dec 2021 20:07:33 GMT
👤 By: WolfOliver | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 7. [Knightmare: A DevOps Cautionary Tale (2014)](https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/)
📅 Sun, 10 Sep 2023 20:07:12 GMT
👤 By: sathishmanohar | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 8. [DevOps Is Bullshit (2022)](https://blog.massdriver.cloud/posts/devops-is-bullshit/)
📅 Fri, 16 Jun 2023 10:00:42 GMT
👤 By: dijit | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 9. [Ask HN: If Kubernetes is the solution, why are there so many DevOps jobs?](https://news.ycombinator.com/item?id=31580763)
📅 Wed, 01 Jun 2022 12:19:43 GMT
👤 By: picozeta | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 10. [DevOps is broken](https://blog.massdriver.cloud/devops-is-bullshit)
📅 Thu, 20 Oct 2022 14:16:22 GMT
👤 By: davydog187 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

### 🏷️ WebDev (8 articles)

#### 1. [Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://dev.to/nyaomaru/learn-trapping-rain-water-top-k-frequent-and-selection-sort-with-step-by-step-visualization-in-dsa-1flg)
📅 Wed, 09 Sep 2026 12:48:25 GMT
👤 By: nyaomaru | 📌 Source: Dev.to

![Learn Trapping Rain Water, Top K Frequent and Selection Sort with Step-by-Step Visualization in DSA View View 👀👀](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fwd59j28cprjydaocra6z.gif)

Hoi hoi!  I’m @nyaomaru, a frontend engineer who has been obsessed with ramen lately. 😸🍜  Have you...

🏷️ Tags: `typescript`, `algorithms`, `opensource`, `dsa`

---

#### 2. [Firebase AI Logic in Angular: Client-Side Gemini Without a Custom Backend](https://dev.to/gde/firebase-ai-logic-in-angular-client-side-gemini-without-a-custom-backend-54eh)
📅 Wed, 16 Sep 2026 17:18:58 GMT
👤 By: Wayne Gakuo | 📌 Source: Dev.to

![Firebase AI Logic in Angular: Client-Side Gemini Without a Custom Backend](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Frejp8sl1nygg5ai2goq8.png)

Since I last wrote Building AI-powered e-commerce applications using Angular &amp; Firebase AI Logic...

🏷️ Tags: `ai`, `firebase`, `gemini`, `angular`

---

#### 3. [How to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
📅 Thu, 02 Apr 2020 12:29:04 GMT
👤 By: velmu | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `JavaScript`

---

#### 4. [How to use array.prototype.every to check if all audio files are muted](https://stackoverflow.com/questions/80005069/how-to-use-array-prototype-every-to-check-if-all-audio-files-are-muted)
📅 Tue, 22 Sep 2026 20:14:20 GMT
👤 By: camwormy | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score 0

🏷️ Tags: `javascript`, `html`, `arrays`

---

#### 5. [Modifying elements of SVG image as background-image property](https://stackoverflow.com/questions/80004801/modifying-elements-of-svg-image-as-background-image-property)
📅 Mon, 21 Sep 2026 22:58:06 GMT
👤 By: Marcus M&#252;ller | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score -3

🏷️ Tags: `javascript`, `html`, `svg`, `background-image`

---

#### 6. [Trouble with getting RGB data from getImageData()](https://stackoverflow.com/questions/80004749/trouble-with-getting-rgb-data-from-getimagedata)
📅 Mon, 21 Sep 2026 19:00:35 GMT
👤 By: MijiGamin1 | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 0

🏷️ Tags: `javascript`, `html`

---

#### 7. [Toggle tab panes using onclick](https://stackoverflow.com/questions/80004333/toggle-tab-panes-using-onclick)
📅 Sat, 19 Sep 2026 19:17:23 GMT
👤 By: lunaregemini | 📌 Source: StackOverflow

Stack Overflow question · 6 answers · score 4

🏷️ Tags: `javascript`, `html`, `css`

---

#### 8. [How to Build a Bulk Image Compressor Tool with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/how-to-build-a-bulk-image-compressor-tool-with-html-css-and-javascript/)
📅 Fri, 18 Sep 2026 15:47:01 GMT
👤 By: Bansidhar Kadiya | 📌 Source: freeCodeCamp

High-resolution images look great, but they can significantly slow down page load times and consume massive amounts of storage. While backend compression tools are common, building a client-side image

🏷️ Tags: `JavaScript`, `Web Development`

---

### 🏷️ Mobile (8 articles)

#### 1. [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)
📅 Sun, 20 Sep 2026 20:03:10 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2k3pdkwhv7eywa1crtek.png)

How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

🏷️ Tags: `dart`, `flutter`, `architecture`, `programming`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250)
📅 Fri, 11 Sep 2026 01:51:14 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![The Symmetry of State: Why Flutter Deserves context.value and context.state](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fau9a487wkx7hj8p3vjnx.png)

Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

🏷️ Tags: `flutter`, `dart`, `architecture`, `programming`

---

#### 4. [Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b)
📅 Sun, 20 Sep 2026 20:43:19 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffw8le2p5j1fub3d43p3q.png)

How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.

🏷️ Tags: `dart`, `flutter`, `architecture`, `concurrency`

---

#### 5. [Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://dev.to/gde/grand-central-station-why-bloc-riverpod-and-blocsignal-are-now-true-peers-3fd8)
📅 Sun, 30 Aug 2026 01:27:54 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Grand Central Station: Why BLoC, Riverpod, and BlocSignal Are Now True Peers](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Ffu728ez4tgy4t4kgg937.png)

Discover why Flutter state management is no longer an all-or-nothing choice. Explore how BlocSignal, Classic BLoC, and Riverpod now operate as first-class bidirectional peers at the Grand Central State Terminal.

🏷️ Tags: `flutter`, `dart`, `riverpod`, `architecture`

---

#### 6. [droidrun/mobile-jev - GitHub Repository](https://github.com/droidrun/mobile-jev)
📅 Thu, 17 Sep 2026 10:41:01 GMT
👤 By: droidrun | 📌 Source: GitHub

![droidrun/mobile-jev - GitHub Repository](https://avatars.githubusercontent.com/u/207381488?v=4)

Trending GitHub Repository

🏷️ Tags: `javascript`, `github`, `open-source`

⭐ Stars: 358

---

#### 7. [Correct tags to make hamburger menu open on iOS](https://stackoverflow.com/questions/80004950/correct-tags-to-make-hamburger-menu-open-on-ios)
📅 Tue, 22 Sep 2026 12:17:32 GMT
👤 By: Silent Takudzwa | 📌 Source: StackOverflow

Stack Overflow question · 0 answers · score -3

🏷️ Tags: `javascript`, `ios`, `mobile`, `responsive-design`

---

#### 8. [The iOS NFC Handbook: How to Read, Write and Lock NFC Tags with React Native](https://www.freecodecamp.org/news/the-ios-nfc-handbook-how-to-read-write-and-lock-nfc-tags-with-react-native/)
📅 Sat, 19 Sep 2026 17:15:45 GMT
👤 By: Farouq Seriki | 📌 Source: freeCodeCamp

Hold an iPhone near a sticker and something happens. A business card lands in your contacts, a focus session ends, or a door opens. The chip costs about twenty pence and holds roughly a hundred and th

🏷️ Tags: `React Native`, `iOS`, `Swift`, `Mobile Development`, `TypeScript`

---

### 🏷️ Cloud (19 articles)

#### 1. [Claude Opus 5.5 is now available on Google Cloud](https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh)
📅 Tue, 22 Sep 2026 17:48:24 GMT
👤 By: Jen Harvey | 📌 Source: Dev.to

![Claude Opus 5.5 is now available on Google Cloud](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5jtt33mr439wwucin75o.png)

Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...

🏷️ Tags: `claude`, `googlecloud`

---

#### 2. [An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://dev.to/gde/an-mi300x-over-mcp-what-the-matrix-cores-execute-and-what-they-dont-1me9)
📅 Thu, 17 Sep 2026 02:43:18 GMT
👤 By: xbill | 📌 Source: Dev.to

![An MI300X Over MCP: What the Matrix Cores Execute, and What They Don't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Famd-gputools%2Fmain%2Fdevto-cover.403ae80c.jpg)

One AMD Instinct MI300X on AMD Developer Cloud, managed entirely through a tag-scoped Python MCP server, with every figure read off the card rather than a spec sheet. fp8 e4m3fnuz runs 1.77x bf16; int8, which AMD rates identically to fp8, runs 0.69x; fp4 is not on this silicon at all. One droplet, $1.99 an hour, and two readings that were wrong the first time.

🏷️ Tags: `amd`, `mcp`, `rocm`, `machinelearning`

---

#### 3. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 4. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 5. [2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3)
📅 Thu, 10 Sep 2026 18:31:29 GMT
👤 By: xbill | 📌 Source: Dev.to

![2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-2B-cloudrun-devops-agent%2Fdocs%2Fdeploy%2Fdevto-cover.24212670.jpg)

Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.

🏷️ Tags: `mcp`, `gemma`, `googlecloud`, `claudecode`

---

#### 6. [Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://dev.to/gde/valid-schema-wrong-content-using-jev-to-guard-a-google-adk-agent-57o6)
📅 Sat, 19 Sep 2026 16:39:25 GMT
👤 By: JimmyLiao | 📌 Source: Dev.to

![Valid Schema, Wrong Content: Using Jev to Guard a Google ADK Agent](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5a72kpxcffbw2sjqlaoc.png)

Schema-valid is not content-correct · Part 1/3           It starts with a storyboard a...

🏷️ Tags: `googlecloud`, `adk`, `jev`, `ai`

---

#### 7. [How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke)
📅 Wed, 16 Sep 2026 10:15:52 GMT
👤 By: bebechien | 📌 Source: Dev.to

![How we built a desktop companion robot with Gemma 4 and Raspberry Pi](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fbebechien.github.io%2Fcozy-corner-future%2Fimages%2Fhow-we-built-a-desktop-companion-robot.png)

The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.

🏷️ Tags: `raspberrypi`, `gemma`, `gemini`, `robotics`

---

#### 8. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 9. [Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg)
📅 Tue, 08 Sep 2026 05:06:23 GMT
👤 By: Tanaike | 📌 Source: Dev.to

![Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F5d6ti7gc9w5ljbbfgf6a.png)

Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...

🏷️ Tags: `googleworkspace`, `googlecloud`, `bigquery`, `apacheiceberg`

---

#### 10. [Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l)
📅 Thu, 27 Aug 2026 17:56:45 GMT
👤 By: Olivier Bourgeois | 📌 Source: Dev.to

![Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F2jcp2qyptueri8fhzcp7.png)

Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.

🏷️ Tags: `kubernetes`, `ai`, `gke`, `googlecloud`

---

### 🏷️ Database (4 articles)

#### 1. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 2. [How can I use a composite IN query with Postgres.js?](https://stackoverflow.com/questions/80004727/how-can-i-use-a-composite-in-query-with-postgres-js)
📅 Mon, 21 Sep 2026 16:34:43 GMT
👤 By: erkanunluturk | 📌 Source: StackOverflow

Stack Overflow question · 2 answers · score 1

🏷️ Tags: `javascript`, `postgresql`, `postgres.js`

---

#### 3. [PyMySQL pool - how to close pool cleanly](https://stackoverflow.com/questions/80005085/pymysql-pool-how-to-close-pool-cleanly)
📅 Tue, 22 Sep 2026 22:16:03 GMT
👤 By: NickC | 📌 Source: StackOverflow

Stack Overflow question · 1 answers · score 2

🏷️ Tags: `python`, `pymysql`

---

#### 4. [How to Migrate a Legacy Monolith Incrementally Without a Big-Bang Rewrite](https://www.freecodecamp.org/news/migrate-legacy-monolith-incrementally/)
📅 Thu, 17 Sep 2026 23:27:03 GMT
👤 By: Hugo Teijiz | 📌 Source: freeCodeCamp

Large legacy migrations often fail long before the final cutover. The failure usually starts when the migration is framed as a single event. Move the application. Move the database. Move all the users

🏷️ Tags: `legacy code`, `software architecture`, `migration`, `refactoring`, `Artificial Intelligence`

---

### 🏷️ Security (17 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://dev.to/alisterbaroi/an-ai-agent-is-just-a-while-loop-i-built-one-in-70-lines-of-python-then-tricked-it-into-leaking-4ehf)
📅 Mon, 07 Sep 2026 15:57:07 GMT
👤 By: Alister Baroi | 📌 Source: Dev.to

![An AI agent is just a while loop. I built one in 70 lines of Python, then tricked it into leaking my .env](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fcnr2836ebojkn1sw2gc7.png)

Every framework, every job posting, and about half of LinkedIn wants to tell you what an "AI agent"...

🏷️ Tags: `ai`, `python`, `security`, `beginners`

---

#### 3. [The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf)
📅 Thu, 17 Sep 2026 09:57:31 GMT
👤 By: Mario Ezquerro | 📌 Source: Dev.to

![The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fmario-ezquerro%2Fgubernator%2Fmain%2Farticles%2Fimages%2Fgubernator_security_compliance_dora_cover.jpg)

Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.

🏷️ Tags: `security`, `devops`, `docker`, `kubernetes`

---

#### 4. [Bypassing airport security via SQL injection](https://ian.sh/tsa)
📅 Thu, 29 Aug 2024 15:53:08 GMT
👤 By: iancarroll | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 5. [LastPass says DevOps engineer’s hacked computer led to security breach in 2022](https://9to5mac.com/2023/02/27/lastpass-devops-engineers-hacked/)
📅 Tue, 28 Feb 2023 03:21:53 GMT
👤 By: mikece | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `DevOps`

---

#### 6. [Ask HN: I’m an FCC Commissioner proposing regulation of IoT security updates](https://news.ycombinator.com/item?id=37392676)
📅 Tue, 05 Sep 2023 15:07:21 GMT
👤 By: SimingtonFCC | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 7. [U.S. national-security leaders included me in a group chat](https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/)
📅 Mon, 24 Mar 2025 16:23:55 GMT
👤 By: _tk_ | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 8. [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
📅 Fri, 21 Feb 2025 15:05:24 GMT
👤 By: helsinkiandrew | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 9. [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
📅 Tue, 21 Jul 2026 20:09:52 GMT
👤 By: mfiguiere | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

#### 10. [Ask HN: Gmail account security](https://news.ycombinator.com/item?id=30051054)
📅 Sun, 23 Jan 2022 22:15:25 GMT
👤 By: caseyf7 | 📌 Source: HackerNews

HackerNews Discussion

🏷️ Tags: `Security`

---

### 🏷️ Tools (47 articles)

#### 1. [Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4)
📅 Sun, 20 Sep 2026 13:44:05 GMT
👤 By: Jitendra Gupta | 📌 Source: Dev.to

![Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1%2AzWubiPyAk5YCdtX9j1_mUA.png)

A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.

🏷️ Tags: `ai`, `devsecops`, `github`, `security`

---

#### 2. [Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif)
📅 Sun, 20 Sep 2026 19:48:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fx204wt36b3p53pnf950f.png)

Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.

🏷️ Tags: `dart`, `flutter`, `testing`, `architecture`

---

#### 3. [Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd)
📅 Sat, 19 Sep 2026 01:56:39 GMT
👤 By: Randal L. Schwartz | 📌 Source: Dev.to

![Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fqwed3lsgbikup1qr2wt5.png)

Why LLMs fail in production, why "more RLHF" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.

🏷️ Tags: `ai`, `programming`, `architecture`, `productivity`

---

#### 4. [How AI Actually Calls an API? Tool Calling Explained from Scratch](https://dev.to/aws/how-ai-actually-calls-an-api-tool-calling-explained-from-scratch-4lf8)
📅 Wed, 16 Sep 2026 21:28:40 GMT
👤 By: Rohini Gaonkar | 📌 Source: Dev.to

![How AI Actually Calls an API? Tool Calling Explained from Scratch](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fmhtvo6zedugelnfp6o2v.png)

In the previous post, we taught a model to read our documents. It could search a pile of files and...

🏷️ Tags: `ai`, `mcp`, `aws`, `tutorial`

---

#### 5. [One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)
📅 Sun, 20 Sep 2026 20:30:58 GMT
👤 By: xbill | 📌 Source: Dev.to

![One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-mcp-seven-catalogs%2Fcover.5c69639b.jpg)

Step by step: one Python MCP server with four read-only Apache Iceberg tools, pointed at Polaris, BigLake, OneLake, Glue, S3 Tables and Horizon by changing one environment variable. All four tools work on all six. What changes per catalog is the login, the storage package, and one Azure credential that takes 553 seconds.

🏷️ Tags: `mcp`, `iceberg`, `python`, `dataengineering`

---

#### 6. [Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://dev.to/gde/four-iceberg-tools-three-agent-frameworks-what-ports-and-what-doesnt-a5g)
📅 Wed, 16 Sep 2026 02:20:49 GMT
👤 By: xbill | 📌 Source: Dev.to

![Four Iceberg Tools, Three Agent Frameworks: What Ports, and What Doesn't](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Flakehouse-iceberg-2026%2Fmain%2Fpapers%2Ficeberg-agent-three-clouds%2Fcover.30ed1e97.jpg)

Four read-only Apache Iceberg tools bound into Google ADK, AWS Strands and Microsoft Agent Framework, run against five catalogs, 360 timed runs. Building the agent ports and running it does not; speed follows the model and how much it writes; the storage wiring under the tools is the per-cloud work.

🏷️ Tags: `iceberg`, `aiagents`, `lakehouse`, `dataengineering`

---

#### 7. [Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://dev.to/gde/nano-banana-2-lite-in-kiro-cli-3-mcp-20-the-new-interactions-api-and-headless-permissions-3faj)
📅 Tue, 15 Sep 2026 16:32:21 GMT
👤 By: xbill | 📌 Source: Dev.to

![Nano Banana 2 Lite in Kiro CLI 3: MCP 2.0, the New Interactions API, and Headless Permissions](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fnb2lite-kiro%2Fmain%2Fdocs%2Fdevto-cover.1bc9f155.jpg)

The Kiro edition of the Nano Banana 2 Lite MCP server, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and Kiro CLI 3 needs a permissions rule before it will call the tools headless.

🏷️ Tags: `kiro`, `mcp`, `gemini`, `python`

---

#### 8. [Progressive Disclosure: What, Where, When, and Why](https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3)
📅 Wed, 16 Sep 2026 18:01:55 GMT
👤 By:  Gábor Mészáros | 📌 Source: Dev.to

![Progressive Disclosure: What, Where, When, and Why](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2F7x9oaexydefrqmsnmjka.png)

Do you remember when we first started using AGENTS.md files?   You would have a project root file...

🏷️ Tags: `ai`, `claude`, `performance`, `productivity`

---

#### 9. [🧩 Don't make Tech your entire personality.](https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc)
📅 Tue, 15 Sep 2026 10:46:53 GMT
👤 By: Tanay Dwivedi | 📌 Source: Dev.to

![🧩 Don't make Tech your entire personality.](https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fxet3n6gavmvob5dfz772.png)

This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...

🏷️ Tags: `productivity`, `webdev`, `ai`, `javascript`

---

#### 10. [Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys](https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9)
📅 Thu, 17 Sep 2026 21:36:22 GMT
👤 By: xbill | 📌 Source: Dev.to

![Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fxbill9%2Fgemma4-dev%2Fmain%2Fgpu-vllm-mi300x-2b%2Fdevto-dollar-hour-cover.02475528.jpg)

A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.

🏷️ Tags: `amd`, `vllm`, `rocm`, `machinelearning`

---

