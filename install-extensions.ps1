# VS Code Extensions Installation Script
# This script installs all your VS Code extensions

Write-Host "Installing VS Code Extensions..." -ForegroundColor Green

$extensions = @(
    "bracketpaircolordlw.bracket-pair-color-dlw",
    "bradlc.vscode-tailwindcss",
    "cmstead.js-codeformer",
    "cmstead.jsrefactor",
    "csstools.postcss",
    "dbaeumer.vscode-eslint",
    "eamodio.gitlens",
    "esbenp.prettier-vscode",
    "formulahendry.code-runner",
    "github.copilot",
    "github.copilot-chat",
    "ms-python.debugpy",
    "ms-python.python",
    "ms-python.vscode-pylance",
    "ms-toolsai.jupyter",
    "ms-toolsai.jupyter-keymap",
    "ms-toolsai.jupyter-renderers",
    "ms-toolsai.vscode-jupyter-cell-tags",
    "ms-toolsai.vscode-jupyter-slideshow",
    "pkief.material-icon-theme",
    "ritwickdey.liveserver",
    "whizkydee.material-palenight-theme",
    "xabikos.javascriptsnippets"
)

foreach ($extension in $extensions) {
    Write-Host "Installing: $extension" -ForegroundColor Yellow
    code --install-extension $extension
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Successfully installed: $extension" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to install: $extension" -ForegroundColor Red
    }
}

Write-Host "`nAll extensions installation completed!" -ForegroundColor Green
Write-Host "You may need to restart VS Code for all extensions to take effect." -ForegroundColor Cyan 