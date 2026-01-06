#!/bin/bash

# Harmony UI - npm Publishing Script
# This script automates the publishing process

set -e  # Exit on error

echo "🎨 Harmony UI - Publishing Script"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "tsup.config.ts" ]; then
    echo -e "${RED}❌ Error: tsup.config.ts not found. Are you in the project root?${NC}"
    exit 1
fi

# Step 1: Clean previous builds
echo -e "${BLUE}🧹 Cleaning previous builds...${NC}"
rm -rf dist/

# Step 2: Build the library
echo -e "${BLUE}🔨 Building library...${NC}"
npm run build:lib

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"
echo ""

# Step 3: Check if logged in to npm
echo -e "${BLUE}🔐 Checking npm authentication...${NC}"
if ! npm whoami &> /dev/null; then
    echo -e "${RED}❌ Not logged in to npm. Please run: npm login${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Logged in as: $(npm whoami)${NC}"
echo ""

# Step 4: Show package info
echo -e "${BLUE}📦 Package Information:${NC}"
PACKAGE_NAME=$(node -p "require('./package.json').name")
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo "  Name: $PACKAGE_NAME"
echo "  Version: $PACKAGE_VERSION"
echo ""

# Step 5: Confirm publication
read -p "Do you want to publish $PACKAGE_NAME@$PACKAGE_VERSION? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Publication cancelled${NC}"
    exit 1
fi

# Step 6: Publish
echo -e "${BLUE}🚀 Publishing to npm...${NC}"
npm publish --access public

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Publication failed!${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Successfully published $PACKAGE_NAME@$PACKAGE_VERSION!${NC}"
echo ""
echo "📊 View your package at:"
echo "   https://www.npmjs.com/package/$PACKAGE_NAME"
echo ""
echo "📦 Install with:"
echo "   npm install $PACKAGE_NAME"
echo ""
echo -e "${GREEN}🎉 Congratulations!${NC}"
