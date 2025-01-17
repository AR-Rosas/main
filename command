mkdir -p public/images
touch public/images/hero-image.webp 
rm app/components/PrimeTest.vue 
rm app/components/landing/ServiceTreeNode.vue 
rm app/components/landing/Timeline.vue 
mkdir -p app/components/directory
mv app/components/landing/ServiceTree.vue app/components/directory/ServiceTree.vue 
mkdir -p content/{pages,blog} 
rm -rf node_modules
rm pnpm-lock.yaml 
pnpm install 