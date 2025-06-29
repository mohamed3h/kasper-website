# Accessibility Features

This website has been designed with accessibility in mind to ensure it's usable by people with various disabilities and assistive technologies.

## 🎯 **Keyboard Navigation**

### **Skip Links**
- **Skip to Main Content**: Press `Tab` when the page loads to access the skip link
- **Keyboard Shortcuts**:
  - `Alt + M`: Skip to main content
  - `Alt + ↑/↓`: Navigate between sections
  - `Tab`: Navigate through interactive elements
  - `Enter/Space`: Activate buttons and links
  - `Escape`: Close mobile menu

### **Navigation**
- All navigation elements are keyboard accessible
- Arrow keys work in mobile menu
- Focus indicators are clearly visible
- Tab order follows logical document flow

## 🖥️ **Screen Reader Support**

### **ARIA Labels & Roles**
- Proper heading hierarchy (H1, H2, H3, etc.)
- ARIA landmarks: `banner`, `navigation`, `main`
- ARIA roles: `menubar`, `menuitem`, `tablist`, `tab`, `progressbar`
- ARIA states: `aria-expanded`, `aria-selected`, `aria-current`

### **Semantic HTML**
- `<section>` elements for content areas
- `<article>` for portfolio items
- `<blockquote>` for testimonials
- `<cite>` for attribution
- `<main>` for primary content

### **Alt Text**
- All images have descriptive alt text
- Decorative icons use `aria-hidden="true"`
- Logo includes company name in alt text

## 🎨 **Visual Accessibility**

### **Color & Contrast**
- High contrast color scheme
- WCAG AA compliant color ratios
- Color is not the only way to convey information
- Support for high contrast mode (`prefers-contrast: high`)

### **Focus Indicators**
- Clear blue outline on focused elements
- Focus indicators work with keyboard navigation
- Focus indicators removed for mouse users (`:focus-visible`)

### **Typography**
- Readable font sizes (minimum 14px)
- Good line spacing and letter spacing
- Clear font hierarchy

## 📱 **Mobile Accessibility**

### **Touch Targets**
- All interactive elements are at least 44px × 44px
- Adequate spacing between touch targets
- Mobile menu is fully accessible

### **Responsive Design**
- Works on all screen sizes
- Content reflows appropriately
- No horizontal scrolling required

## ♿ **Assistive Technology Support**

### **Screen Readers**
- NVDA, JAWS, VoiceOver compatible
- Proper heading structure
- Descriptive link text
- Form labels and descriptions

### **Voice Control**
- All interactive elements are voice-command accessible
- Clear, descriptive element names
- Logical tab order

### **Switch Navigation**
- All functionality accessible via switch devices
- Logical tab order
- Clear focus indicators

## 🎭 **Motion & Animation**

### **Reduced Motion**
- Respects `prefers-reduced-motion` setting
- Animations can be disabled
- No essential information in animations

### **Smooth Scrolling**
- Smooth scrolling for navigation
- Respects user motion preferences
- Keyboard accessible scrolling

## 📊 **Content Accessibility**

### **Progress Bars**
- ARIA progressbar roles
- Percentage values announced
- Visual and programmatic indicators

### **Carousel/Slider**
- Keyboard navigation support
- ARIA tablist/tab roles
- Clear navigation controls

### **Portfolio Filter**
- Button-based filtering
- ARIA selected states
- Keyboard accessible

## 🔧 **Testing & Compliance**

### **Standards Compliance**
- WCAG 2.1 AA compliant
- Section 508 compliant
- EN 301 549 compliant

### **Testing Tools**
- Tested with screen readers
- Keyboard navigation verified
- Color contrast checked
- Mobile accessibility tested

## 🚀 **How to Use Accessibility Features**

### **For Keyboard Users**
1. Use `Tab` to navigate through the page
2. Use `Enter` or `Space` to activate elements
3. Use arrow keys in menus and carousels
4. Use `Escape` to close modals and menus

### **For Screen Reader Users**
1. Navigate by headings (H1, H2, H3)
2. Use landmarks to jump to sections
3. Listen for ARIA announcements
4. Use skip links to bypass navigation

### **For Mobile Users**
1. Tap the hamburger menu to open navigation
2. Use swipe gestures for carousel
3. All touch targets are appropriately sized
4. Voice control works on all elements

## 📞 **Support**

If you encounter any accessibility issues:
- Use the contact form to report problems
- Include details about your assistive technology
- Describe the specific issue you're experiencing

## 🔄 **Continuous Improvement**

We're committed to maintaining and improving accessibility:
- Regular accessibility audits
- User feedback integration
- Technology updates
- Standards compliance monitoring

---

*This website is designed to be accessible to everyone, regardless of ability or technology used.* 