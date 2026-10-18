@echo off
title BLACK LABEL BARBER STUDIO - Vista previa
cd /d "%~dp0"

if not exist "node_modules" (
  echo Instalando dependencias la primera vez, espera un momento...
  call npm install
)

echo.
echo  Levantando la pagina de vista previa...
echo  Se abrira sola en tu navegador (http://localhost:4173)
echo  Para CERRAR la pagina, cierra esta ventana negra.
echo.

start "abriendo navegador" /min cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:4173/"

call npm run preview
pause
