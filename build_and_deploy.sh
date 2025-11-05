parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

echo '############################'
echo '#     SAVING CHANGES       #'
echo '############################'
git pull
git add .
git commit -m"changes made to site"
git push

echo '#########################'
echo '# 	BUILDING SITE     #'
echo '#########################'
yarn build
cd ../servanebriand.github.io

echo '############################'
echo '#     DEPLOYING SITE       #'
echo '############################'
git add .
git commit -m"new version deployed"
git push
