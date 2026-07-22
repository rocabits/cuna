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

  # White star (5-pointed)
  $starColor = [System.Drawing.Color]::FromArgb(255, 255, 255)
  $starBrush = New-Object System.Drawing.SolidBrush($starColor)
  $cx = [float]($s / 2)
  $cy = [float]($s / 2)
  $R = [float]($s * 0.42)
  $r = [float]($s * 0.18)
  $pts = New-Object System.Drawing.PointF[] 10
  for ($i = 0; $i -lt 5; $i++) {
    $a1 = [math]::PI * (-90 + $i * 72) / 180
    $pts[$i * 2].X = [float]($cx + $R * [math]::Cos($a1))
    $pts[$i * 2].Y = [float]($cy + $R * [math]::Sin($a1))
    $a2 = [math]::PI * (-54 + $i * 72) / 180
    $pts[$i * 2 + 1].X = [float]($cx + $r * [math]::Cos($a2))
    $pts[$i * 2 + 1].Y = [float]($cy + $r * [math]::Sin($a2))
  }
  $g.FillPolygon($starBrush, $pts)



  $g.Dispose()
  $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "Icono $($size)x$($size) creado: $outputPath"
}

$root = Split-Path -Parent $PSCommandPath

New-CunaIcon 192 (Join-Path $root 'icon-192.png')
New-CunaIcon 512 (Join-Path $root 'icon-512.png')

Write-Host "Iconos generados correctamente."
