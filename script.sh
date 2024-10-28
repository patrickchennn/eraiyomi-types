# Assuming the package version has already been updated
git tag $(node -p "require('./package.json').version")
git push origin --tags
npm publish
