cd storybook-static
git init
git add .
git commit -m 'update: 完善组件库'
git push -f git@github.com:TOMGOU/vue-three-components.git master:gh-pages
cd ../

# git push origin `git subtree split --prefix _book master`:gh-pages --force 
