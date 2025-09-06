@echo off
setlocal enabledelayedexpansion

REM Build the project
npm run build
IF %ERRORLEVEL% NEQ 0 (
    echo Build failed.
    exit /b %ERRORLEVEL%
)

REM Deploy to GitHub Pages
npm run deploy
IF %ERRORLEVEL% NEQ 0 (
    echo Deployment failed.
    exit /b %ERRORLEVEL%
)

echo Deployment complete!
endlocal
