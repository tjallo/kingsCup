npm run build
Remove-Item -Recurse ..\tjallo.github.io\*
Copy-Item -Recurse .\dist\* ..\tjallo.github.io