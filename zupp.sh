#!/bin/bash

# Ask for commit message
read -p "Enter your commit message: " msg

echo
echo "Adding all files..."
git add .
sleep 1

echo
echo "Committing with message: \"$msg\""
git commit -m "$msg"
sleep 1

echo
echo "Pushing to repository..."
git push origin main
sleep 1

echo
echo "All Done . . . . . 👍"
sleep 1

echo
exit 0
sleep 1

echo
clear