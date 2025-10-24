@echo off
:: Ask for commit message
set /p msg=Enter your commit message: 

echo.
echo Adding all files...
git add .
timeout /t 1 >nul

echo.
echo Committing with message: "%msg%"
git commit -m "%msg%"
timeout /t 1 >nul

echo.
echo Pushing to repository....
git push origin main
timeout /t 1 >nul

echo.
echo All Done . . . . . !
timeout /t 1 >nul

echo.
clear
timeout /t 1 >nul

echo.
exit