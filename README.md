Provided above is both the frontend and backend of the application.
In order to use the applicaiton with aws services you need to do the following:
-Creating a key pair for ssh use
-Creating a new project through CloudFormation and using the provided template (make sure to replace items like the keypair and native ip address inorder to recieve full access)
-Once the app is created connect to the ec2 instance using the ssh keypair (follow the directions on the ec2 connect tab)
-Then run the following commands:
sudo apt update
sudo apt upgrade (check all the boxes for restart using the space bar to select)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs (node.js download)
sudo apt-get install git (git download)
git clone https://github.com/NitayElzur/10Play.git (to download the code to the ec2 instance)
cd 10Play/front/
npm i
cd ..
cd back/
npm i
(inorder to download all the node.js packages)
open a new terminal window and connect it to the ec2 instance
Frontend:
export VITE_SERVER=http://<ec2-public-ipv4-address>:3000/
npm run dev -- --host (this allows outside connections to the frontend)
Backend:
export AWS_BUCKET=<bucket-name>
export AWS_REGION=<region-of-bucket>
npx ts-node server.ts (for first time running you will be prompted to download more packages, accept them)
After all that you should have the ec2 backend and frontend running and viewable from anywhere via your ec2 instance's public ipv4 address along with the specified port

