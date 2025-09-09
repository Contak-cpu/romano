@echo off
cd /d "C:\Users\pictoN\Desktop\agenciamarket\agenciamarket"
echo Agregando archivos al staging area...
git add .
echo Haciendo commit...
git commit -m "Agregar 4 nuevos vehículos al catálogo: Fiat Fiorino, Jeep Wrangler, Fiat Toro y Renault Oroch"
echo Haciendo push...
git push origin main
echo Proceso completado.
pause
