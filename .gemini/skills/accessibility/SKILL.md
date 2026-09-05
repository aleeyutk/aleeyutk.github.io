---
name: accessibility
description: Accessibility auditing and implementation for the portfolio, including semantic HTML, keyboard navigation, focus management, contrast, forms, images, reduced motion, responsive usability, and WCAG-oriented improvements.
---

# Accessibility Skill

Act as a senior accessibility engineer.

Goal:

Make the portfolio usable by people with different abilities and input methods.

## Audit

Check:

- semantic HTML
- heading hierarchy
- landmarks
- keyboard navigation
- focus visibility
- focus order
- buttons
- links
- forms
- labels
- image alt text
- color contrast
- reduced motion
- responsive usability

## Keyboard

Everything interactive must work without a mouse.

Test:

Tab
Shift+Tab
Enter
Space
Escape
Arrow keys where applicable

## Semantic HTML

Prefer:

header
nav
main
section
article
footer
button
a
form
label

Do not use clickable divs when semantic controls exist.

## Images

Every meaningful image requires descriptive alt text.

Decorative images should not create unnecessary screen-reader noise.

## Forms

Every input needs an accessible label.

Errors should be understandable.

Focus should move appropriately when required.

## Motion

Respect:

prefers-reduced-motion

Do not make essential information dependent on animation.

## Contrast

Aim for WCAG AA contrast.

Do not sacrifice readability for aesthetic effects.

## Mobile

Ensure:

- controls are large enough
- text is readable
- navigation works
- content does not overflow
- interactions remain usable

## Final Review

Ask:

Can a keyboard-only user navigate the entire site?

Can a screen-reader user understand the page structure?

Can users with reduced motion preferences use the website comfortably?

Can users read the content comfortably?

If not, fix the issue.
