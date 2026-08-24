# Contributing to Centurion Diamond Redesign

Thank you for your interest in contributing! This guide will help you get started.

## How to Contribute

### 1. Fork the Repository

```bash
# Click "Fork" on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/centurion-diamond-redesign.git
cd centurion-diamond-redesign
```

### 2. Create a Branch

```bash
# Create a descriptive branch name
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Follow the existing code style
- Use TypeScript strict mode
- Add comments for complex logic
- Test your changes locally

### 4. Test Your Changes

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Build the project
npm run build

# Test locally
npm start
```

### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "Add: your feature description"
```

### 6. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

## Code Style Guidelines

### TypeScript

- Use strict mode
- Define interfaces for props and data
- Avoid `any` type
- Use type inference when clear

### React Components

```typescript
// Functional component with typed props
interface ComponentProps {
  title: string
  count?: number
}

export default function Component({ title, count = 0 }: ComponentProps) {
  return <div>{title} - {count}</div>
}
```

### Tailwind CSS

- Use utility classes over custom CSS
- Follow mobile-first approach
- Use semantic color names (e.g., `text-gold-500`)

### Animations

- Keep animations under 1 second
- Use cubic-bezier for smooth easing
- Respect user preferences (`prefers-reduced-motion`)

## What to Contribute

### Good First Issues

- Bug fixes
- Documentation improvements
- Performance optimizations
- Accessibility enhancements

### Feature Requests

- New sections or components
- Animation improvements
- Theme variations
- Integration with other tools

## Reporting Issues

### Bug Reports

Include:
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS version
- Screenshots if applicable

### Feature Requests

Include:
- Clear description
- Use case or problem solved
- Examples or mockups
- Priority level

## Review Process

1. **Automated Checks:** CI/CD pipeline runs
2. **Code Review:** Maintainer reviews code
3. **Testing:** Changes tested on multiple devices
4. **Merge:** Approved PRs merged to main

## Questions?

- Open an issue for general questions
- Check existing issues and PRs
- Read the documentation

## Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Contribute with precision. Build for brilliance.** 💎
