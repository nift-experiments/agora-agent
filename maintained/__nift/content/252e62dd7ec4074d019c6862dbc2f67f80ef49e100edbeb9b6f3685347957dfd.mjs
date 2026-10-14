import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Run the R1 demo",
  description: "Build a local Python voice agent, expose it with ngrok, compile BK7258 firmware, and flash it to the R1 device."
};
export let _markdown = `

Use this workshop flow when you want to build a voice-first AI companion locally, then connect an R1 device to that agent through the BK7258 firmware workflow.

## What you will build [#what-you-will-build]

By the end of this workshop, you will have:

* A local Python-backed Conversational AI quickstart running on your computer
* A browser demo exposed through an ngrok tunnel
* A backend tunnel that the R1 firmware can reach
* BK7258 \`beken_genie\` firmware compiled with your Wi-Fi and backend URL settings
* The generated firmware flashed to an R1 development board
* A working voice conversation between the R1 hardware and your agent

## Prerequisites [#prerequisites]

Before you begin, prepare the following:

* A macOS or Linux computer. On Windows, use WSL, because the quickstart scripts require a Bash shell.
* [Bun](https://bun.sh), [Python](https://www.python.org) 3.10 or later with the \`venv\` module, Node.js, Git, and your preferred AI coding tool
* The [Agora CLI](https://www.npmjs.com/package/agoraio-cli)
* An [ngrok](https://ngrok.com) account and the ngrok agent installed
* A GitHub account that can create GitHub Codespaces
* An R1 development board based on BK7258
* A 2.4 GHz Wi-Fi network that the R1 device can join
* A USB cable for the \`USB TO UART\` interface
* A Mac to run the BKFIL flashing tool

## Install Agora Skills and CLI [#install-agora-skills-and-cli]

Install Agora Skills so your AI coding tool has Agora product context for the workshop:

\`\`\`bash
npx skills add github:AgoraIO/skills
\`\`\`

Install the Agora CLI:

\`\`\`bash
curl -fsSL https://dl.agora.io/cli/install.sh | sh
agora --version
\`\`\`

After installing the skills and CLI, you can ask your AI coding tool to inspect the quickstart, explain request flow, trace \`/api/*\` routes, or customize the agent greeting.

## Clone and run the voice agent quickstart [#clone-and-run-the-voice-agent-quickstart]

1. Clone the quickstart repository and check out the \`r1-demo\` branch. This branch adds the backend routes that the R1 firmware calls:

   \`\`\`bash
   git clone https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python.git
   cd agent-quickstart-python
   git checkout r1-demo
   \`\`\`

2. Sign in to Agora and select the project to use. If you already have a project with Conversational AI enabled, skip \`agora project create\` and pass your project name to \`agora project use\`:

   \`\`\`bash
   agora login
   agora project create my-first-voice-agent
   agora project use my-first-voice-agent
   \`\`\`

3. Install dependencies, write your project credentials to \`server/.env\`, and check the setup:

   \`\`\`bash
   bun run setup
   agora quickstart env write .
   bun run doctor:local
   \`\`\`

4. Start the local quickstart:

   \`\`\`bash
   bun run dev
   \`\`\`

   The quickstart serves the web app at \`http://localhost:3000\` and the local backend at \`http://localhost:8000\`.

5. Verify the quickstart:

   * Open \`http://localhost:3000\` and confirm the web app loads.
   * Open \`http://localhost:3000/api/get_config\` and confirm it returns JSON.
   * Click **Start Conversation**, allow microphone access, and confirm that the agent greets you and answers a question.

Keep this terminal running. You start ngrok in another terminal in the next section.

## Configure ngrok URLs [#configure-ngrok-urls]

Use ngrok for two separate tasks:

* Expose the web app on port \`3000\` so people can open the demo in a browser.
* Expose the backend on port \`8000\` so the R1 device can reach the device protocol.

Keep these URLs separate. The frontend URL is for browser users. The backend URL is the value you compile into firmware as \`--server-url\`.

Copy your ngrok auth token from the ngrok dashboard, then authenticate ngrok locally:

![Copy ngrok auth token](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/0783dd7d-f647-49cb-aa31-923aac9d346f.png?raw=1)

\`\`\`bash
ngrok config add-authtoken <YOUR_AUTH_TOKEN>
\`\`\`

### Share the web demo [#share-the-web-demo]

In a new terminal, expose the web app:

\`\`\`bash
ngrok http 3000
\`\`\`

Copy the HTTPS forwarding URL and treat it as \`YOUR_FRONTEND_NGROK_URL\`.

![ngrok forwarding URL](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/645b7270-d503-4464-90ce-aa46f7da5d3a.png?raw=1)

### Expose the backend for R1 [#expose-the-backend-for-r1]

In another terminal, expose the backend:

\`\`\`bash
ngrok http 8000
\`\`\`

Copy the HTTPS forwarding URL and treat it as \`YOUR_BACKEND_NGROK_URL\`. Use this value later when you run the firmware setup script.

The backend terminal shows a forwarding URL in the same location as the web demo terminal. Copy the HTTPS URL from the terminal running \`ngrok http 8000\`, not the terminal running \`ngrok http 3000\`.

Before continuing:

1. Open \`YOUR_FRONTEND_NGROK_URL\` and confirm it loads the same web app as \`http://localhost:3000\`.
2. Open \`YOUR_BACKEND_NGROK_URL/get_config\` and confirm it returns JSON for the IoT device protocol.
3. Keep both ngrok tunnels running while the device is connected.

On a free ngrok plan, the browser shows an ngrok warning page the first time you open each URL. Click **Visit Site** to continue. The warning page does not affect requests from the R1 device.

<CalloutContainer type="warning">
  <CalloutDescription>
    Do not use \`localhost\`, \`http://localhost:3000\`, or \`YOUR_FRONTEND_NGROK_URL\` as the firmware server URL. The firmware must use \`YOUR_BACKEND_NGROK_URL\` from \`ngrok http 8000\`.
  </CalloutDescription>
</CalloutContainer>

## Prepare the R1 hardware [#prepare-the-r1-hardware]

The R1 development kit integrates the Agora Conversational AI workflow with BK7258 hardware. It supports microphone and speaker I/O, Wi-Fi Station mode, BLE, AEC and NS audio processing, G.711 and G.722 audio codecs, and development interfaces for flashing and debugging.

Before flashing, identify these interfaces on the board:

* \`USB TO UART\` interface for flashing and serial debugging
* Speaker and microphone ports for voice input and output
* Reset button for boot or flash recovery
* Side buttons for user input during demos
* USB-C, power, and battery connector paths
* UART expansion pins for debugging or extension

During flashing, keep the reset button accessible. If the flashing tool waits for reset, press the reset button once and continue.

For the reference project, see the [Beken AIDK \`beken_genie\` documentation](https://docs.bekencorp.com/arminodoc/bk_aidk/bk7258/en/v2.0.1/projects/beken_genie/index.html).

## Create the BK AIDK Codespaces workspace [#create-the-bk-aidk-codespaces-workspace]

Open the original factory development environment for the BK hardware:

1. Open the [bekencorp/bk\\_aidk](https://github.com/bekencorp/bk_aidk) repository.
2. Select the \`ai_release/v2.0.1\` branch.
3. Click **Code*&#x2A; or &#x2A;*+**, then create a GitHub Codespaces environment from that branch.

<CalloutContainer type="info">
  <CalloutDescription>
    If older workshop material mentions \`ai_server/v2.0.1\`, use \`ai_release/v2.0.1\` for the public GitHub repository.
  </CalloutDescription>
</CalloutContainer>

After the Codespace opens, add \`bk_aidk_codespaces_setup.sh\` to the root of the \`bk_aidk\` workspace. The terminal should already be in the repository root, usually \`/workspaces/bk_aidk/\`.

Download the setup script:

\`\`\`bash
curl -fL -o bk_aidk_codespaces_setup.sh \\
  https://raw.githubusercontent.com/AgoraIO-Conversational-AI/agent-quickstart-python/r1-demo/.github/workshop/bk_aidk_codespaces_setup.sh
\`\`\`

Make the script executable and run it with your 2.4 GHz Wi-Fi credentials and backend ngrok URL:

\`\`\`bash
chmod +x bk_aidk_codespaces_setup.sh
./bk_aidk_codespaces_setup.sh \\
  --ssid "YOUR_WIFI_SSID" \\
  --password "YOUR_WIFI_PASSWORD" \\
  --server-url "YOUR_BACKEND_NGROK_URL"
\`\`\`

Replace \`YOUR_BACKEND_NGROK_URL\` with the full HTTPS forwarding URL from \`ngrok http 8000\`, for example \`https://abc123.ngrok-free.app\`.

<CalloutContainer type="warning">
  <CalloutDescription>
    The setup script writes your Wi-Fi credentials and server URL into the firmware configuration. Do not commit these files back to GitHub.
  </CalloutDescription>
</CalloutContainer>

## Compile the firmware [#compile-the-firmware]

Run the following block from the Codespaces terminal:

\`\`\`bash
# Install missing Python packages.
pip install click future click_option_group cryptography pycryptodome

# Point the build to the Codespaces Python runtime.
export PYTHON=/home/codespace/.python/current/bin/python
export PATH=/home/codespace/.python/current/bin:$PATH
export ARMINO_PATH=/workspaces/bk_aidk/bk_avdk/bk_idk
export PYTHON_EXECUTABLE=$PYTHON

unset PYTHONNOUSERSITE
$PYTHON -m pip install --user --force-reinstall "setuptools==80.9.0"

# Confirm the Python runtime and package path before compiling.
$PYTHON - <<'PY'
import sys
print(sys.executable)
print(sys.version)
import pkg_resources
print(pkg_resources.__file__)
PY

# Compile.
make bk7258 PROJECT=beken_genie
\`\`\`

When the build finishes, locate the generated firmware artifact. The expected output is an \`all-app.bin\` file under the \`build/beken_genie/bk7258\` output tree. Use that file for flashing unless the workshop host provides a prebuilt firmware binary.

If you need to find the artifact, run:

\`\`\`bash
python3 - <<'PY'
from pathlib import Path
for path in Path("build/beken_genie").rglob("all-app.bin"):
    print(path)
PY
\`\`\`

## Flash the firmware [#flash-the-firmware]

Flash the firmware with the Beken Flash Image Loader (BKFIL) for macOS. Download the \`all-app.bin\` file from your Codespace to your computer first. In the Codespaces file explorer, right-click the file and select **Download**.

If you use Windows, see the [Beken firmware flashing documentation](https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v_ai_2.0.1/get-started/index.html#burn-code).

1. Download and unzip the [BKFIL macOS package](https://agora-packages.s3.us-west-2.amazonaws.com/BKFIL_macos_4.0.1.25123002.zip), then open BKFIL.

2. Connect the board to your computer using the \`USB TO UART\` interface.

3. Click **Select Port** and choose the USB serial port, for example \`/dev/cu.usbserial-1130\`.

4. Set **Baud** to \`1500000\` and **AppResetBaud** to \`115200\`, then click **OK**.

   ![Select serial port and baud](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/f64ace50-88d1-4314-b123-9a8e4c9b3c99.png?raw=1)

5. In the **BIN** section, select your \`all-app.bin\` file.

6. Click **Download**.

7. If the log shows \`Please reset the chip\` and \`Waiting reset\`, press the reset button on the board once.

   ![BKFIL erase and download progress](https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/45652655-5c11-4e19-bd40-b3b33e3605b9.png?raw=1)

8. Wait for erase and download to reach 100% before you unplug or restart the device.

## Validate the workshop [#validate-the-workshop]

Confirm each item before considering the workshop complete:

* The local quickstart starts without backend or credential errors.
* \`http://localhost:3000\` loads the web app.
* \`http://localhost:3000/api/get_config\` returns JSON.
* \`YOUR_FRONTEND_NGROK_URL\` loads the web app.
* \`YOUR_BACKEND_NGROK_URL/get_config\` returns JSON.
* \`bk_aidk_codespaces_setup.sh\` was run with the 2.4 GHz Wi-Fi credentials and \`YOUR_BACKEND_NGROK_URL\`.
* The firmware build produces \`all-app.bin\`.
* The board appears on a valid serial port.
* The flash process completes successfully.
* The device captures microphone input.
* The agent returns audio through the device speaker.
* Transcript or voice interaction works in the web UI.

## Troubleshooting [#troubleshooting]

| Issue                                 | What to check                                                                                                                                                                                                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No serial device appears              | Reconnect USB, close apps that may lock the serial port, then retry the flashing tool.                                                                                                                                                                      |
| Flashing hangs at reset or check      | Press the reset button on the board, then retry flashing.                                                                                                                                                                                                   |
| No frontend tunnel URL                | Verify the ngrok auth token and restart \`ngrok http 3000\`.                                                                                                                                                                                                  |
| No backend tunnel URL                 | Verify the ngrok auth token and restart \`ngrok http 8000\`.                                                                                                                                                                                                  |
| Agent does not start                  | Run \`bun run doctor:local\` to confirm that your credentials are in \`server/.env\`. If they are missing, run \`agora quickstart env write .\`. To check your sign-in, project, Conversational AI setup, and local env files, run \`agora project doctor --deep\`. |
| Agent does not respond in the web app | Allow microphone access in the browser and confirm that the correct input device is selected. Use headphones: continuous sound, such as speaker echo or background noise, keeps interrupting the agent before it can reply.                                 |
| Web app cannot reach backend          | Ensure the backend is running and port \`8000\` is free.                                                                                                                                                                                                      |
| Device cannot reach the agent         | Verify the firmware setup used \`YOUR_BACKEND_NGROK_URL\`, not the frontend URL.                                                                                                                                                                              |

## Useful commands [#useful-commands]

Use these commands from the \`agent-quickstart-python\` repository:

\`\`\`bash
# full local stack
bun run dev

# health checks
bun run doctor
bun run doctor:local

# verification
bun run verify
bun run verify:local
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Use this workshop flow when you want to build a voice-first AI companion locally, then connect an R1 device to that agent through the BK7258 firmware workflow."
  }, {
    heading: "what-you-will-build",
    content: "By the end of this workshop, you will have:"
  }, {
    heading: "what-you-will-build",
    content: "A local Python-backed Conversational AI quickstart running on your computer"
  }, {
    heading: "what-you-will-build",
    content: "A browser demo exposed through an ngrok tunnel"
  }, {
    heading: "what-you-will-build",
    content: "A backend tunnel that the R1 firmware can reach"
  }, {
    heading: "what-you-will-build",
    content: "BK7258 `beken_genie` firmware compiled with your Wi-Fi and backend URL settings"
  }, {
    heading: "what-you-will-build",
    content: "The generated firmware flashed to an R1 development board"
  }, {
    heading: "what-you-will-build",
    content: "A working voice conversation between the R1 hardware and your agent"
  }, {
    heading: "prerequisites",
    content: "Before you begin, prepare the following:"
  }, {
    heading: "prerequisites",
    content: "A macOS or Linux computer. On Windows, use WSL, because the quickstart scripts require a Bash shell."
  }, {
    heading: "prerequisites",
    content: "Bun, Python 3.10 or later with the `venv` module, Node.js, Git, and your preferred AI coding tool"
  }, {
    heading: "prerequisites",
    content: "The Agora CLI"
  }, {
    heading: "prerequisites",
    content: "An ngrok account and the ngrok agent installed"
  }, {
    heading: "prerequisites",
    content: "A GitHub account that can create GitHub Codespaces"
  }, {
    heading: "prerequisites",
    content: "An R1 development board based on BK7258"
  }, {
    heading: "prerequisites",
    content: "A 2.4 GHz Wi-Fi network that the R1 device can join"
  }, {
    heading: "prerequisites",
    content: "A USB cable for the `USB TO UART` interface"
  }, {
    heading: "prerequisites",
    content: "A Mac to run the BKFIL flashing tool"
  }, {
    heading: "install-agora-skills-and-cli",
    content: "Install Agora Skills so your AI coding tool has Agora product context for the workshop:"
  }, {
    heading: "install-agora-skills-and-cli",
    content: "Install the Agora CLI:"
  }, {
    heading: "install-agora-skills-and-cli",
    content: "After installing the skills and CLI, you can ask your AI coding tool to inspect the quickstart, explain request flow, trace `/api/*` routes, or customize the agent greeting."
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Clone the quickstart repository and check out the `r1-demo` branch. This branch adds the backend routes that the R1 firmware calls:"
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Sign in to Agora and select the project to use. If you already have a project with Conversational AI enabled, skip `agora project create` and pass your project name to `agora project use`:"
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Install dependencies, write your project credentials to `server/.env`, and check the setup:"
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Start the local quickstart:"
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "The quickstart serves the web app at `http://localhost:3000` and the local backend at `http://localhost:8000`."
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Verify the quickstart:"
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Open `http://localhost:3000` and confirm the web app loads."
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Open `http://localhost:3000/api/get_config` and confirm it returns JSON."
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Click **Start Conversation**, allow microphone access, and confirm that the agent greets you and answers a question."
  }, {
    heading: "clone-and-run-the-voice-agent-quickstart",
    content: "Keep this terminal running. You start ngrok in another terminal in the next section."
  }, {
    heading: "configure-ngrok-urls",
    content: "Use ngrok for two separate tasks:"
  }, {
    heading: "configure-ngrok-urls",
    content: "Expose the web app on port `3000` so people can open the demo in a browser."
  }, {
    heading: "configure-ngrok-urls",
    content: "Expose the backend on port `8000` so the R1 device can reach the device protocol."
  }, {
    heading: "configure-ngrok-urls",
    content: "Keep these URLs separate. The frontend URL is for browser users. The backend URL is the value you compile into firmware as `--server-url`."
  }, {
    heading: "configure-ngrok-urls",
    content: "Copy your ngrok auth token from the ngrok dashboard, then authenticate ngrok locally:"
  }, {
    heading: "share-the-web-demo",
    content: "In a new terminal, expose the web app:"
  }, {
    heading: "share-the-web-demo",
    content: "Copy the HTTPS forwarding URL and treat it as `YOUR_FRONTEND_NGROK_URL`."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "In another terminal, expose the backend:"
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Copy the HTTPS forwarding URL and treat it as `YOUR_BACKEND_NGROK_URL`. Use this value later when you run the firmware setup script."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "The backend terminal shows a forwarding URL in the same location as the web demo terminal. Copy the HTTPS URL from the terminal running `ngrok http 8000`, not the terminal running `ngrok http 3000`."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Before continuing:"
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Open `YOUR_FRONTEND_NGROK_URL` and confirm it loads the same web app as `http://localhost:3000`."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Open `YOUR_BACKEND_NGROK_URL/get_config` and confirm it returns JSON for the IoT device protocol."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Keep both ngrok tunnels running while the device is connected."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "On a free ngrok plan, the browser shows an ngrok warning page the first time you open each URL. Click **Visit Site** to continue. The warning page does not affect requests from the R1 device."
  }, {
    heading: "expose-the-backend-for-r1",
    content: "Do not use `localhost`, `http://localhost:3000`, or `YOUR_FRONTEND_NGROK_URL` as the firmware server URL. The firmware must use `YOUR_BACKEND_NGROK_URL` from `ngrok http 8000`."
  }, {
    heading: "prepare-the-r1-hardware",
    content: "The R1 development kit integrates the Agora Conversational AI workflow with BK7258 hardware. It supports microphone and speaker I/O, Wi-Fi Station mode, BLE, AEC and NS audio processing, G.711 and G.722 audio codecs, and development interfaces for flashing and debugging."
  }, {
    heading: "prepare-the-r1-hardware",
    content: "Before flashing, identify these interfaces on the board:"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "`USB TO UART` interface for flashing and serial debugging"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "Speaker and microphone ports for voice input and output"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "Reset button for boot or flash recovery"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "Side buttons for user input during demos"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "USB-C, power, and battery connector paths"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "UART expansion pins for debugging or extension"
  }, {
    heading: "prepare-the-r1-hardware",
    content: "During flashing, keep the reset button accessible. If the flashing tool waits for reset, press the reset button once and continue."
  }, {
    heading: "prepare-the-r1-hardware",
    content: "For the reference project, see the Beken AIDK `beken_genie` documentation."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Open the original factory development environment for the BK hardware:"
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Open the bekencorp/bk\\_aidk repository."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Select the `ai_release/v2.0.1` branch."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Click **Code*&#x2A; or &#x2A;*+**, then create a GitHub Codespaces environment from that branch."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "If older workshop material mentions `ai_server/v2.0.1`, use `ai_release/v2.0.1` for the public GitHub repository."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "After the Codespace opens, add `bk_aidk_codespaces_setup.sh` to the root of the `bk_aidk` workspace. The terminal should already be in the repository root, usually `/workspaces/bk_aidk/`."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Download the setup script:"
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Make the script executable and run it with your 2.4 GHz Wi-Fi credentials and backend ngrok URL:"
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "Replace `YOUR_BACKEND_NGROK_URL` with the full HTTPS forwarding URL from `ngrok http 8000`, for example `https://abc123.ngrok-free.app`."
  }, {
    heading: "create-the-bk-aidk-codespaces-workspace",
    content: "The setup script writes your Wi-Fi credentials and server URL into the firmware configuration. Do not commit these files back to GitHub."
  }, {
    heading: "compile-the-firmware",
    content: "Run the following block from the Codespaces terminal:"
  }, {
    heading: "compile-the-firmware",
    content: "When the build finishes, locate the generated firmware artifact. The expected output is an `all-app.bin` file under the `build/beken_genie/bk7258` output tree. Use that file for flashing unless the workshop host provides a prebuilt firmware binary."
  }, {
    heading: "compile-the-firmware",
    content: "If you need to find the artifact, run:"
  }, {
    heading: "flash-the-firmware",
    content: "Flash the firmware with the Beken Flash Image Loader (BKFIL) for macOS. Download the `all-app.bin` file from your Codespace to your computer first. In the Codespaces file explorer, right-click the file and select **Download**."
  }, {
    heading: "flash-the-firmware",
    content: "If you use Windows, see the Beken firmware flashing documentation."
  }, {
    heading: "flash-the-firmware",
    content: "Download and unzip the BKFIL macOS package, then open BKFIL."
  }, {
    heading: "flash-the-firmware",
    content: "Connect the board to your computer using the `USB TO UART` interface."
  }, {
    heading: "flash-the-firmware",
    content: "Click **Select Port** and choose the USB serial port, for example `/dev/cu.usbserial-1130`."
  }, {
    heading: "flash-the-firmware",
    content: "Set **Baud** to `1500000` and **AppResetBaud** to `115200`, then click **OK**."
  }, {
    heading: "flash-the-firmware",
    content: "In the **BIN** section, select your `all-app.bin` file."
  }, {
    heading: "flash-the-firmware",
    content: "Click **Download**."
  }, {
    heading: "flash-the-firmware",
    content: "If the log shows `Please reset the chip` and `Waiting reset`, press the reset button on the board once."
  }, {
    heading: "flash-the-firmware",
    content: "Wait for erase and download to reach 100% before you unplug or restart the device."
  }, {
    heading: "validate-the-workshop",
    content: "Confirm each item before considering the workshop complete:"
  }, {
    heading: "validate-the-workshop",
    content: "The local quickstart starts without backend or credential errors."
  }, {
    heading: "validate-the-workshop",
    content: "`http://localhost:3000` loads the web app."
  }, {
    heading: "validate-the-workshop",
    content: "`http://localhost:3000/api/get_config` returns JSON."
  }, {
    heading: "validate-the-workshop",
    content: "`YOUR_FRONTEND_NGROK_URL` loads the web app."
  }, {
    heading: "validate-the-workshop",
    content: "`YOUR_BACKEND_NGROK_URL/get_config` returns JSON."
  }, {
    heading: "validate-the-workshop",
    content: "`bk_aidk_codespaces_setup.sh` was run with the 2.4 GHz Wi-Fi credentials and `YOUR_BACKEND_NGROK_URL`."
  }, {
    heading: "validate-the-workshop",
    content: "The firmware build produces `all-app.bin`."
  }, {
    heading: "validate-the-workshop",
    content: "The board appears on a valid serial port."
  }, {
    heading: "validate-the-workshop",
    content: "The flash process completes successfully."
  }, {
    heading: "validate-the-workshop",
    content: "The device captures microphone input."
  }, {
    heading: "validate-the-workshop",
    content: "The agent returns audio through the device speaker."
  }, {
    heading: "validate-the-workshop",
    content: "Transcript or voice interaction works in the web UI."
  }, {
    heading: "troubleshooting",
    content: "Issue"
  }, {
    heading: "troubleshooting",
    content: "What to check"
  }, {
    heading: "troubleshooting",
    content: "No serial device appears"
  }, {
    heading: "troubleshooting",
    content: "Reconnect USB, close apps that may lock the serial port, then retry the flashing tool."
  }, {
    heading: "troubleshooting",
    content: "Flashing hangs at reset or check"
  }, {
    heading: "troubleshooting",
    content: "Press the reset button on the board, then retry flashing."
  }, {
    heading: "troubleshooting",
    content: "No frontend tunnel URL"
  }, {
    heading: "troubleshooting",
    content: "Verify the ngrok auth token and restart `ngrok http 3000`."
  }, {
    heading: "troubleshooting",
    content: "No backend tunnel URL"
  }, {
    heading: "troubleshooting",
    content: "Verify the ngrok auth token and restart `ngrok http 8000`."
  }, {
    heading: "troubleshooting",
    content: "Agent does not start"
  }, {
    heading: "troubleshooting",
    content: "Run `bun run doctor:local` to confirm that your credentials are in `server/.env`. If they are missing, run `agora quickstart env write .`. To check your sign-in, project, Conversational AI setup, and local env files, run `agora project doctor --deep`."
  }, {
    heading: "troubleshooting",
    content: "Agent does not respond in the web app"
  }, {
    heading: "troubleshooting",
    content: "Allow microphone access in the browser and confirm that the correct input device is selected. Use headphones: continuous sound, such as speaker echo or background noise, keeps interrupting the agent before it can reply."
  }, {
    heading: "troubleshooting",
    content: "Web app cannot reach backend"
  }, {
    heading: "troubleshooting",
    content: "Ensure the backend is running and port `8000` is free."
  }, {
    heading: "troubleshooting",
    content: "Device cannot reach the agent"
  }, {
    heading: "troubleshooting",
    content: "Verify the firmware setup used `YOUR_BACKEND_NGROK_URL`, not the frontend URL."
  }, {
    heading: "useful-commands",
    content: "Use these commands from the `agent-quickstart-python` repository:"
  }],
  headings: [{
    id: "what-you-will-build",
    content: "What you will build"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "install-agora-skills-and-cli",
    content: "Install Agora Skills and CLI"
  }, {
    id: "clone-and-run-the-voice-agent-quickstart",
    content: "Clone and run the voice agent quickstart"
  }, {
    id: "configure-ngrok-urls",
    content: "Configure ngrok URLs"
  }, {
    id: "share-the-web-demo",
    content: "Share the web demo"
  }, {
    id: "expose-the-backend-for-r1",
    content: "Expose the backend for R1"
  }, {
    id: "prepare-the-r1-hardware",
    content: "Prepare the R1 hardware"
  }, {
    id: "create-the-bk-aidk-codespaces-workspace",
    content: "Create the BK AIDK Codespaces workspace"
  }, {
    id: "compile-the-firmware",
    content: "Compile the firmware"
  }, {
    id: "flash-the-firmware",
    content: "Flash the firmware"
  }, {
    id: "validate-the-workshop",
    content: "Validate the workshop"
  }, {
    id: "troubleshooting",
    content: "Troubleshooting"
  }, {
    id: "useful-commands",
    content: "Useful commands"
  }]
};
export let toc = [{
  depth: 2,
  url: "#what-you-will-build",
  title: _jsx(_Fragment, {
    children: "What you will build"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#install-agora-skills-and-cli",
  title: _jsx(_Fragment, {
    children: "Install Agora Skills and CLI"
  })
}, {
  depth: 2,
  url: "#clone-and-run-the-voice-agent-quickstart",
  title: _jsx(_Fragment, {
    children: "Clone and run the voice agent quickstart"
  })
}, {
  depth: 2,
  url: "#configure-ngrok-urls",
  title: _jsx(_Fragment, {
    children: "Configure ngrok URLs"
  })
}, {
  depth: 3,
  url: "#share-the-web-demo",
  title: _jsx(_Fragment, {
    children: "Share the web demo"
  })
}, {
  depth: 3,
  url: "#expose-the-backend-for-r1",
  title: _jsx(_Fragment, {
    children: "Expose the backend for R1"
  })
}, {
  depth: 2,
  url: "#prepare-the-r1-hardware",
  title: _jsx(_Fragment, {
    children: "Prepare the R1 hardware"
  })
}, {
  depth: 2,
  url: "#create-the-bk-aidk-codespaces-workspace",
  title: _jsx(_Fragment, {
    children: "Create the BK AIDK Codespaces workspace"
  })
}, {
  depth: 2,
  url: "#compile-the-firmware",
  title: _jsx(_Fragment, {
    children: "Compile the firmware"
  })
}, {
  depth: 2,
  url: "#flash-the-firmware",
  title: _jsx(_Fragment, {
    children: "Flash the firmware"
  })
}, {
  depth: 2,
  url: "#validate-the-workshop",
  title: _jsx(_Fragment, {
    children: "Validate the workshop"
  })
}, {
  depth: 2,
  url: "#troubleshooting",
  title: _jsx(_Fragment, {
    children: "Troubleshooting"
  })
}, {
  depth: 2,
  url: "#useful-commands",
  title: _jsx(_Fragment, {
    children: "Useful commands"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Use this workshop flow when you want to build a voice-first AI companion locally, then connect an R1 device to that agent through the BK7258 firmware workflow."
    }), `
`, _jsx(_components.h2, {
      id: "what-you-will-build",
      children: "What you will build"
    }), `
`, _jsx(_components.p, {
      children: "By the end of this workshop, you will have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A local Python-backed Conversational AI quickstart running on your computer"
      }), `
`, _jsx(_components.li, {
        children: "A browser demo exposed through an ngrok tunnel"
      }), `
`, _jsx(_components.li, {
        children: "A backend tunnel that the R1 firmware can reach"
      }), `
`, _jsxs(_components.li, {
        children: ["BK7258 ", _jsx(_components.code, {
          children: "beken_genie"
        }), " firmware compiled with your Wi-Fi and backend URL settings"]
      }), `
`, _jsx(_components.li, {
        children: "The generated firmware flashed to an R1 development board"
      }), `
`, _jsx(_components.li, {
        children: "A working voice conversation between the R1 hardware and your agent"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "Before you begin, prepare the following:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "A macOS or Linux computer. On Windows, use WSL, because the quickstart scripts require a Bash shell."
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.a, {
          href: "https://bun.sh",
          children: "Bun"
        }), ", ", _jsx(_components.a, {
          href: "https://www.python.org",
          children: "Python"
        }), " 3.10 or later with the ", _jsx(_components.code, {
          children: "venv"
        }), " module, Node.js, Git, and your preferred AI coding tool"]
      }), `
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.a, {
          href: "https://www.npmjs.com/package/agoraio-cli",
          children: "Agora CLI"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["An ", _jsx(_components.a, {
          href: "https://ngrok.com",
          children: "ngrok"
        }), " account and the ngrok agent installed"]
      }), `
`, _jsx(_components.li, {
        children: "A GitHub account that can create GitHub Codespaces"
      }), `
`, _jsx(_components.li, {
        children: "An R1 development board based on BK7258"
      }), `
`, _jsx(_components.li, {
        children: "A 2.4 GHz Wi-Fi network that the R1 device can join"
      }), `
`, _jsxs(_components.li, {
        children: ["A USB cable for the ", _jsx(_components.code, {
          children: "USB TO UART"
        }), " interface"]
      }), `
`, _jsx(_components.li, {
        children: "A Mac to run the BKFIL flashing tool"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "install-agora-skills-and-cli",
      children: "Install Agora Skills and CLI"
    }), `
`, _jsx(_components.p, {
      children: "Install Agora Skills so your AI coding tool has Agora product context for the workshop:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " skills"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " github:AgoraIO/skills"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Install the Agora CLI:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -fsSL"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://dl.agora.io/cli/install.sh"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " sh"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "agora"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --version"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["After installing the skills and CLI, you can ask your AI coding tool to inspect the quickstart, explain request flow, trace ", _jsx(_components.code, {
        children: "/api/*"
      }), " routes, or customize the agent greeting."]
    }), `
`, _jsx(_components.h2, {
      id: "clone-and-run-the-voice-agent-quickstart",
      children: "Clone and run the voice agent quickstart"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Clone the quickstart repository and check out the ", _jsx(_components.code, {
            children: "r1-demo"
          }), " branch. This branch adds the backend routes that the R1 firmware calls:"]
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " clone"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python.git"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " agent-quickstart-python"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "git"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " checkout"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " r1-demo"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Sign in to Agora and select the project to use. If you already have a project with Conversational AI enabled, skip ", _jsx(_components.code, {
            children: "agora project create"
          }), " and pass your project name to ", _jsx(_components.code, {
            children: "agora project use"
          }), ":"]
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " login"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " project"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " create"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-first-voice-agent"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " project"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " use"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " my-first-voice-agent"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Install dependencies, write your project credentials to ", _jsx(_components.code, {
            children: "server/.env"
          }), ", and check the setup:"]
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " setup"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "agora"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " quickstart"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " env"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " write"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " ."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " doctor:local"
                })]
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Start the local quickstart:"
        }), `
`, _jsx(_Fragment, {
          children: _jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "bun"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " dev"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["The quickstart serves the web app at ", _jsx(_components.code, {
            children: "http://localhost:3000"
          }), " and the local backend at ", _jsx(_components.code, {
            children: "http://localhost:8000"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Verify the quickstart:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Open ", _jsx(_components.code, {
              children: "http://localhost:3000"
            }), " and confirm the web app loads."]
          }), `
`, _jsxs(_components.li, {
            children: ["Open ", _jsx(_components.code, {
              children: "http://localhost:3000/api/get_config"
            }), " and confirm it returns JSON."]
          }), `
`, _jsxs(_components.li, {
            children: ["Click ", _jsx(_components.strong, {
              children: "Start Conversation"
            }), ", allow microphone access, and confirm that the agent greets you and answers a question."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Keep this terminal running. You start ngrok in another terminal in the next section."
    }), `
`, _jsx(_components.h2, {
      id: "configure-ngrok-urls",
      children: "Configure ngrok URLs"
    }), `
`, _jsx(_components.p, {
      children: "Use ngrok for two separate tasks:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Expose the web app on port ", _jsx(_components.code, {
          children: "3000"
        }), " so people can open the demo in a browser."]
      }), `
`, _jsxs(_components.li, {
        children: ["Expose the backend on port ", _jsx(_components.code, {
          children: "8000"
        }), " so the R1 device can reach the device protocol."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["Keep these URLs separate. The frontend URL is for browser users. The backend URL is the value you compile into firmware as ", _jsx(_components.code, {
        children: "--server-url"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Copy your ngrok auth token from the ngrok dashboard, then authenticate ngrok locally:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/0783dd7d-f647-49cb-aa31-923aac9d346f.png?raw=1",
        alt: "Copy ngrok auth token"
      })
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ngrok"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " add-authtoken"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "YOUR_AUTH_TOKE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "N"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "share-the-web-demo",
      children: "Share the web demo"
    }), `
`, _jsx(_components.p, {
      children: "In a new terminal, expose the web app:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ngrok"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " http"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 3000"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Copy the HTTPS forwarding URL and treat it as ", _jsx(_components.code, {
        children: "YOUR_FRONTEND_NGROK_URL"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/645b7270-d503-4464-90ce-aa46f7da5d3a.png?raw=1",
        alt: "ngrok forwarding URL"
      })
    }), `
`, _jsx(_components.h3, {
      id: "expose-the-backend-for-r1",
      children: "Expose the backend for R1"
    }), `
`, _jsx(_components.p, {
      children: "In another terminal, expose the backend:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsx(_components.code, {
          children: _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ngrok"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " http"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 8000"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Copy the HTTPS forwarding URL and treat it as ", _jsx(_components.code, {
        children: "YOUR_BACKEND_NGROK_URL"
      }), ". Use this value later when you run the firmware setup script."]
    }), `
`, _jsxs(_components.p, {
      children: ["The backend terminal shows a forwarding URL in the same location as the web demo terminal. Copy the HTTPS URL from the terminal running ", _jsx(_components.code, {
        children: "ngrok http 8000"
      }), ", not the terminal running ", _jsx(_components.code, {
        children: "ngrok http 3000"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Before continuing:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Open ", _jsx(_components.code, {
          children: "YOUR_FRONTEND_NGROK_URL"
        }), " and confirm it loads the same web app as ", _jsx(_components.code, {
          children: "http://localhost:3000"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["Open ", _jsx(_components.code, {
          children: "YOUR_BACKEND_NGROK_URL/get_config"
        }), " and confirm it returns JSON for the IoT device protocol."]
      }), `
`, _jsx(_components.li, {
        children: "Keep both ngrok tunnels running while the device is connected."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["On a free ngrok plan, the browser shows an ngrok warning page the first time you open each URL. Click ", _jsx(_components.strong, {
        children: "Visit Site"
      }), " to continue. The warning page does not affect requests from the R1 device."]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Do not use ", _jsx(_components.code, {
            children: "localhost"
          }), ", ", _jsx(_components.code, {
            children: "http://localhost:3000"
          }), ", or ", _jsx(_components.code, {
            children: "YOUR_FRONTEND_NGROK_URL"
          }), " as the firmware server URL. The firmware must use ", _jsx(_components.code, {
            children: "YOUR_BACKEND_NGROK_URL"
          }), " from ", _jsx(_components.code, {
            children: "ngrok http 8000"
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "prepare-the-r1-hardware",
      children: "Prepare the R1 hardware"
    }), `
`, _jsx(_components.p, {
      children: "The R1 development kit integrates the Agora Conversational AI workflow with BK7258 hardware. It supports microphone and speaker I/O, Wi-Fi Station mode, BLE, AEC and NS audio processing, G.711 and G.722 audio codecs, and development interfaces for flashing and debugging."
    }), `
`, _jsx(_components.p, {
      children: "Before flashing, identify these interfaces on the board:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "USB TO UART"
        }), " interface for flashing and serial debugging"]
      }), `
`, _jsx(_components.li, {
        children: "Speaker and microphone ports for voice input and output"
      }), `
`, _jsx(_components.li, {
        children: "Reset button for boot or flash recovery"
      }), `
`, _jsx(_components.li, {
        children: "Side buttons for user input during demos"
      }), `
`, _jsx(_components.li, {
        children: "USB-C, power, and battery connector paths"
      }), `
`, _jsx(_components.li, {
        children: "UART expansion pins for debugging or extension"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "During flashing, keep the reset button accessible. If the flashing tool waits for reset, press the reset button once and continue."
    }), `
`, _jsxs(_components.p, {
      children: ["For the reference project, see the ", _jsxs(_components.a, {
        href: "https://docs.bekencorp.com/arminodoc/bk_aidk/bk7258/en/v2.0.1/projects/beken_genie/index.html",
        children: ["Beken AIDK ", _jsx(_components.code, {
          children: "beken_genie"
        }), " documentation"]
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "create-the-bk-aidk-codespaces-workspace",
      children: "Create the BK AIDK Codespaces workspace"
    }), `
`, _jsx(_components.p, {
      children: "Open the original factory development environment for the BK hardware:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Open the ", _jsx(_components.a, {
          href: "https://github.com/bekencorp/bk_aidk",
          children: "bekencorp/bk_aidk"
        }), " repository."]
      }), `
`, _jsxs(_components.li, {
        children: ["Select the ", _jsx(_components.code, {
          children: "ai_release/v2.0.1"
        }), " branch."]
      }), `
`, _jsxs(_components.li, {
        children: ["Click ", _jsx(_components.strong, {
          children: "Code"
        }), " or ", _jsx(_components.strong, {
          children: "+"
        }), ", then create a GitHub Codespaces environment from that branch."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If older workshop material mentions ", _jsx(_components.code, {
            children: "ai_server/v2.0.1"
          }), ", use ", _jsx(_components.code, {
            children: "ai_release/v2.0.1"
          }), " for the public GitHub repository."]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["After the Codespace opens, add ", _jsx(_components.code, {
        children: "bk_aidk_codespaces_setup.sh"
      }), " to the root of the ", _jsx(_components.code, {
        children: "bk_aidk"
      }), " workspace. The terminal should already be in the repository root, usually ", _jsx(_components.code, {
        children: "/workspaces/bk_aidk/"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "Download the setup script:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -fL"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -o"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bk_aidk_codespaces_setup.sh"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  https://raw.githubusercontent.com/AgoraIO-Conversational-AI/agent-quickstart-python/r1-demo/.github/workshop/bk_aidk_codespaces_setup.sh"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "Make the script executable and run it with your 2.4 GHz Wi-Fi credentials and backend ngrok URL:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "chmod"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " +x"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bk_aidk_codespaces_setup.sh"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "./bk_aidk_codespaces_setup.sh"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --ssid"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "YOUR_WIFI_SSID"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --password"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "YOUR_WIFI_PASSWORD"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "  --server-url"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "YOUR_BACKEND_NGROK_URL"'
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["Replace ", _jsx(_components.code, {
        children: "YOUR_BACKEND_NGROK_URL"
      }), " with the full HTTPS forwarding URL from ", _jsx(_components.code, {
        children: "ngrok http 8000"
      }), ", for example ", _jsx(_components.code, {
        children: "https://abc123.ngrok-free.app"
      }), "."]
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The setup script writes your Wi-Fi credentials and server URL into the firmware configuration. Do not commit these files back to GitHub."
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "compile-the-firmware",
      children: "Compile the firmware"
    }), `
`, _jsx(_components.p, {
      children: "Run the following block from the Codespaces terminal:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Install missing Python packages."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "pip"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " click"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " future"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " click_option_group"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " cryptography"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " pycryptodome"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Point the build to the Codespaces Python runtime."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PYTHON"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "/home/codespace/.python/current/bin/python"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PATH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "/home/codespace/.python/current/bin:$PATH"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ARMINO_PATH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "/workspaces/bk_aidk/bk_avdk/bk_idk"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " PYTHON_EXECUTABLE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$PYTHON"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "unset"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " PYTHONNOUSERSITE"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$PYTHON -m pip install --user --force-reinstall "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"setuptools==80.9.0"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Confirm the Python runtime and package path before compiling."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$PYTHON - "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'PY'"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "import sys"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "print(sys.executable)"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "print(sys.version)"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "import pkg_resources"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "print(pkg_resources.__file__)"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "PY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Compile."
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "make"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bk7258"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " PROJECT=beken_genie"
            })]
          })]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["When the build finishes, locate the generated firmware artifact. The expected output is an ", _jsx(_components.code, {
        children: "all-app.bin"
      }), " file under the ", _jsx(_components.code, {
        children: "build/beken_genie/bk7258"
      }), " output tree. Use that file for flashing unless the workshop host provides a prebuilt firmware binary."]
    }), `
`, _jsx(_components.p, {
      children: "If you need to find the artifact, run:"
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "python3"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " -"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <<"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'PY'"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "from pathlib import Path"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'for path in Path("build/beken_genie").rglob("all-app.bin"):'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    print(path)"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "PY"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "flash-the-firmware",
      children: "Flash the firmware"
    }), `
`, _jsxs(_components.p, {
      children: ["Flash the firmware with the Beken Flash Image Loader (BKFIL) for macOS. Download the ", _jsx(_components.code, {
        children: "all-app.bin"
      }), " file from your Codespace to your computer first. In the Codespaces file explorer, right-click the file and select ", _jsx(_components.strong, {
        children: "Download"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["If you use Windows, see the ", _jsx(_components.a, {
        href: "https://docs.bekencorp.com/arminodoc/bk_idk/bk7258/en/v_ai_2.0.1/get-started/index.html#burn-code",
        children: "Beken firmware flashing documentation"
      }), "."]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Download and unzip the ", _jsx(_components.a, {
            href: "https://agora-packages.s3.us-west-2.amazonaws.com/BKFIL_macos_4.0.1.25123002.zip",
            children: "BKFIL macOS package"
          }), ", then open BKFIL."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Connect the board to your computer using the ", _jsx(_components.code, {
            children: "USB TO UART"
          }), " interface."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Select Port"
          }), " and choose the USB serial port, for example ", _jsx(_components.code, {
            children: "/dev/cu.usbserial-1130"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Set ", _jsx(_components.strong, {
            children: "Baud"
          }), " to ", _jsx(_components.code, {
            children: "1500000"
          }), " and ", _jsx(_components.strong, {
            children: "AppResetBaud"
          }), " to ", _jsx(_components.code, {
            children: "115200"
          }), ", then click ", _jsx(_components.strong, {
            children: "OK"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/f64ace50-88d1-4314-b123-9a8e4c9b3c99.png?raw=1",
            alt: "Select serial port and baud"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "BIN"
          }), " section, select your ", _jsx(_components.code, {
            children: "all-app.bin"
          }), " file."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Click ", _jsx(_components.strong, {
            children: "Download"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the log shows ", _jsx(_components.code, {
            children: "Please reset the chip"
          }), " and ", _jsx(_components.code, {
            children: "Waiting reset"
          }), ", press the reset button on the board once."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://github.com/AgoraIO-Conversational-AI/agent-quickstart-python/blob/r1-demo/.github/workshop/images/45652655-5c11-4e19-bd40-b3b33e3605b9.png?raw=1",
            alt: "BKFIL erase and download progress"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Wait for erase and download to reach 100% before you unplug or restart the device."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "validate-the-workshop",
      children: "Validate the workshop"
    }), `
`, _jsx(_components.p, {
      children: "Confirm each item before considering the workshop complete:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The local quickstart starts without backend or credential errors."
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "http://localhost:3000"
        }), " loads the web app."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "http://localhost:3000/api/get_config"
        }), " returns JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "YOUR_FRONTEND_NGROK_URL"
        }), " loads the web app."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "YOUR_BACKEND_NGROK_URL/get_config"
        }), " returns JSON."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "bk_aidk_codespaces_setup.sh"
        }), " was run with the 2.4 GHz Wi-Fi credentials and ", _jsx(_components.code, {
          children: "YOUR_BACKEND_NGROK_URL"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The firmware build produces ", _jsx(_components.code, {
          children: "all-app.bin"
        }), "."]
      }), `
`, _jsx(_components.li, {
        children: "The board appears on a valid serial port."
      }), `
`, _jsx(_components.li, {
        children: "The flash process completes successfully."
      }), `
`, _jsx(_components.li, {
        children: "The device captures microphone input."
      }), `
`, _jsx(_components.li, {
        children: "The agent returns audio through the device speaker."
      }), `
`, _jsx(_components.li, {
        children: "Transcript or voice interaction works in the web UI."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Issue"
          }), _jsx(_components.th, {
            children: "What to check"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "No serial device appears"
          }), _jsx(_components.td, {
            children: "Reconnect USB, close apps that may lock the serial port, then retry the flashing tool."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Flashing hangs at reset or check"
          }), _jsx(_components.td, {
            children: "Press the reset button on the board, then retry flashing."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "No frontend tunnel URL"
          }), _jsxs(_components.td, {
            children: ["Verify the ngrok auth token and restart ", _jsx(_components.code, {
              children: "ngrok http 3000"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "No backend tunnel URL"
          }), _jsxs(_components.td, {
            children: ["Verify the ngrok auth token and restart ", _jsx(_components.code, {
              children: "ngrok http 8000"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent does not start"
          }), _jsxs(_components.td, {
            children: ["Run ", _jsx(_components.code, {
              children: "bun run doctor:local"
            }), " to confirm that your credentials are in ", _jsx(_components.code, {
              children: "server/.env"
            }), ". If they are missing, run ", _jsx(_components.code, {
              children: "agora quickstart env write ."
            }), ". To check your sign-in, project, Conversational AI setup, and local env files, run ", _jsx(_components.code, {
              children: "agora project doctor --deep"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Agent does not respond in the web app"
          }), _jsx(_components.td, {
            children: "Allow microphone access in the browser and confirm that the correct input device is selected. Use headphones: continuous sound, such as speaker echo or background noise, keeps interrupting the agent before it can reply."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Web app cannot reach backend"
          }), _jsxs(_components.td, {
            children: ["Ensure the backend is running and port ", _jsx(_components.code, {
              children: "8000"
            }), " is free."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Device cannot reach the agent"
          }), _jsxs(_components.td, {
            children: ["Verify the firmware setup used ", _jsx(_components.code, {
              children: "YOUR_BACKEND_NGROK_URL"
            }), ", not the frontend URL."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "useful-commands",
      children: "Useful commands"
    }), `
`, _jsxs(_components.p, {
      children: ["Use these commands from the ", _jsx(_components.code, {
        children: "agent-quickstart-python"
      }), " repository:"]
    }), `
`, _jsx(_Fragment, {
      children: _jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# full local stack"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " dev"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# health checks"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " doctor"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " doctor:local"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line"
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# verification"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " verify"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "bun"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " verify:local"
            })]
          })]
        })
      })
    })]
  });
}
export default function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
