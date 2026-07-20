Add-Type -AssemblyName System.Drawing

function New-CunaIcon {
  param($size, $outputPath)

  $s = [float]$size
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'HighQuality'

  # Rounded rectangle background
  $r = [int]($s * 0.2)
  $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.StartFigure()
  $path.AddArc($rect.X, $rect.Y, $r*2, $r*2, 180, 90)
  $path.AddArc($rect.Right - $r*2, $rect.Y, $r*2, $r*2, 270, 90)
  $path.AddArc($rect.Right - $r*2, $rect.Bottom - $r*2, $r*2, $r*2, 0, 90)
  $path.AddArc($rect.X, $rect.Bottom - $r*2, $r*2, $r*2, 90, 90)
  $path.CloseFigure()

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($size, $size)),
    [System.Drawing.Color]::FromArgb(46, 204, 113),
    [System.Drawing.Color]::FromArgb(39, 174, 96)
  )
  $g.FillPath($brush, $path)

  # Moon crescent
  $moonColor = [System.Drawing.Color]::FromArgb(255, 255, 255)
  $moonBrush = New-Object System.Drawing.SolidBrush($moonColor)
  $moonPath = New-Object System.Drawing.Drawing2D.GraphicsPath

  $m1 = [float]($s * 0.15)
  $m2 = [float]($s * 0.25)
  $m3 = [float]($s * 0.55)
  $m4 = [float]($s * 0.45)
  $moonPath.AddArc((New-Object System.Drawing.RectangleF($m1, $m1, $m3, $m3)), 180, 180)
  $moonPath.AddArc((New-Object System.Drawing.RectangleF($m2, $m1, $m4, $m3)), 0, -180)
  $moonPath.CloseAllFigures()
  $g.FillPath($moonBrush, $moonPath)



  $g.Dispose()
  $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "Icono $($size)x$($size) creado: $outputPath"
}

$root = Split-Path -Parent $PSCommandPath

New-CunaIcon 192 (Join-Path $root 'icon-192.png')
New-CunaIcon 512 (Join-Path $root 'icon-512.png')

Write-Host "Iconos generados correctamente."
