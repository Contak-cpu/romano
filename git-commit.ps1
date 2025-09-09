Set-Location "C:\Users\pictoN\Desktop\agenciamarket\agenciamarket"
Write-Host "Agregando archivos al staging area..."
git add .
Write-Host "Haciendo commit..."
git commit -m "Agregar 4 nuevos vehículos al catálogo: Fiat Fiorino, Jeep Wrangler, Fiat Toro y Renault Oroch"
Write-Host "Haciendo push..."
git push origin main
Write-Host "Proceso completado."
