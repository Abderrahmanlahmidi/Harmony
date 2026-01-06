# Publishing Guide for @harmony-ui/react

This guide will walk you through the process of publishing your component library to npm.

## 📋 Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **npm CLI**: Make sure npm is installed and updated
3. **Git Repository**: Your code should be in a Git repository

## 🚀 Step-by-Step Publishing Process

### 1. Install Required Dependencies

First, install the build tool:

```bash
npm install -D tsup
```

### 2. Update Package Configuration

Replace your current `package.json` with `library-package.json`:

```bash
# Backup current package.json
mv package.json package.json.backup

# Use library package.json
mv library-package.json package.json
```

**Important Updates Needed:**
- Update `name` if `@harmony-ui/react` is taken
- Update `repository.url` with your GitHub URL
- Update `author` information
- Update `homepage` and `bugs` URLs

### 3. Build the Library

```bash
npm run build:lib
```

This will create a `dist/` folder with:
- `index.js` (CommonJS)
- `index.mjs` (ES Modules)
- `index.d.ts` (TypeScript declarations)

### 4. Test the Build Locally

Before publishing, test your package locally:

```bash
# In your library directory
npm pack

# This creates a .tgz file
# Install it in a test project:
cd /path/to/test-project
npm install /path/to/harmony-ui/harmony-ui-react-1.0.0.tgz
```

### 5. Login to npm

```bash
npm login
```

Enter your npm credentials.

### 6. Publish to npm

For first-time publishing:

```bash
# For scoped packages (recommended)
npm publish --access public

# For unscoped packages
npm publish
```

For updates:

```bash
# Update version first
npm version patch  # 1.0.0 -> 1.0.1
# or
npm version minor  # 1.0.0 -> 1.1.0
# or
npm version major  # 1.0.0 -> 2.0.0

# Then publish
npm publish
```

## 📦 Package Checklist

Before publishing, ensure:

- [ ] All components are exported in `src/components/index.ts`
- [ ] TypeScript types are properly defined
- [ ] README.md is comprehensive
- [ ] LICENSE file is included
- [ ] package.json has correct metadata
- [ ] .npmignore excludes unnecessary files
- [ ] Build succeeds without errors
- [ ] Package works when installed locally

## 🔄 Version Management

Follow [Semantic Versioning](https://semver.org/):

- **PATCH** (1.0.x): Bug fixes, small changes
- **MINOR** (1.x.0): New features, backwards compatible
- **MAJOR** (x.0.0): Breaking changes

```bash
npm version patch -m "Fix: Button hover state"
npm version minor -m "Feature: Add new Tooltip component"
npm version major -m "Breaking: Redesign API"
```

## 📝 Publishing Checklist

### Before Each Release:

1. **Update Version**
   ```bash
   npm version [patch|minor|major]
   ```

2. **Update CHANGELOG.md** (create if doesn't exist)
   ```markdown
   ## [1.0.1] - 2026-01-06
   ### Fixed
   - Button hover state issue
   ### Added
   - New Tooltip component
   ```

3. **Build the Package**
   ```bash
   npm run build:lib
   ```

4. **Test Locally**
   ```bash
   npm pack
   # Test in another project
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "chore: release v1.0.1"
   git push
   ```

6. **Create Git Tag**
   ```bash
   git tag v1.0.1
   git push --tags
   ```

7. **Publish**
   ```bash
   npm publish
   ```

## 🌐 Post-Publishing

After publishing:

1. **Verify on npm**: Check [npmjs.com/package/@harmony-ui/react](https://npmjs.com/package/@harmony-ui/react)

2. **Test Installation**:
   ```bash
   npm install @harmony-ui/react
   ```

3. **Update Documentation**: Update your website/docs with new version

4. **Announce**: Share on social media, Discord, etc.

## 🔧 Troubleshooting

### Package Name Already Exists
```bash
# Change the name in package.json
"name": "@your-username/harmony-ui"
```

### Build Errors
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build:lib
```

### TypeScript Errors
```bash
# Check tsconfig.json
# Ensure all components have proper type exports
```

### Publishing Fails
```bash
# Check if you're logged in
npm whoami

# Check package name availability
npm view @harmony-ui/react

# Try with verbose logging
npm publish --verbose
```

## 📊 Package Stats

After publishing, monitor:
- Downloads: [npm trends](https://npmtrends.com/@harmony-ui/react)
- Bundle size: [bundlephobia](https://bundlephobia.com/package/@harmony-ui/react)
- Package health: [snyk](https://snyk.io/)

## 🎯 Best Practices

1. **Semantic Versioning**: Always follow semver
2. **Changelog**: Maintain a detailed CHANGELOG.md
3. **Testing**: Test before every release
4. **Documentation**: Keep README updated
5. **Dependencies**: Keep peer dependencies minimal
6. **Bundle Size**: Monitor and optimize
7. **TypeScript**: Ensure all types are exported
8. **Backwards Compatibility**: Avoid breaking changes in minor/patch versions

## 🔐 Security

1. **Enable 2FA**: On your npm account
2. **Use npm tokens**: For CI/CD
3. **Audit dependencies**: Run `npm audit` regularly
4. **Review permissions**: Check package access

## 📚 Additional Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [TypeScript Library Starter](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
- [Creating and Publishing Scoped Packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## 🎉 Success!

Once published, your package will be available at:
```bash
npm install @harmony-ui/react
```

Congratulations on publishing your component library! 🚀
