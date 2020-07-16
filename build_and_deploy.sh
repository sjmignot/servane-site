echo 'SAVING CHANGES'
echo '#############'
git commit -m"changes made to site"
git push

echo 'BUILDING SITE'
echo '#############'
yarn build
cd ../servanebriand.github.io

echo 'COMMITTING CHANGES TO GITHUB'
echo '#############'
git commit -m"new version deployed"
git push
