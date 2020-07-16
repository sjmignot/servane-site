echo '############################'
echo '#     SAVING CHANGES       #'
echo '############################'
git add .
git commit -m"changes made to site"
git push

echo '#########################'
echo '# 	BUILDING SITE     #'
echo '#########################'
yarn build
rm -r build
cd ../servanebriand.github.io

echo '############################'
echo '#     DEPLOYING SITE       #'
echo '############################'
git add .
git commit -m"new version deployed"
git push
