# PowerShell script to configure Git and push code to 'main' and 'dev' branches

Write-Host "Configuring git remote for Suneel-dev-java/ui-temple-management..." -ForegroundColor Cyan

# 1. Add remote
git remote remove origin 2>$null
git remote add origin https://github.com/Suneel-dev-java/ui-temple-management.git

# 2. Add all files
Write-Host "Staging files..." -ForegroundColor Cyan
git add .

# 3. Commit
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "feat: initial commit of Temple Management UI with Telugu copy, custom-slides, background chant player, and Seva booking flow"

# 4. Push to main
Write-Host "Pushing to main branch..." -ForegroundColor Cyan
git push -u origin main

# 5. Create dev branch
Write-Host "Creating and switching to dev branch..." -ForegroundColor Cyan
git checkout -b dev 2>$null || git checkout dev

# 6. Push to dev
Write-Host "Pushing to dev branch..." -ForegroundColor Cyan
git push -u origin dev

Write-Host "Completed successfully!" -ForegroundColor Green
