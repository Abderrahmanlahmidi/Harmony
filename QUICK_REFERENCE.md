# Harmony UI - npm Publishing Quick Reference

## 🚀 Quick Commands

### First Time Setup
```bash
# 1. Install build tools (already done)
npm install -D tsup

# 2. Update package.json
mv package.json package.json.backup
mv library-package.json package.json

# 3. Update package name and repository in package.json
```

### Build & Test
```bash
# Build the library
npm run build:lib

# Test locally
npm pack
# Creates: harmony-ui-react-1.0.0.tgz

# Install in test project
cd /path/to/test-project
npm install /path/to/harmony-ui/harmony-ui-react-1.0.0.tgz
```

### Publishing
```bash
# Login to npm (first time only)
npm login

# Publish
npm publish --access public
```

### Version Updates
```bash
# Patch (1.0.0 -> 1.0.1)
npm version patch

# Minor (1.0.0 -> 1.1.0)
npm version minor

# Major (1.0.0 -> 2.0.0)
npm version major

# Then publish
npm publish
```

## 📋 Pre-Flight Checklist

Before publishing:
- [ ] Update package name in package.json
- [ ] Update repository URL
- [ ] Update author info
- [ ] Run `npm run build:lib` successfully
- [ ] Test with `npm pack` and install locally
- [ ] Update CHANGELOG.md
- [ ] Commit all changes
- [ ] Create git tag
- [ ] npm login

## 🎯 Package Structure

```
dist/
├── index.js          # CommonJS
├── index.mjs         # ES Modules
├── index.d.ts        # TypeScript types
└── styles.css        # Component styles
```

## 📦 What Gets Published

✅ Included:
- dist/ folder
- README.md
- LICENSE
- package.json

❌ Excluded (via .npmignore):
- src/ (except components)
- node_modules/
- .storybook/
- *.stories.tsx
- Test files
- Config files

## 🔧 Troubleshooting

### Build Fails
```bash
rm -rf dist node_modules
npm install
npm run build:lib
```

### Package Name Taken
Update in package.json:
```json
"name": "@your-username/harmony-ui"
```

### Not Logged In
```bash
npm login
# Enter credentials
npm whoami  # Verify
```

### Permission Denied
```bash
npm publish --access public
```

## 📊 After Publishing

Check your package:
- npm: https://npmjs.com/package/@harmony-ui/react
- Bundle size: https://bundlephobia.com
- Downloads: https://npmtrends.com

## 🎓 Resources

- Full Guide: PUBLISHING_GUIDE.md
- README: LIBRARY_README.md
- Changelog: CHANGELOG.md
- Summary: NPM_READY.md

## 💡 Tips

1. **Test before publishing**: Always test locally first
2. **Semantic versioning**: Follow semver strictly
3. **Changelog**: Update before each release
4. **Git tags**: Tag releases in git
5. **Documentation**: Keep README updated
6. **Dependencies**: Keep peer deps minimal

## 🎉 Success Indicators

After publishing, you should see:
```bash
+ @harmony-ui/react@1.0.0
```

Install test:
```bash
npm install @harmony-ui/react
```

## 📞 Quick Links

- npm docs: https://docs.npmjs.com
- Semantic versioning: https://semver.org
- TypeScript: https://typescriptlang.org

---

**Ready to publish?** Run: `npm run build:lib && npm publish --access public`
